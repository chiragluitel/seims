import type { User } from "../../types";
import ProfilePicture from "./ProfilePicture";

interface ProfileCardProps {
    user: User
    isExpanded: boolean;
}

const ProfileCard:React.FC<ProfileCardProps> = ({user, isExpanded}) => {
    return (
        <>
        <div className={`relative flex items-center p-4 m-2 bg-gray-800 rounded-xl transition-all duration-300 transform cursor-pointer overflow-hidden ${
            isExpanded ? "w-48" : "w-16"
            } hover:scale-105`}
            >
            <div
                className={`relative ${
                isExpanded ? "w-12 h-12" : "w-10 h-10"
                } rounded-full transition-all duration-300 `}
            >
                <ProfilePicture image={user.hashed_password} name={user.name} />
            </div>

            <div
                className={`ml-4 overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "opacity-100 max-w-xs" : "opacity-0 max-w-0"
                }`}
            >
                <h2 className="text-sm font-bold text-white whitespace-nowrap">
                {user.name}
                </h2>
                <p className="text-xs text-gray-400 whitespace-nowrap">{user.job_title}</p>
            </div>

            <div
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 transition-opacity duration-300 ${
                isExpanded ? "opacity-100" : "opacity-0"
                }`}
            >
            </div>
        </div>
        </>
    )
}

export default ProfileCard;