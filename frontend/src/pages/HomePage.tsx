import QuickSelect from "../components/homepage/QuickSelect"
import WidgetsComp from "../components/widgets/widgetsComp";

const HomePage = ()=>{
    return (
        <>  
        <div className="grid grid-rows-[50%_1fr] h-full w-full overflow-hidden gap-15  p-4">
            <QuickSelect />        
            <WidgetsComp />
        </div>
        
        </>
    )
}

export default HomePage;