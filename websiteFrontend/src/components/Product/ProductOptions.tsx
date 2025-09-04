interface ProductOptionsProps{
    inStockQuantity: number,
    clickNcollectQuantity: number
}

const ProductOptions:React.FC<ProductOptionsProps> = ({inStockQuantity, clickNcollectQuantity}) =>{ 
    return (
        <>
            <h1> Available Options: </h1>
                {inStockQuantity>0? (<p> In Stock: </p>):(<p> No Stock </p>)}
                {clickNcollectQuantity>0? (<p> Click N Collect: </p>):(<p> No Click N Collect Stock </p>)}
        </>
    )
}

export default ProductOptions;