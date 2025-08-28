import { FiVideoOff } from "react-icons/fi"

const VideoOff = () =>{
    return (
        <>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 bg-opacity-75 text-gray-600">
                    <FiVideoOff className="h-12 w-12 mb-2" />
                    <p className="text-sm">Video Off</p>
                </div>
        </>
    )
}

export default VideoOff