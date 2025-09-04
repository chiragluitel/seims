import { Link } from "react-router-dom"
import {FaArrowLeft} from 'react-icons/fa'
interface BackButtonProps{
    label: string
    linkTo: string
}

const BackButton:React.FC<BackButtonProps> = ({label, linkTo}) => {
    return (
        <>
            <div className="mb-6">
                <Link to={linkTo} className="inline-flex items-center text-sm text-gray-600 hover:text-emerald-700 transition-colors">
                    <FaArrowLeft className='w-4 h-4 mr-2'/>
                    {label}
                </Link>
            </div>
        </>
    )
}

export default BackButton;