import type { LegalLink } from '../../types';

interface LegalLinkItemProps {
    link: LegalLink;
}

const LegalLinkItem = ({ link }: LegalLinkItemProps) => {
    return (
        <a 
            href={link.href} 
            className="text-gray-400 hover:text-white transition-colors duration-300"
        >
            {link.label}
        </a>
    )
}

export default LegalLinkItem;
