import React from 'react';
interface ProductCardsProps {
    image: string;
    name: string;
    price?: number;
    onClick?: () => void;
}

const ProductCards: React.FC<ProductCardsProps> = ({ image, name, price, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="w-48 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 bg-white"
        >
            <img
                src={image}
                alt={name}
                className="w-full h-24 object-cover"
            />
            <div className="p-3">
                <h2 className="text-gray-800 font-semibold text-md truncate">{name}</h2>
                {price !== undefined && (
                    <p className="text-sm text-gray-600 mt-1">${price.toFixed(2)}</p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;
