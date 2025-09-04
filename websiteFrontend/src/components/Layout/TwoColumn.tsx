import type { ReactNode } from "react";

interface TwoColumnProps {
    left: ReactNode;
    right: ReactNode;
}

const TwoColumn:React.FC<TwoColumnProps> = ({ left, right }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
                {left}
            </div>
            <div>
                {right}
            </div>
        </div>
    )
}

export default TwoColumn;


