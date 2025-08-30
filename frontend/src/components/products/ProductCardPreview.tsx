import React from 'react';
interface ProductCardPreviewProps {
    name: string,
    price: number,
    image: string
}

const ProductCardPreview: React.FC<ProductCardPreviewProps> = ({ name, price, image }) => {
    return (
        <div
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
                    <p className="text-sm text-gray-600 mt-1">${(price).toFixed(2)}</p>
                )}
            </div>
        </div>
    );
};

export default ProductCardPreview;
