import type { LegalLink } from '../../types';
import LegalLinkItem from './LegalLinkItem';

interface BottomBarProps {
    legalLinks: LegalLink[];
    copyrightText?: string;
}

const BottomBar = ({ 
    legalLinks, 
    copyrightText = "© 2025 SEIMS Grocery Store. All rights reserved." 
}: BottomBarProps) => {
    return (
        <div className="border-t border-gray-700 bg-gray-800">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        {copyrightText}
                    </p>
                    <div className="flex space-x-6 text-sm">
                        {legalLinks.map((link) => (
                            <LegalLinkItem key={link.label} link={link} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBar;
