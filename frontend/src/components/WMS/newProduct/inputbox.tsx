import type { Product } from "../../../types";

interface InputBoxProps{
    label: string
    id: string
    labelhtmlfor: string
    inputtype: string
    placeholder: string
    onInputChange: (field: keyof Product, value: string | number) => void;
}

const InputBox:React.FC<InputBoxProps> = ({label, onInputChange, id, labelhtmlfor, inputtype, placeholder}) => {
    return (      
    <div className="flex flex-col">
    <label htmlFor={labelhtmlfor} className="text-sm font-medium text-black mb-1">{label}</label>
        <input
        id={id}
        placeholder={placeholder}
        type={inputtype}
        className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onInputChange("name", e.target.value)}
        />
  </div>
    )
}

export default InputBox;