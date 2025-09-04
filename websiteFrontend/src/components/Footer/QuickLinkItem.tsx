import type { QuickLink } from '../../types';

interface QuickLinkItemProps {
    link: QuickLink;
}

const QuickLinkItem = ({ link }: QuickLinkItemProps) => {
    return (
        <li>
            <a 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-300"
            >
                {link.label}
            </a>
        </li>
    )
}

export default QuickLinkItem;
