import type { Product } from "../../../types";

interface NumberInputBoxProps{
    label: string
    id: string
    labelhtmlfor: string
    placeholder: string
    fieldof: keyof Product
    onInputChange: (field: keyof Product, value: string | number) => void;
    defaultvalue?: number
}

const NumberInputBox:React.FC<NumberInputBoxProps> = ({label, onInputChange, id, labelhtmlfor, placeholder, fieldof, defaultvalue}) => {
    return (      
    <div className="flex flex-col">
    <label htmlFor={labelhtmlfor} className="text-sm font-medium text-black mb-1">{label}</label>
        <input
        defaultValue={defaultvalue}
        id={id}
        placeholder={placeholder}
        type='number'
        className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onInputChange(fieldof, Number(e.target.value))}
        />
  </div>
    )
}

export default NumberInputBox;