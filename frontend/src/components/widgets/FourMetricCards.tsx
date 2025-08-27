import { FiDollarSign, FiSave, FiShoppingCart, FiUser } from "react-icons/fi"
import MetricCard from "./metricCard"

const FourMetrics = ( ) =>{
    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
            <MetricCard icon={<FiDollarSign className="w-6 h-6"/>} value={'$6050'} trend={32} title="Total Sales" />
            <MetricCard icon={<FiShoppingCart className="w-6 h-6"/>} value={'257'} trend={15} title="Total Orders" />
            <MetricCard icon={<FiSave className="w-6 h-6"/>} value={'45 Secs'} trend={-32} title="Checkout Time" />
            <MetricCard icon={<FiUser className="w-6 h-6"/>} value={'20'} trend={12} title="New Users" />
        </div>
        </>
    )
}

export default FourMetrics