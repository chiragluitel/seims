import { useEffect } from "react";

const useFrameSender = (videoRef: React.RefObject<HTMLVideoElement | null>, isReady:boolean, socket:WebSocket | null, videoOn:boolean) => {
    useEffect(() => {
      const video = videoRef.current;
      let intervalId: ReturnType<typeof setInterval>;
  
      if (videoOn && isReady && socket && video) {
        // Creating a hidden canvas to grab the video frame as an image.
        const hiddenCanvas = document.createElement('canvas');
        const hiddenContext = hiddenCanvas.getContext('2d');
        
        const sendFrame = () => {
          // Set hidden canvas dimensions to match video.
          hiddenCanvas.width = video.videoWidth;
          hiddenCanvas.height = video.videoHeight;
          
          // Draw the video frame to the hidden canvas. Sort of like screenshot.
          hiddenContext?.drawImage(video, 0, 0, hiddenCanvas.width, hiddenCanvas.height);
          
          // Then, when ONE image is in canvas, convert the canvas content to a base64-encoded JPEG image using toDataURL Function.
          const base64Image = hiddenCanvas.toDataURL('image/jpeg', 0.8).split(',')[1];
          
          // Then, send the converted (base64 encoded) data to the server to process
          if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ image: base64Image }));
          }
        };
        
        // calls the sendFrame function 30 times per minute second to achieve 30 FPS video rate. (which means 30 screenshots per second)
        intervalId = setInterval(sendFrame, 1000);
      }
      
      // Cleanup function to clear the interval.
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }, [videoOn, isReady, socket, videoRef]);
  };
export default useFrameSender;