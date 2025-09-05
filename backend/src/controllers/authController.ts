import { Request, Response } from "express"
import { query } from "../database"

export const getUserDetails = async (req: Request, res: Response)  => {
    const {userId} = req.query
    try{
        const build_query = `SELECT 'Chirag Luitel' as name, 'SEIMS' as organisation, 'CEO' as job_title, '/logoexample.jpg' as hashed_password FROM products;`
        const result = await query(build_query)
        res.json(result.rows);
    }catch(error:any){
        res.status(200).json({
            message: 'An Error Occured when getting User'
        })
    }
    
}