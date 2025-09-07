import React from 'react';
import type { Product } from '../../types';

interface ProductCardProps {
    product: Product
    onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    return (
        <div
            className="group w-full max-w-sm rounded-xl border border-gray-200 bg-white overflow-hidden cursor-pointer shadow-sm transition-all duration-300 hover:shadow-lg hover:border-emerald-300"
            onClick={() => onClick(product)}
        >
            <div className="relative w-full bg-gray-50">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
            </div>
            <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                    <h2 className="text-gray-900 font-semibold text-base leading-snug line-clamp-2">
                        {product.name.length>0? product.name : 'Product Name'}
                    </h2>
                    {product.online_price_cents !== undefined && (
                        <span className="shrink-0 rounded-md bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 border border-emerald-100">
                            ${(product.online_price_cents).toFixed(2)}
                        </span>
                    )}
                </div>
                <div className="mt-3 flex items-center text-sm text-gray-500">
                    <span className="transition-colors group-hover:text-emerald-600">View details</span>
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5 text-gray-400 group-hover:text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
