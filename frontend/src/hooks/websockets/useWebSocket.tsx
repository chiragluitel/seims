import { useEffect, useState } from "react"

const useWebSocket = (url: string, hasTrigerred: boolean) => {

    const [data, setData] = useState ([])
    const [isReady, setIsReady] = useState(false)
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(()=>{
        if(hasTrigerred){
            const ws = new WebSocket (url);

            ws.onopen = () =>{
                console.log("Connected to Remote WebSocket")
                setIsReady(true);
            }
    
            ws.onmessage = (event) =>{
                const parsedData = JSON.parse(event.data);
                setData(parsedData);
                console.log('parsed data:', parsedData)
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
        }else{
            return
        }

    }, [url, hasTrigerred])

    return {socket, data, isReady}

}

export default useWebSocket;