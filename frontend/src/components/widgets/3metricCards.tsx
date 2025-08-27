import { FiSave } from "react-icons/fi"
import MetricCard from "./metricCard"

const threeMetrics = ( ) =>{
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <MetricCard icon={<FiSave className="w-6 h-6"/>} value={10} trend={100} title="user" />
            <MetricCard icon={<FiSave className="w-6 h-6"/>} value={10} trend={100} title="user" />
            <MetricCard icon={<FiSave className="w-6 h-6"/>} value={10} trend={100} title="user" />
        </div>
        </>
    )
}

export default threeMetrics