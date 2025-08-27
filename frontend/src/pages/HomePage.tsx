import QuickSelect from "../components/homepage/QuickSelect"
import SmartCheckout from "../components/widgets/smartCheckout";

const HomePage = ()=>{
    return (
        <>  
        <div className="overflow-hidden">
            <QuickSelect />        
            <SmartCheckout />
        </div>
        
        </>
    )
}

export default HomePage;