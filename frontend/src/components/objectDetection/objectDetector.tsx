import { useEffect, useState } from "react";
import useWebSocket from "../../hooks/websockets/useWebSocket";
import useVideoStream from "../../hooks/visuals/useVideoStream";
import useFrameSender from "../../hooks/visuals/useFrameSender";
import { FiPause, FiPlay, FiWifiOff } from "react-icons/fi";
import { type DetectedObject, type DetectionResults } from "../../types";


const ObjectDetector = () => {
    const [isVideoOn, setIsVideoOn] = useState(false);
  
    const handleClick = () =>{
      setIsVideoOn(!isVideoOn)
      console.log('Button Clicked')
    }
    const { socket, data, isReady } = useWebSocket('ws://localhost:8000/ws', isVideoOn);
    const {videoRef } = useVideoStream(isVideoOn);
    useFrameSender(videoRef, isReady, socket, isVideoOn);
    
    const [detectedObject, setDetectedObject] = useState<DetectedObject[]>([])

    useEffect(()=>{
      
      if(!data){
        setDetectedObject([])
        return
      }
      console.log('Use Effect Triggered' )
      const detectedObjectsMap = new Map<number, DetectedObject>();

      (data as DetectionResults[]).forEach(object => {
        const id = object[0]
        const label = object[2]

        detectedObjectsMap.set(id, { id, label });
      })

      setDetectedObject(Array.from(detectedObjectsMap.values()))
    }, [data])
  
    return (
      <>
        <div className="relative bg-gray-100 rounded-md shadow-sm overflow-hidden">
            {!isVideoOn && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 bg-opacity-75 text-gray-600">
                    <FiWifiOff className="h-12 w-12 mb-2" />
                    <p className="text-sm">Video Off</p>
                </div>
            )}
            <video
                ref={videoRef}
                className={`w-full h-auto aspect-video`}
                style={{ display: 'block' }}
            />
            <button
                onClick={handleClick}
                className="absolute top-2 left-2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-700 rounded-full p-1 shadow-md transition-colors"
            >
                {isVideoOn ? (
                    <FiPause className="h-5 w-5" />
                ) : (
                    <FiPlay className="h-5 w-5" />
                )}
            </button>
        </div>
        <div className="mt-4 text-lg font-semibold text-gray-800 text-center">
          <h2> Objects Detected: </h2>
                {detectedObject.length > 0 ? (
                  <ul className="mt-2 list-disc list-inside space-y-1 text-center text-gray-600" >
                    {detectedObject.map((object)=>(
                      <li key={object.id} className="flex items-center text-center">
                        <span className="font-bold text-blue-600 text-center"> {object.label} | ID: {object.id} </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p> None </p>
                )}
        </div>
      </>
    );
  };
  
  export default ObjectDetector;
  