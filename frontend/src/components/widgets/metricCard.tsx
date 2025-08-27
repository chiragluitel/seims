import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

interface MetricCardProps {
    icon: React.ReactElement,
    title: string,
    value: string,
    trend: number
}

const MetricCard:React.FC<MetricCardProps> = ({ icon, title, value, trend }) => {
    const trendColorClass = trend >= 0 ? "text-green-500" : "text-red-500";
    const trendIcon = trend >= 0 ? <FiArrowUpRight className="w-4 h-4" /> : <FiArrowDown className="w-4 h-4" />;
    const iconBgClass = trend >= 0 ? "bg-green-100 text-green-500" : "bg-red-100 text-red-500";

    return (
      <div className="flex flex-col p-6 rounded-xl shadow-lg border border-gray-200 bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-xl ${iconBgClass}`}>
            {icon}
          </div>
          <div className="flex items-center space-x-1">
            <span className={`text-sm font-semibold ${trendColorClass}`}>
                {trend > 0 ? "+" : ""}{trend}%
            </span>
            <span className={trendColorClass}>
                {trendIcon}
            </span>
          </div>
        </div>
        <div className="mt-4">
            <p className="text-xl font-medium text-gray-800">{title}</p>
            <h3 className="mt-2 text-4xl font-extrabold text-gray-900">{value}</h3>
        </div>
      </div>
    );
  };

  export default MetricCard;