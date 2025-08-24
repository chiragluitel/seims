const ApplyPromotion = ( ) =>{

    const handleApplyPromotion = (discountId: string) =>{
        console.log(discountId)
    }
    return (
        <>
            <div> 
                <input placeholder="Enter a valid promotion code..." />
                <button onClick={() => handleApplyPromotion("discountId") }> Apply </button>
            </div>
        </>
    )
}

export default ApplyPromotion;