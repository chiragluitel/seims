//Needs Refactoring
import { useEffect, useRef, useState } from "react";
import useWebSocket from "../../hooks/websockets/useWebSocket";
import useVideoStream from "../../hooks/visuals/useVideoStream";
import useFrameSender from "../../hooks/visuals/useFrameSender";
import { FiPause, FiPlay, FiWifiOff } from "react-icons/fi";
import useCanvasRenderer from "../../hooks/visuals/useCanvasRenderer";
import type { DetectedObject, DetectionResults } from "../../types";
import { useCartFunctions } from "../../hooks/useCartFunctions";
import { products } from "../../mocked_DB/Products";

const SmartTracker = () => {
    const [isVideoOn, setIsVideoOn] = useState(false);
    const canvasRefToSend = useRef<HTMLCanvasElement | null>(null)
    const addedObjectIDsRef = useRef(new Set<number>());
    
    const { socket, data, isReady } = useWebSocket('ws://localhost:8000/ws', isVideoOn);
    const {videoRef} = useVideoStream(isVideoOn);
    const {addItem} = useCartFunctions()
    useFrameSender(videoRef, isReady, socket, isVideoOn);
    useCanvasRenderer(videoRef, canvasRefToSend, data)
    
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
      <>
      <div>
        <button
                onClick={handleClick}
                className="bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-700 rounded-full p-1 shadow-md transition-colors"
            >
                {isVideoOn ? (
                    <FiPause className="h-5 w-5" />
                ) : (
                    <FiPlay className="h-5 w-5" />
                )}
        </button>
        {!isVideoOn && (
                <div className="w-164 h-120 inset-0 flex flex-col items-center justify-center bg-gray-200 bg-opacity-75 text-gray-600">
                    <FiWifiOff className="h-12 w-12 mb-2" />
                    <p className="text-sm">Video Off</p>
                </div>
        )}
      </div>
        <div className="absolute bg-gray-100 rounded-md shadow-sm overflow-hidden">
            <canvas 
            ref={canvasRefToSend}
            style={{display: 'block'}}
            />
            <video
                ref={videoRef}
                className={`w-full h-auto aspect-video`}
                style={{ display: 'none' }}
            />
        </div>
        {/* <div className="mt-4 text-lg font-semibold text-gray-800 text-center">
          <h2> Objects Detected: </h2>
                {detectedObject.length > 0 ? (
                  <ul className="mt-2 list-disc list-inside space-y-1 text-center text-gray-600" >
                    {detectedObject.map((object)=>(
                      <li key={object.id} className="flex items-center">
                        <span className="font-bold text-blue-600 text-centre"> {object.label} | ID: {object.id} </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p> None </p>
                )}
        </div> */}
      </>
    );
  };
  
  export default SmartTracker;
  