interface OpenPopUpButtonProps{
    onClick: ()=>void,
    icon: React.ReactElement
    label: string
}

const OpenPopUpButton:React.FC<OpenPopUpButtonProps> = ({ onClick, icon, label }) => (
    <button
      onClick={onClick}
      className="bg-gray-900 text-white rounded-xl shadow-md px-6 py-4 flex cursor-pointer items-center justify-center space-x-2 transition-transform transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white-500"
    >
      {icon}
      <span>{label}</span>
    </button>
);

export default OpenPopUpButton;