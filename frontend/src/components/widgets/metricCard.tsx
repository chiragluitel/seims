interface MetricCardProps {
    icon: React.ReactElement,
    title: string,
    value: number,
    trend: number
}

const MetricCard:React.FC<MetricCardProps> = ({ icon, title, value, trend }) => {
    return (
      <div className="bg-card p-6 rounded-lg shadow-sm border border-border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="flex items-center justify-between">
          <div className="p-3 rounded-full bg-primary/10 text-primary">{icon}</div>
          <span className={`text-sm ${trend > 0 ? "text-chart-2" : "text-destructive"}`}>
            {trend > 0 ? "+" : ""}{trend}%
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-bold text-foreground">{value}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    );
  };

  export default MetricCard
