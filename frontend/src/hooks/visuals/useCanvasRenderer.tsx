import { useCallback, useEffect, useRef } from "react";
import type { DetectionResults } from "../../types";

const useCanvasRenderer = (videoRef: React.RefObject<HTMLVideoElement | null>, canvasRef: React.RefObject<HTMLCanvasElement | null>, data:DetectionResults[] | null) => {
    const animationFrameId = useRef<number | null> (null);

    const draw = useCallback(()=>{
        
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if(!video || !canvas) return;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext('2d');
        if(!context){
            console.error("2D Context Not Available")
            return
        }
        
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        if (data){
            data.forEach(box => {
                const [id, [x1, y1, x2, y2], label] = box;
                const width = x2 - x1;
                const height = y2 - y1;

                context.beginPath();
                context.lineWidth = 2;
                context.strokeStyle = "#4F46E5";
                context.rect(x1, y1, width, height);
                context.stroke();

                context.font = "14px Inter, Arial";
                context.fillStyle = "#4F46E5";
                const text = `${label} (ID: ${id})`;
                const textMetrics = context.measureText(text);

                context.fillRect(x1, y1 - 20, textMetrics.width + 10, 20);
                
                context.fillStyle = "white";
                context.fillText(text, x1 + 5, y1 - 5 );
            })
        }
        animationFrameId.current = requestAnimationFrame(draw);

    }, [data, videoRef, canvasRef])

    useEffect(()=>{
        animationFrameId.current = requestAnimationFrame(draw);
        return()=>{
            if(animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
        }
    }, [draw])
}

export default useCanvasRenderer