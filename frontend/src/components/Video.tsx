//To Fix: Pausing of Video doesn't turn off cam
import { useRef, useState} from 'react';
import useVideoStream from '../hooks/visuals/useVideoStream'; // Using solid icons for better visibility
import VideoOff from './loaders/videoOff';
import VideoPausePlay from './buttons/videoPausePlay';


const Video = () => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isVideoON, setIsVideoOn] = useState<boolean>(true);
    const { videoLoading }  = useVideoStream(videoRef, isVideoON);

    const handleOnOff = () => {
        setIsVideoOn(!isVideoON);
    };

    return (
        <div className="relative bg-gray-100 rounded-md shadow-sm overflow-hidden">
            {!isVideoON && (
                <VideoOff />
            )}
            <video
                ref={videoRef}
                className={`w-full h-auto aspect-video`}
                style={{ display: videoLoading ? 'none' : 'block' }}
            />
            <button
                onClick={handleOnOff}
                className="absolute top-2 left-2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-700 rounded-full p-1 shadow-md transition-colors"
            >
                <VideoPausePlay isVideoOn={isVideoON} />
            </button>
        </div>
    );
};

export default Video;