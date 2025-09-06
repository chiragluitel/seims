import React, { useState, useRef, useEffect } from "react";
import type { ProductCategory } from "../../types";

interface AutocompleteInputProps {
  value: string;
  options: ProductCategory[] ; 
  placeholder: string;
  onSelect: (value: string) => void;
  label: string;
  disabled?: boolean
}

const AutocompleteInput: React.FC<AutocompleteInputProps> = ({
  value,
  options,
  placeholder,
  onSelect,
  label,
  disabled=false
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputValue) {
      const filtered = options.filter((option) =>
        option.name.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(options);
    }
  }, [inputValue, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowDropdown(true);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    onSelect(option);
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col" ref={inputRef}>
      <label htmlFor={label} className="text-sm font-medium text-black mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          disabled={disabled}
          id={label}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setShowDropdown(true)}
          placeholder={placeholder}
          className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {showDropdown && (
          <ul className="absolute z-10 w-full mt-1 bg-gray-700 border border-gray-600 rounded-lg max-h-48 max-h-40 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option.name)}
                  className="p-3 text-white cursor-pointer hover:bg-gray-600"
                >
                  {option.name}
                </li>
              ))
            ) : (
              <li className="p-3 text-gray-400">No results found</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AutocompleteInput;