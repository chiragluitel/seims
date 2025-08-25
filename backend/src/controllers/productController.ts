import { Request, Response, response } from "express";
import { query } from "../database";

export const getProductInfo = async (req: Request, res: Response) =>{
    try{
        const result = await query('SELECT * FROM products;')
        res.json(result.rows)
    }catch(error:any){
        console.error('Error Occured when getting Product', error)
    }
}