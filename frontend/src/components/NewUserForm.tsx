import { FiUpload } from "react-icons/fi";
import type { Product, User } from "../types";

interface NewUserRegistrationFormProps {
  user: User
  onInputChange: (field: keyof User, value: string) => void;
}

const NewUserRegistrationForm: React.FC<NewUserRegistrationFormProps> = ({ user, onInputChange }) => {
  const handleProductRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Added");
  };

  return (
    <form onSubmit={handleProductRegistration} className="space-y-6">
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="product-name" className="text-sm font-medium text-black mb-1">
          Product Name
        </label>
        <input
          value={user.name}
          id="product-name"
          placeholder="e.g., Wai Wai Noodles"
          className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onInputChange("name", e.target.value)}
          disabled
        />
      </div>
      {/* Description */}
      <div className="flex flex-col">
        <label htmlFor="product-price" className="text-sm font-medium text-black mb-1">
          Description
        </label>
        <input
          value={user.name}
          id="product-description"
          placeholder="e.g., A state of the art product"
          step="any"
          className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled
        />
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label htmlFor="product-price" className="text-sm font-medium text-black mb-1">
          Price ($)
        </label>
        <input
          value={user.name}
          id="product-price"
          placeholder="e.g., 15.00"
          type="number"
          step="any"
          className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => onInputChange("name", e.target.value)}
          disabled
        />
      </div>

      {/* SKU */}
      <div className="flex flex-col">

        <label htmlFor="product-price" className="text-sm font-medium text-black mb-1">
          SKU
        </label>
        <input
          value={user.name}
          id="product-sku"
          placeholder="e.g., NTWA-009879000"
          step="any"
          className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled
        />
      </div>

      {/* Category */}
      <div className="flex flex-col">
        <label htmlFor="product-price" className="text-sm font-medium text-black mb-1">
          Category
        </label>
        <input
          value={user.name}
          id="product-category"
          placeholder="e.g., Food"
          step="any"
          className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled
        />
      </div>

      {/* Image */}
      <div className="flex flex-col">
        <label htmlFor="product-image" className="text-sm font-medium text-black mb-1">
          Image
        </label>
        <div className="relative">
          <input
            id="product-image"
            type="file"
            accept=".jpeg, .png"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => onInputChange("name", e.target.value)}
            disabled
          />
          <div className="flex items-center justify-center p-3 rounded-lg border-2 border-dashed border-gray-600 cursor-pointer hover:bg-gray-700 transition-colors">
            <FiUpload className="text-gray-400 w-6 h-6 mr-2" />
            <span className="text-gray-400">Click to upload image</span>
          </div>
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full bg-black text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        disabled
      >
        Update
      </button>
    </form>
  );
};

export default NewUserRegistrationForm;