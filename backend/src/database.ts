
import { Pool } from "pg"
import dotenv from 'dotenv'

dotenv.config()

export const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

export const query = (text: string, params: any[] = []) => {
    return pool.query(text, params);
}

export const establishConnectionToDB = async() => {
    try{
        await pool.connect();
        console.log('Connected to SEIMS DB')
    }catch(error:any){
        console.error('Error connecting to SEIMS DB', error)
    }
}