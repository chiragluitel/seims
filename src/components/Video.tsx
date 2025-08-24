//Needs rework

import {useRef, useState} from 'react'
import useVideoStream from '../hooks/visuals/useVideoStream';
const Video = () => {
    const [videoON, setVideoOn] = useState<boolean> (false);    
    const handleOnOff = () => {
        setVideoOn(!videoON);
    }
    const {videoLoading, videosStream} = useVideoStream(videoON)

    const videoRef = useRef<HTMLVideoElement | null> (null);
    if (videoRef.current && !videoLoading){
        videoRef.current.srcObject = videosStream
    }
    return (
        <>
            <div>
                <button className='cursor-pointer' onClick={() => handleOnOff()} > Click to See Video </button>
                {videoLoading ? (<div> loading </div>):(<video ref={videoRef} />)  }
            </div>
        </>
    )
}

export default Video;