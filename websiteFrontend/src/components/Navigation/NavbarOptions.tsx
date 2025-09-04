import { NavLink } from "react-router-dom";

interface NavbarOptionsProps {
    icon?: React.ReactElement;
    label: string;
    navigateTo: string;
}

const NavbarOptions: React.FC<NavbarOptionsProps> = ({ label, navigateTo, icon }) => {
    return (
        <NavLink
            to={navigateTo}
            className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                    isActive
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-md shadow-blue-500/25'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/80'
                }`
            }
        >
            {icon}
            <span>{label}</span>
        </NavLink>
    )
}

export default NavbarOptions;