import { useEffect, useRef, useState } from "react";
import useWebSocket from "../../hooks/websockets/useWebSocket";
import useVideoStream from "../../hooks/visuals/useVideoStream";
import useFrameSender from "../../hooks/visuals/useFrameSender";
import useCanvasRenderer from "../../hooks/visuals/useCanvasRenderer";
import type { DetectedObject, DetectionResults } from "../../types";
import { useCartFunctions } from "../../hooks/useCartFunctions";
import { products } from "../../mocked_DB/Products";
import VideoOff from "../loaders/videoOff";
import VideoPausePlay from "../buttons/videoPausePlay";

const SmartCheckout = () => {
    const [isVideoOn, setIsVideoOn] = useState(false);
    const canvasRefToSend = useRef<HTMLCanvasElement | null>(null)
    const videoRefToSend = useRef<HTMLVideoElement | null> (null)
    const addedObjectIDsRef = useRef(new Set<number>());

    const { socket, data, isReady } = useWebSocket('ws://localhost:8000/ws', isVideoOn);
    const {videoLoading} = useVideoStream(videoRefToSend, isVideoOn);
    const {addItem} = useCartFunctions()
    useFrameSender(videoRefToSend, isReady, socket, isVideoOn);
    useCanvasRenderer(videoRefToSend, canvasRefToSend, data)

    const handleClick = () =>{
        setIsVideoOn(!isVideoOn)
    }

    useEffect(()=>{
      if(!data || !addedObjectIDsRef.current){
        return
      }
      const detectedObjectsMap = new Map<number, DetectedObject>();
      (data as DetectionResults[]).forEach(object => {
        const id = object[0]
        const label = object[2]
        detectedObjectsMap.set(id, { id, label });
      })
        //implement a hook here to pass object ID that adds it to cart.
        detectedObjectsMap.forEach((object)=>
        {
            if(!addedObjectIDsRef.current.has(object.id)){
                if(object.label == 'waiwai'){
                    addItem(products[0])
                    addedObjectIDsRef.current.add(object.id)
                }else if(object.label == 'top_biscuit'){
                    addItem(products[1])
                    addedObjectIDsRef.current.add(object.id)
                }else if (object.label == 'chana_mix'){
                    addItem(products[2])
                    addedObjectIDsRef.current.add(object.id)
                }else{
                    return
                }
            }

        })
    }, [data])

    return (
      <div className="rounded-md shadow-sm overflow-hidden p-4 relative">
        <h1 className="text-2xl font-bold mb-3 text-gray-800"> Smart Checkout </h1>
        <button onClick={handleClick} 
        className="absolute top-2 right-2 z-10 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-700 rounded-full p-1 shadow-md transition-colors"
        >
            <VideoPausePlay isVideoOn={isVideoOn} />
        </button>
        {(!isVideoOn ||  videoLoading) && (
            <VideoOff />
        )}
        <div className="w-full aspect-video">
            <canvas
                ref={canvasRefToSend}
                className="w-full h-full"
                style={{display: isVideoOn ? 'block' : 'none'}}
            />
            <video
                ref={videoRefToSend}
                className="w-full h-full"
                style={{ display: isVideoOn ? 'none' : 'none' }}
            />
        </div>
      </div>
    );
  };

  export default SmartCheckout;