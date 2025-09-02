import React from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBoxProps {
  onInput: (event: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onInput }) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <FiSearch className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search for products..."
        className="block w-full rounded-full py-3 pl-10 pr-4 bg-gray-800 text-white placeholder-gray-400 border border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300"
        onChange={(e) => onInput(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;