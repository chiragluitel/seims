import { FiHome, FiMenu, FiUser } from "react-icons/fi";
import NavbarOptions from "./navbarOptions"
import { BiSolidDashboard } from "react-icons/bi";
import { FcSettings } from "react-icons/fc";
import logo from "../../../src/assets/logoexample.jpg"
import NavbarOptionsIcons from "./navbarOptionsIcons";
import { use, useState } from "react";
import ProfilePicture from "../Profile/ProfilePicture";
import ProfileCard from "../Profile/ProfileCard";
import useGetUserDetails from "../../hooks/database/useGetUserDetails";

const NavbarLoggedIn = ( ) =>{
    const [isOpen, setIsOpen] = useState(true);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    }
    const {user} = useGetUserDetails('1332');
    return (
    <>
        <div className={`h-full bg-card shadow-lg transition-all duration-300 ${isOpen ? 'w-54' : 'w-24'} z-50`}>
            <div className="flex items-center justify-between p-4 border-w border-border">
                <button onClick={()=>handleToggle()} className="text-foreground cursor-pointer"> <FiMenu /> </button>
                <img
                    src={logo}
                    alt="Chirag Industries Logo"
                    className="w-10 h-10 rounded-full"
                />
            </div>
            {/* Task: Add all navbar options to constants and then develop a hook to retreive them and list them here */}
            {isOpen? (
            <div className="flex-col pt-8">
                <NavbarOptions navigateTo="/home" label="Home" icon={<FiHome />} />
                <NavbarOptions navigateTo="/widgets" label="Widgets" icon={<BiSolidDashboard />} />
                <NavbarOptions navigateTo="/configs" label="Configurations"  icon={<FcSettings />}/>
                <NavbarOptions navigateTo="/profile" label="Profile" icon={<FiUser />} />
            </div>
            ) : (
            <div className="flex-col pt-8">
                <NavbarOptionsIcons navigateTo="/home" icon={<FiHome />} />
                <NavbarOptionsIcons navigateTo="/widgets" icon={<BiSolidDashboard />} />
                <NavbarOptionsIcons navigateTo="/configs" icon={<FcSettings />}/>
                <NavbarOptionsIcons navigateTo="/profile" icon={<FiUser />} />
            </div>        
            )}

            <div className="mt-auto p-2">
                {user && (
                    <ProfileCard user={user}isExpanded={isOpen}/>
                )}
            </div>

        </div>
    </>
    )
}
export default NavbarLoggedIn;
