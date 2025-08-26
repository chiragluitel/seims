import express, { Request, Response } from 'express'
import dotenv from "dotenv";
import {createServer} from 'http'
import productRouter from './routes/productRoutes';
import {establishConnectionToDB} from './database'
import cors from "cors";

dotenv.config();
const seimsExpressServer = express();

const port = Number(process.env.PORT);
seimsExpressServer.use(cors());

seimsExpressServer.get('/', (req: Request, res: Response) => {
    res.send('Welcome to SEIMS');
})

seimsExpressServer.use('/products', productRouter)
const httpServer = createServer(seimsExpressServer);

async function startServer(){
    try{
        await establishConnectionToDB();
        httpServer.listen(port, "0.0.0.0", ()=>{console.log('Server Started at', port)})
    }catch(error:any){
        console.error('Error starting server', error)
    }
}

startServer();
