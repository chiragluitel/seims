import { Request, Response } from "express";
import { query } from "../database";
import dotenv from "dotenv";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
dotenv.config();

export const createProduct = async (req: Request, res:Response) => {
    if(!process.env.ENTERPRISE_KEY){
        console.error("No Enterprise Key Set. Check ENV");
        return;
    }
    const {
        product_name,
        product_description,
        product_longdescription,
        product_instore_price,
        product_online_price,
        product_soh,
        product_location,
        product_category,
        product_image,
        product_barcode
    } = req.body
    const sanitizedProductName = product_name.trim().replace(/\s+/g, '-');
    const dynamicProductId = `${process.env.ENTERPRISE_KEY}-${sanitizedProductName}`;
  
    try{
        await query('BEGIN')
        //1
        const productMasterQuery = `
        INSERT INTO m_product_master (enterprise_id, product_id, product_barcode, category_id)
        VALUES ($1, $2, $3, $4)
        RETURNING product_id, sku;
        `;
        const productMasterResult = await query(productMasterQuery, [
            process.env.ENTERPRISE_KEY,
            dynamicProductId,
            product_barcode,
            product_category,
        ]);
        const {product_id, sku} = productMasterResult.rows[0]

        //2
        const longDescQuery = `
        INSERT INTO m_longdescription_detail (longdescription_text)
        VALUES ($1)
        RETURNING longdescription_id;
        `;
        const longDescResult = await query(longDescQuery, [product_longdescription]);
        const { longdescription_id } = longDescResult.rows[0];
        //2.5
        const imageQuery = `
        INSERT INTO m_productimages_master (product_id, sku, imageurl)
        VALUES ($1, $2, $3)
        `
        await query(imageQuery, [
            product_id, sku, product_image
        ])
        //3
        const productDetailQuery = `
        INSERT INTO m_product_detail (product_id, sku, product_name, product_description, category_id, longdescription_id)
        VALUES ($1, $2, $3, $4, $5, $6);
        `;
        await query(productDetailQuery, [
            product_id,
            sku,
            product_name,
            product_description,
            product_category,
            longdescription_id,
        ]);
        
        if(product_location){
            //4
            const productLocationQuery = `
            INSERT INTO m_inventory_master (enterprise_id, product_id, sku, soh, quantity_ordered, location_id)
            VALUES ($1, $2, $3, $4, $5, $6)
            `
            await query(productLocationQuery, [
                process.env.ENTERPRISE_KEY,
                product_id,
                sku,
                product_soh,
                0,
                product_location
            ])
        }

        //5
        const productPriceQuery = `
        INSERT INTO m_product_prices_master (product_id, sku, store_price, online_price, discount_price)
        VALUES ($1, $2, $3, $4, $5)
        `
        await query (productPriceQuery, [
            product_id,
            sku,
            product_instore_price,
            product_online_price,
            0
        ])

        //6
        const locationTo =  product_location? product_location : null;
        const transactionQuery = `
        INSERT INTO m_product_transaction_history(enterprise_id, product_id, sku, transaction_type, location_from, location_to, sale_price)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        `
        await query (transactionQuery,[
            process.env.ENTERPRISE_KEY,
            product_id,
            sku,
            'NEW-REG',
            null,
            locationTo,
            null
        ])

        await query('COMMIT');
        res.status(201).json({ message: 'Product created successfully', product_id: product_id });
    }catch(error: any){
        await query('ROLLBACK');
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Failed to create product', error: error.message });
    }
}


export const uploadImage = async (req: Request, res: Response) => {

    const { filename, fileType } = req.body;

    if (!filename || !fileType) {
        return res.status(400).json({ error: 'Filename and fileType are required.' });
    }
    
    const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
    const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
    const AWS_REGION = process.env.AWS_REGION;
    const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME;

    if (!AWS_ACCESS_KEY_ID || !AWS_SECRET_ACCESS_KEY || !AWS_REGION || !S3_BUCKET_NAME) {
        console.error("Missing required environment variables. Check ENV.");
        return res.status(500).json({ error: "Server configuration error." });
    }

    const s3Client = new S3Client({
        region: AWS_REGION,
        credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
    });

    const command = new PutObjectCommand({
        Bucket: S3_BUCKET_NAME,
        Key: `seims/${process.env.ENTERPRISE_KEY}/${filename}`,
        ContentType: fileType,
    });

    try{
        const url = await getSignedUrl(s3Client, command, {expiresIn: 3600});
        res.json({url})
    }catch(err){
        console.error("Error generating signed URL:", err);
        res.status(500).json({ error: "Could not generate signed URL." });
    }

}

export const getOneProduct = async (req: Request, res: Response) =>{
    const { productId } = req.query
    try{
        const build_query = `
        SELECT 
            pm.product_id as id, 
            pm.sku as sku, 
            pd.product_name as name, 
            pd.product_description as description, 
            ld.longdescription_text as long_description,
            pri.store_price as instore_price, 
            pri.online_price as online_price, 
            pri.discount_price as discounted_price, 
            inv.soh as soh, 
            inv.quantity_ordered as ordered_quantity, 
            json_build_object(
                'id', loc.location_id,
                'name', loc.location_name
            ) as location,
            json_build_object(
                'id', cat.category_id,
                'name', cat.category_name
            ) as category,
            im.imageurl as image, 
            pm.product_barcode as barcode 
        FROM m_product_master pm
        LEFT JOIN m_product_detail pd on pd.product_id = pm.product_id
        LEFT JOIN m_product_prices_master pri on pri.product_id = pm.product_id
        LEFT JOIN m_productimages_master im on im.product_id = pm.product_id
        LEFT JOIN m_inventory_master inv on inv.product_id = pm.product_id
        LEFT JOIN m_shopfloor_location_master loc on loc.location_id = inv.location_id 
        LEFT JOIN m_category_master cat on cat.category_id = pd.category_id
        LEFT JOIN m_longdescription_detail ld on ld.longdescription_id = pd.longdescription_id
        WHERE pm.product_id = $1 and pm.enterprise_id = $2;
        `
        const result = await query(build_query, [productId, process.env.ENTERPRISE_KEY] )
        res.json(result.rows)
    }catch(error:any){
        console.error('Error Occured when getting Product', error)
    }
}

export const getAllProducts = async (req:Request, res: Response) => {
    try{
        const build_query = `
        SELECT 
            pm.product_id as id, 
            pm.sku as sku, 
            pd.product_name as name, 
            pd.product_description as description, 
            ld.longdescription_text as long_description,
            (pri.store_price * 100)::int as instore_price_cents, 
            (pri.online_price * 100)::int as online_price_cents, 
            (pri.discount_price * 100)::int as discounted_price_cents, 
            (inv.soh * 1000)::int as soh_cents,
            (inv.quantity_ordered * 1000)::int as ordered_quantity_cents, 
            json_build_object(
                'id', loc.location_id,
                'name', loc.location_name
            ) as location,
            json_build_object(
                'id', cat.category_id,
                'name', cat.category_name
            ) as category,
            im.imageurl as image, 
            pm.product_barcode as barcode 
        FROM m_product_master pm
        LEFT JOIN m_product_detail pd on pd.product_id = pm.product_id
        LEFT JOIN m_product_prices_master pri on pri.product_id = pm.product_id
        LEFT JOIN m_productimages_master im on im.product_id = pm.product_id
        LEFT JOIN m_inventory_master inv on inv.product_id = pm.product_id
        LEFT JOIN m_shopfloor_location_master loc on loc.location_id = inv.location_id 
        LEFT JOIN m_category_master cat on cat.category_id = pd.category_id
        LEFT JOIN m_longdescription_detail ld on ld.longdescription_id = pd.longdescription_id
        WHERE pm.enterprise_id = $1;
        `
        const result = await query(build_query, [process.env.ENTERPRISE_KEY]);
        res.status(200).json(result.rows);
        
    }catch (error:any){
        res.json({
            message: "An Error Occured when GETTING products"
        });
        console.log(error);
    }
}

export const getAllProductCategories = async (req: Request, res: Response) => {
    try{
        const build_query = `
        SELECT
        category_id as id, 
        category_name as name
        FROM m_category_master
        WHERE enterprise_id = $1
        `
        if(!process.env.ENTERPRISE_KEY){
            throw new Error('Enterprise Key Not Set. Query Failed.')
        }
        const result = await query(build_query, [process.env.ENTERPRISE_KEY])
        res.json(result.rows);
    }catch(error:any){
        res.status(400).json({
            message: error
        })
    }
}