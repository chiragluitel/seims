import { useCallback, useEffect, useRef } from "react";
type BoundingBox = [number, [number, number, number, number], string]

const useCanvasRenderer = (videoRef: React.RefObject<HTMLVideoElement>, canvasRef: React.RefObject<HTMLCanvasElement>, data:BoundingBox[] | null) => {
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

        if (data){
            data.forEach(box => {
                const [id, [x1, y1, x2, y2], label] = box;
                const width = x2 - x1;
                const height = y2 - y1;

                context.beginPath();
                context.lineWidth = 2;
                context.strokeStyle = "Red";
                context.rect(x1, y1, width, height);
                context.stroke();

                context.font = "16px Arial";
                context.fillStyle = "white";
                const textMetrics = context.measureText(`Id: ${id} | ${label}`);
                context.fillRect(x1, y1 - 20, textMetrics.width + 10, 20);
                context.fillText(`ID: ${id} | ${label}`, x1 + 5, y1 - 5 );
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