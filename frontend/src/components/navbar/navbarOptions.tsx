import { NavLink} from "react-router-dom"

interface NavbarOptionsProps {
    icon: React.ReactElement
    label: string,
    navigateTo: string
    isOpen?: boolean
}

const NavbarOptions = ({ icon, label, navigateTo}: NavbarOptionsProps) => {
    return (
        <>
            <nav> 
                <NavLink
                    to={navigateTo}
                    className={({ isActive }) =>
                        `flex items-center px-4 py-3 cursor-pointer transition-colors ${
                            isActive
                                ? 'bg-black text-white'
                                : 'hover:bg-gray-800 hover:text-white'
                        }`
                    }
                >
                    <span className="text-3xl cursor-pointer">{icon}</span>
                    <span className='ml-4 cursor-pointer'> {label} </span>
                </NavLink>  
            </nav>
        </>
    )

}

export default NavbarOptions;