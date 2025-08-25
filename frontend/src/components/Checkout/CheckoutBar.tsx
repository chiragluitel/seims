import UpperCheckoutBar from "./above_section/UpperCheckoutBar";
import LowerCheckoutBar from "./lower_section/LowerCheckoutBar";

const CheckoutBar = () => {
    return (
        <>
        <div className="grid grid-rows-[70%_1fr] h-full w-full overflow-hidden gap-4 bg-gray-100 p-4 border-l border-gray-300 shadow-md">
            <UpperCheckoutBar />
            <LowerCheckoutBar />
        </div>
        </>
        
    );
};

export default CheckoutBar;