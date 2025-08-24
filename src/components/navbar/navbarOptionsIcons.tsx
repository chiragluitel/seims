import { NavLink } from "react-router-dom"

interface NavbarOptionsProps {
    icon: React.ReactElement
    navigateTo: string
    isOpen?: boolean
}

const NavbarOptionsIcons = ({ icon, navigateTo}: NavbarOptionsProps) => {
    return (
        <>
            <nav> 
                <NavLink
                    to={navigateTo}
                    className={({ isActive }) =>
                        `flex items-center px-4 py-3 cursor-pointer transition-colors ${
                            isActive
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-blue-500 hover:text-white'
                        }`
                    }
                >
                    <span className="text-xl">{icon}</span>
                </NavLink>  
            </nav>
        </>
    )

}

export default NavbarOptionsIcons;