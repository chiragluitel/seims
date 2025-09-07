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
        product_barcode
    } = req.body
    console.log(
            'Data Received:',
            product_name,
            product_description,
            product_longdescription,
            product_instore_price,
            product_online_price,
            product_soh,
            product_location,
            product_category,
            product_barcode
    )
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
        product_id as id,
        product_name as name,
        product_price as price,
        product_image as image
        FROM
        products
        WHERE product_id = $1;
        `
        const result = await query(build_query, [productId] )
        res.json(result.rows)
    }catch(error:any){
        console.error('Error Occured when getting Product', error)
    }
}

export const getAllProducts = async (req:Request, res: Response) => {
    try{
        const build_query = `
        SELECT 
        product_id as id,
        product_name as name,
        product_price as price,
        product_image as image
        FROM
        products;
        `
        const result = await query(build_query);
        res.status(200).json(result.rows);
    }catch (error:any){
        // res.json({
        //     message: "An Error Occured when GETTING products"
        // });
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