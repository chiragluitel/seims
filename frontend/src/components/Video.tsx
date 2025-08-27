//To Fix: Pausing of Video doesn't turn off cam
import { useState} from 'react';
import useVideoStream from '../hooks/visuals/useVideoStream'; // Using solid icons for better visibility
import { FiPause, FiPlay, FiWifiOff } from 'react-icons/fi';


const Video = () => {
    const [videoON, setVideoOn] = useState<boolean>(true);
    const { videoLoading, videoRef } = useVideoStream(videoON);


    const handleOnOff = () => {
        setVideoOn(!videoON);
    };

    return (
        <div className="relative bg-gray-100 rounded-md shadow-sm overflow-hidden">
            {!videoON && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 bg-opacity-75 text-gray-600">
                    <FiWifiOff className="h-12 w-12 mb-2" />
                    <p className="text-sm">Video Off</p>
                </div>
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
                {videoON ? (
                    <FiPause className="h-5 w-5" />
                ) : (
                    <FiPlay className="h-5 w-5" />
                )}
            </button>
        </div>
    );
};


export default Video;