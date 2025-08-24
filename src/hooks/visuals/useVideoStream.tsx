//Needs rework

import { useEffect, useState, useRef } from "react";

const useVideoStream = (isVideoOn: boolean) =>{

    const videoRef = useRef<HTMLVideoElement | null> (null);
    const [videosStream, setVideoStream] = useState<  MediaStream | null >(null);
    const [videoLoading, setVideoLoading] = useState(true);
    const startVideo = async () =>{    
        try{
            const stream = await navigator.mediaDevices.getUserMedia({video:true});
            if(videoRef.current){
                videoRef.current.srcObject = stream;
                videoRef.current.play();
                setVideoStream(stream);
            }
        }catch(error:any){
            setVideoLoading(false)
            console.error("Unable to get user media: Video. Error Message: ", error)
        }
    } 

    const stopVideo = () =>{
        try{
            const stream = videoRef.current?.srcObject;
            if (stream instanceof MediaStream){
                const tracks = stream.getTracks();
                tracks.forEach(track=>{
                    track.stop();
                })
            }
            if(videoRef.current){
                videoRef.current.srcObject = null;
            }
        }catch(error:any){
            console.error("Unable to stop user media: Video. Error Message: ", error);
        }
    }

    useEffect(()=>{
        if(isVideoOn){
            startVideo();
        }else{
            stopVideo();
        }
    }, [isVideoOn])

    return {videosStream, videoLoading}
}

export default useVideoStream;

