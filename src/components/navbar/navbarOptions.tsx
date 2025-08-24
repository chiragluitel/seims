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
                                ? 'bg-blue-600 text-white'
                                : 'hover:bg-blue-500 hover:text-white'
                        }`
                    }
                >
                    <span className="text-xl">{icon}</span>
                    <span className='ml-4'> {label} </span>
                </NavLink>  
            </nav>
        </>
    )

}

export default NavbarOptions;