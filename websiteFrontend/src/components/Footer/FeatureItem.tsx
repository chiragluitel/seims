import { FaLeaf, FaTruck, FaHeart } from 'react-icons/fa';
import type { Feature } from '../../types';


interface FeatureItemProps {
    feature: Feature;
}

const FeatureItem = ({ feature }: FeatureItemProps) => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'FaLeaf':
                return <FaLeaf className="text-green-600 text-xl" />;
            case 'FaTruck':
                return <FaTruck className="text-green-600 text-xl" />;
            case 'FaHeart':
                return <FaHeart className="text-green-600 text-xl" />;
            default:
                return <FaLeaf className="text-green-600 text-xl" />;
        }
    };

    return (
        <div className="flex items-center gap-3 text-center md:text-left">
            <div className="bg-green-100 p-3 rounded-full">
                {getIcon(feature.icon)}
            </div>
            <div>
                <h5 className="font-semibold text-white">{feature.title}</h5>
                <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
        </div>
    )
}

export default FeatureItem;
