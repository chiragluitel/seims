import { useRef, useState } from "react";
import useWebSocket from "../../hooks/websockets/useWebSocket";
import useVideoStream from "../../hooks/visuals/useVideoStream";
import useFrameSender from "../../hooks/visuals/useFrameSender";
import useCanvasRenderer from "../../hooks/visuals/useCanvasRenderer";
import VideoOff from "../loaders/videoOff";
import VideoPausePlay from "../buttons/videoPausePlay";

const ObjectTracker = () => {
    const videoRef = useRef<HTMLVideoElement | null > (null)
    const [isVideoOn, setIsVideoOn] = useState(false);
    const canvasRefToSend = useRef<HTMLCanvasElement | null>(null)
    const handleClick = () =>{
      setIsVideoOn(!isVideoOn)
      console.log('Button Clicked')
    }
    const { socket, data, isReady } = useWebSocket('ws://localhost:8000/ws', isVideoOn);
    const {videoLoading} = useVideoStream(videoRef, isVideoOn);
    useFrameSender(videoRef, isReady, socket, isVideoOn);
    useCanvasRenderer(videoRef, canvasRefToSend, data)

    return (
      <>
      <div>
        <button
                onClick={handleClick}
                className="bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-700 rounded-full p-1 shadow-md transition-colors"
            >
              <VideoPausePlay isVideoOn={isVideoOn} />
        </button>
        {!isVideoOn || videoLoading && (
            <VideoOff />
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
      </>
    );
  };
  
  export default ObjectTracker;
  