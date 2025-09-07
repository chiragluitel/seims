interface NumberInputBoxProps{
    label: string
    id: string
    labelhtmlfor: string
    value: number
}

const NumberInputBoxRO:React.FC<NumberInputBoxProps> = ({label, id, labelhtmlfor, value}) => {
    return (      
    <div className="flex flex-col">
    <label htmlFor={labelhtmlfor} className="text-sm font-medium text-black mb-1">{label}</label>
        <input
        disabled
        id={id}
        value={value}
        type='number'
        className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  </div>
    )
}

export default NumberInputBoxRO;