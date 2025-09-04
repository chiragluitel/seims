import Categories from "./Footer/Categories";
import ContactInfo from "./Footer/ContactInfo";
import QuickLinks from "./Footer/QuickLinks";
import StoreInfo from "./Footer/StoreInfo";
import BottomBar from "./Footer/BottomBar";
import Features from "./Footer/Features";
import { quickLinks, categories, features, legalLinks } from '../constants/footerData';


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StoreInfo />
                    <QuickLinks links={quickLinks} />
                    <Categories categories={categories} />
                    <ContactInfo />
                </div>
                <Features features={features} />
            </div>
            <BottomBar legalLinks={legalLinks} />
        </footer>
    )
}

export default Footer;