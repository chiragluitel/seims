import {useRef, useEffect, useState} from 'react'
const Video = () => {
    
    const videoRef = useRef<HTMLVideoElement> (null);
    const [videoON, setVideoOn] = useState<boolean> (false);

    const handleOnOff = () => {
        setVideoOn(!videoON);
    }
    useEffect (()=> {
        const showVideo = async () => {
            try{
                const stream = await navigator.mediaDevices.getUserMedia({video:true});
                
                if(videoRef.current){
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }

            }catch(error:any){
                console.log("Error occured when getting webcam stream: ", error)
            }
        }

        const stopVideo = () => { 
            const stream = videoRef.current?.srcObject;

            if(stream instanceof MediaStream){
                const tracks = stream.getTracks();
                tracks.forEach(track => { track.stop() });
            }
            if(videoRef.current){
                videoRef.current.srcObject = null;
            }
        }

        if(videoON){
            showVideo();
        }else{
            stopVideo();
        }

    })

    return (
        <>
            <div>
                <button onClick={() => handleOnOff()} > Click to See Video </button>
                <video ref={videoRef} />
            </div>
        </>
    )
}

export default Video;