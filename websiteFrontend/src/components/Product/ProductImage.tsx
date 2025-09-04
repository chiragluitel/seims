interface ProductImageProps {
    image: string
}
const ProductImage:React.FC<ProductImageProps> = ({image}) => {
    return (
        <>
            <img src={image}/> 
        </>
    )
}

export default ProductImage;