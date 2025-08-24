interface ChargeProps{
    total: number
}
const Charge:React.FC<ChargeProps> = ({total} ) =>{

    const handlePayment = (price: number) => {
        console.log(price);
    }
    return (
        <button onClick={()=>{handlePayment(total)} } > Charge ${total} </button>
    )
}

export default Charge;