import { FiPause, FiPlay } from "react-icons/fi"

type VideoPausePlayProps = {
    isVideoOn: boolean
}
const VideoPausePlay:React.FC<VideoPausePlayProps> = ({isVideoOn}) =>{
    return(
        <>
            {isVideoOn ? (
                    <FiPause className="h-5 w-5" />
                ) : (
                    <FiPlay className="h-5 w-5" />
            )}
        </>
    )
}

export default VideoPausePlay;