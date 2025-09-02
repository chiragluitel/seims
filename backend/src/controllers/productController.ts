import { Request, Response } from "express";
import { query } from "../database";

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