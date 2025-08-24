import Greeting from "../components/Greeting";
import QuickSelect from "../components/homepage/QuickSelect";

const HomePage = ()=>{
    return (
        <>
           <div className="text-center">
                <Greeting/>
                <QuickSelect />
           </div>
        </>
    )
}

export default HomePage;