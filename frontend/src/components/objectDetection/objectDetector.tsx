import { useEffect, useRef, useState } from "react";
import useWebSocket from "../../hooks/websockets/useWebSocket";
import useVideoStream from "../../hooks/visuals/useVideoStream";
import useFrameSender from "../../hooks/visuals/useFrameSender";
import { type DetectedObject, type DetectionResults } from "../../types";
import VideoOff from "../loaders/videoOff";
import VideoPausePlay from "../buttons/videoPausePlay";


const ObjectDetector = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const [isVideoOn, setIsVideoOn] = useState(false);
  
    const handleClick = () =>{
      setIsVideoOn(!isVideoOn)
      console.log('Button Clicked')
    }
    const { socket, data, isReady } = useWebSocket('ws://localhost:8000/ws', isVideoOn);
    const {videoLoading } = useVideoStream(videoRef, isVideoOn);
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
            {!isVideoOn || videoLoading && (
              <VideoOff />
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
              <VideoPausePlay isVideoOn={isVideoOn} />
            </button>
        </div>
        <div className="mt-4 text-lg font-semibold text-gray-800">
          <h2> Objects Detected: </h2>
                {detectedObject.length > 0 ? (
                  <ul className="mt-2 list-disc list-inside space-y-1 text-gray-600" >
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
  