import time
import cv2
import numpy as np
import json
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
import base64
from pythonDetectors.yoloDetector import YoloDetector
from pythonDetectors.deepsortTracker import Tracker

seimsPythonServer = FastAPI()
MODEL_PATH = "yolo_models/yolo11n.pt"
detector = YoloDetector(MODEL_PATH, 0.2)
tracker = Tracker()

@seimsPythonServer.get("/")
async def getBase():
    return HTMLResponse("<p> Welcome to SEIMS PS</p>")

@seimsPythonServer.websocket("/ws")
async def websocket_endpoint (websocket: WebSocket):
    await websocket.accept()
    print("WebSocket Connection Accepted by SEIMS Backend")

    try:
        while True:
            data_stream = await websocket.receive_text()
            print(f'Data Stream recieved: {data_stream}')

            data = json.loads(data_stream)
            print(f'Data Stream JSON loaded to data: {data}')
            base64_image = data.get('image')
            print (f'Base 64 Image captured: {base64_image}')

            if not base64_image:
                continue

            image_bytes = base64.b64decode(base64_image)
            print(f'Base 64 Image decoded: {image_bytes}')
            numpyarray = np.frombuffer(image_bytes, np.uint8)
            frame = cv2.imdecode(numpyarray, cv2.IMREAD_COLOR)

            if frame is None:
                print ('Failed to decode image')
                continue

            start_time = time.perf_counter()

            detections = YoloDetector.detect(frame)
            track = Tracker.track(detections)
            end_time = time.perf_counter()
            fps = 1/ (end_time - start_time)
            print(fps)
            tracking_results_to_return = []
            await websocket.send_text(json.dumps(tracking_results_to_return))
    except WebSocketDisconnect:
        print ('WebSocket Client Disconnected')
    except Exception as e:
        print (f'An Error Occured in WebSocket (Server side): {e} ')


