import { FaBox, FaEnvelope, FaHome, FaInfoCircle, FaLeaf, FaStore } from "react-icons/fa";
import NavbarOptions from "./NavbarOptions";

const NavbarForLoggedIn = () => {
    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
            <div className="bg-white/80 backdrop-blur-md border border-gray-200/50 rounded-2xl shadow-lg px-6 py-3">
                <nav className="flex items-center space-x-1">
                    <NavbarOptions label="Home" navigateTo="/" icon={<FaHome />} />
                    <NavbarOptions label="Products" navigateTo="/products" icon={<FaBox />} />
                    <NavbarOptions label="Fresh" navigateTo="/fresh" icon={<FaLeaf />} />
                    <NavbarOptions label="Store" navigateTo="/store" icon={<FaStore />} />
                    <NavbarOptions label="About" navigateTo="/about" icon={<FaInfoCircle />} />
                    <NavbarOptions label="Contact" navigateTo="/contact" icon={<FaEnvelope />} />
                </nav>
            </div>
        </div>
    )
}

export default NavbarForLoggedIn;