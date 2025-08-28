//Needs rework

import { useEffect, useState } from "react";

const useVideoStream = (videoRefReceived: React.RefObject<HTMLVideoElement|null> ,isVideoOn: boolean) =>{

    // const videoRef = useRef<HTMLVideoElement | null> (null);
    // const [videosStream, setVideoStream] = useState<  MediaStream | null >(null);
    const [videoLoading, setVideoLoading] = useState(true);
    const startVideo = async () =>{    
        try{
            const stream = await navigator.mediaDevices.getUserMedia({video:true});
            if(videoRefReceived.current){
                console.log('Video Ref Current')
                videoRefReceived.current.srcObject = stream;
                videoRefReceived.current.play();
            }
        }catch(error:any){
            console.error("Unable to get user media: Video. Error Message: ", error)
        }finally{
            setVideoLoading(false);
        }
    } 

    const stopVideo = () =>{
        try{
            const stream = videoRefReceived.current?.srcObject;
            if (stream instanceof MediaStream){
                const tracks = stream.getTracks();
                tracks.forEach(track=>{
                    track.stop();
                })
            }
            if(videoRefReceived.current){
                videoRefReceived.current.srcObject = null;
            }
            // setVideoStream(null)
        }catch(error:any){
            console.error("Unable to stop user media: Video. Error Message: ", error);
        }
    }

    useEffect(()=>{
        if(isVideoOn){
            startVideo();
        }else{
            stopVideo();
            return () => stopVideo()
        }
    }, [isVideoOn])

    return {videoLoading}
}

export default useVideoStream;

