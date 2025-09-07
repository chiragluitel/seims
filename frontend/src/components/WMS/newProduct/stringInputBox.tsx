import type { Product } from "../../../types";

interface StringInputBoxProps{
    label: string
    id: string
    labelhtmlfor: string
    placeholder: string
    fieldof: keyof Product
    onInputChange: (field: keyof Product, value: string | number) => void;
    defaultvalue?: string
}

const StringInputBox:React.FC<StringInputBoxProps> = ({label, onInputChange, id, labelhtmlfor, placeholder, fieldof, defaultvalue}) => {
    return (      
    <div className="flex flex-col">
    <label htmlFor={labelhtmlfor} className="text-sm font-medium text-black mb-1">{label}</label>
        <input
        defaultValue={defaultvalue}
        id={id}
        placeholder={placeholder}
        type='text'
        className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onInputChange(fieldof, e.target.value)}
        />
  </div>
    )
}

export default StringInputBox;