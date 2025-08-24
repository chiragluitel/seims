interface ChargeProps {
    total: number;
}

const Charge: React.FC<ChargeProps> = ({ total }) => {
    const handlePayment = (price: number) => {
        console.log(`Charging customer: $${price.toFixed(2)}`); //To Implement
    };

    return (
        <button
            onClick={() => handlePayment(total)}
            className="w-full py-4 text-xl font-bold text-white bg-black rounded-lg shadow-lg cursor-pointer hover:bg-gray-900 transition-colors"
        >
            Charge ${total.toFixed(2)}
        </button>
    );
};

export default Charge;