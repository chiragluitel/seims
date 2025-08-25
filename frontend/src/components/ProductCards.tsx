import React from 'react';
import type { Product } from '../types';
interface ProductCardsProps {
    product: Product
    onClick: (product: Product) => void;
}

const ProductCards: React.FC<ProductCardsProps> = ({ product, onClick }) => {
    return (
        <div
            className="w-48 rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 bg-white"
            onClick={ ()=>onClick(product) }
        >
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-24 object-cover"
            />
            <div className="p-3">
                <h2 className="text-gray-800 font-semibold text-md truncate">{product.name}</h2>
                {product.price !== undefined && (
                    <p className="text-sm text-gray-600 mt-1">${(product.price).toFixed(2)}</p>
                )}
            </div>
        </div>
    );
};

export default ProductCards;
