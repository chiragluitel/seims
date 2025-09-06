import { Request, Response } from "express";
import { query } from "../database";

export const getAllLocations = async (req: Request, res: Response) => {
    try{
        const build_query = `
        SELECT
        location_id as id,
        location_name as name
        FROM m_shopfloor_location_master
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