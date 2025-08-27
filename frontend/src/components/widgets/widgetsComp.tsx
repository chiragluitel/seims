import FourMetrics from "./FourMetricCards";
import SmartCheckout from "./smartCheckout";

const WidgetsComp = ( ) => {
    return (
        <div className="h-full flex flex-col">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">My Dashboard</h1>
            <div className="flex flex-1 space-x-6">
                <div className="flex-1">
                    <FourMetrics  />
                </div>
                <div className="flex-1">
                    <SmartCheckout/>
                </div>
                
            </div>
        </div>
    )
}

export default WidgetsComp;