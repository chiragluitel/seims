
import type { QuickLink } from '../../types';
import QuickLinkItem from './QuickLinkItem';

interface QuickLinksProps {
    links: QuickLink[];
    title?: string;
}

const QuickLinks = ({ links, title = "Quick Links" }: QuickLinksProps) => {
    return (
        <div className="space-y-4">
            <h4 className="text-lg font-semibold text-green-400">{title}</h4>
            <ul className="space-y-2">
                {links.map((link) => (
                    <QuickLinkItem key={link.href} link={link} />
                ))}
            </ul>
        </div>
    )
}

export default QuickLinks;
