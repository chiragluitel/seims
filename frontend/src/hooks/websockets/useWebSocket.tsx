import { useEffect, useState } from "react"

const useWebSocket = (url: URL) => {

    const [data, setData] = useState (null)
    const [isReady, setIsReady] = useState(false)
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(()=>{
        const ws = new WebSocket (url);

        ws.onopen = () =>{
            console.log("Connected to Remote WebSocket")
            setIsReady(true);
        }

        ws.onmessage = (event) =>{
            const parsedData = JSON.parse(event.data);
            setData(parsedData);
        }

        ws.onclose = ( ) =>{
            console.log ( "Disconnected from Remote WS")
            setIsReady(false);
        }

        ws.onerror = (error) => {
            console.error( "Error in WebSocket: ", error);
        }
        
        setSocket(ws);

        return () => {
            if (ws.readyState == WebSocket.OPEN){
                ws.close();
            }
        };
    }, [url])

    return {socket, data, isReady}

}

export default useWebSocket;