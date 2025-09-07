import express, { Request, Response } from 'express'
import dotenv from "dotenv";
import {createServer} from 'http'
import productRouter from './routes/productRoutes';
import {establishConnectionToDB} from './database'
import cors from "cors";
import authRouter from './routes/authRoutes';
import shopfloorRouter from './routes/shopfloorRoutes';

dotenv.config();
const seimsExpressServer = express();

const port = Number(process.env.PORT);
seimsExpressServer.use(cors());
seimsExpressServer.use(express.json())

seimsExpressServer.get('/', (req: Request, res: Response) => {
    res.send('Welcome to SEIMS');
})

seimsExpressServer.use('/products', productRouter)
seimsExpressServer.use('/auth', authRouter)
seimsExpressServer.use('/shopfloor', shopfloorRouter)
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
