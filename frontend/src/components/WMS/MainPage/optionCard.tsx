import React from 'react';
import { Link } from 'react-router-dom';

interface optionCardProps {
    label: string;
    navigateTo: string;
    icon: React.ReactElement;
}

const OptionCard: React.FC<optionCardProps> = ({ label, navigateTo, icon }) => {
    return (
        <Link to={navigateTo} className="
            flex flex-col items-center justify-center
            p-6 m-2
            border border-black
            bg-gray-100
            rounded-2xl
            shadow-lg hover:shadow-2xl
            transition-all duration-300 ease-in-out
            transform hover:-translate-y-1
            cursor-pointer
            text-black
            w-full h-full
            min-h-[150px]
            text-center
            font-inter
            font-2xl
        ">
            <div className=" text-6xl text-yellow-600 mb-4 ">
                {icon}
            </div>
            <div className="text-lg font-semibold">
                {label}
            </div>
        </Link>
    );
}

export default OptionCard;
