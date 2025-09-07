import { FiUpload } from "react-icons/fi";
import type { Product } from "../../../types";

interface ImageInputBoxProps{
    label: string
    id: string
    labelhtmlfor: string
    onUpload: (e: File | null) => void
}

const ImageInputBox:React.FC<ImageInputBoxProps> = ({label, id, labelhtmlfor, onUpload}) => {
    return (      
    <div className="flex flex-col">
        <label htmlFor={labelhtmlfor} className="text-sm font-medium text-black mb-1">
          {label}
        </label>
        <div className="relative">
          <input
            id={id}
            type="file"
            accept=".jpg, .png"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={
              (e) => {onUpload(e.target.files? e.target.files[0]:null) }
            }
          />
          <div className="flex items-center justify-center p-3 rounded-lg border-2 border-dashed border-gray-600 cursor-pointer hover:bg-gray-700 transition-colors">
            <FiUpload className="text-gray-400 w-6 h-6 mr-2" />
            <span className="text-gray-400">Click to upload image</span>
          </div>
        </div>
    </div>
      
    )
}

export default ImageInputBox;