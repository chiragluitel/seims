interface ProductImageProps {
    image: string
}
const ProductImage:React.FC<ProductImageProps> = ({image}) => {
    console.log('image source: ', image)
    return (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gray-50">
                <img src={`/${image}`} className="w-full aspect-[3/3] object-cover"/>
            </div>
        </div>
    )
}

export default ProductImage;