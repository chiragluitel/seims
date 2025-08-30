import { FiBarChart, FiBox, FiUser } from "react-icons/fi";
import MetricCard from "../../widgets/metricCard";
import OptionCard from "./optionCard";

const LowerWMS = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
            <div className="space-y-3">
                <MetricCard 
                    title="Total Products"  
                    value="517" 
                    trend={10} 
                    icon={<FiBox />} 
                />
                <MetricCard 
                    title="Total Users"  
                    value="20" 
                    trend={-15} 
                    icon={<FiUser />} 
                />                
            </div>

            <OptionCard
                label="Reports" 
                navigateTo="wmsreports" 
                icon={<FiBarChart />} 
            />

        </div>
    )
}

export default LowerWMS;