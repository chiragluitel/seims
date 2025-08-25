import express, { Request, Response } from 'express'
import dotenv from "dotenv";
import {createServer} from 'http'
import productRouter from './routes/productRoutes';
import {establishConnectionToDB} from './database'

dotenv.config();
const app = express();

const port = Number(process.env.PORT);

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to SEIMS');
})

app.use('/products', productRouter)
const httpServer = createServer(app);

async function startServer(){
    try{
        await establishConnectionToDB();
        httpServer.listen(port, "0.0.0.0", ()=>{console.log('Server Started at', port)})

    }catch(error:any){
        console.error('Error starting server', error)
    }
}

startServer();
