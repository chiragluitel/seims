import type { Feature } from '../../types';
import FeatureItem from './FeatureItem';

interface FeaturesProps {
    features: Feature[];
}

const Features = ({ features }: FeaturesProps) => {
    return (
        <div className="border-t border-gray-700 mt-8 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                ))}
            </div>
        </div>
    )
}

export default Features;
