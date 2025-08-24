interface CurrentPageIndicatorProps {
    totalPages: number,
    currentPage: number;
    onClick: (index: number) => void;
}

const CurrentPageIndicator:React.FC<CurrentPageIndicatorProps> = ({totalPages, currentPage, onClick}) => {
    return (
        <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
                <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentPage ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                    onClick={()=>onClick(index)}
                ></div>
            ))}
        </div>
    );
}

export default CurrentPageIndicator;