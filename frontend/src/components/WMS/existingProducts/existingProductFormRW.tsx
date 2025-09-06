import { FiUpload } from "react-icons/fi";
import type { Product } from "../../../types";
import AutocompleteInput from "../../userinput/AutoCompleteInput";
import useGetAllLocations from "../../../hooks/database/useGetAllLocations";
import useGetAllProductCategories from "../../../hooks/database/useGetAllProductCategories";

interface ExistingProductFormRWProps {
  product: Product;
  onInputChange: (field: keyof Product, value: string | number) => void;
}

const ExistingProductFormRW: React.FC<ExistingProductFormRWProps> = ({ product, onInputChange }) => {
  const {locations} = useGetAllLocations();
  const {categories} = useGetAllProductCategories();

  const handleProductRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Product Added");
  };

  return (
  <form onSubmit={handleProductRegistration} className="space-y-6">
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="product-name" className="text-sm font-medium text-black mb-1">
            Product Name*
          </label>
          <input
            defaultValue={product.name}
            id="product-name"
            placeholder="e.g., Wai Wai Noodles"
            className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onInputChange("name", e.target.value)}
          />
        </div>
        {/* Description */}
        <div className="flex flex-col">
          <label htmlFor="product-description" className="text-sm font-medium text-black mb-1">
            Description*
          </label>
          <input
            defaultValue={product.description}
            id="product-description"
            placeholder="e.g., A state of the art product"
            step="any"
            className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Long Description */}
        <div className="flex flex-col">
          <label htmlFor="product-description" className="text-sm font-medium text-black mb-1">
            Summary
          </label>
          <textarea
            defaultValue={product.long_description}
            id="product-description"
            placeholder="e.g., A state-of-the-art product"
            rows={6} // You can adjust the number of visible rows here
            className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
        </div>

        {/* In Store Price */}
        <div className="flex flex-col">
          <label htmlFor="product-price-instore" className="text-sm font-medium text-black mb-1">
            In-Store Price ($)*
          </label>
          <input
            defaultValue={product.instore_price}
            id="product-price-instore"
            placeholder="e.g., 15.00"
            type="number"
            step="any"
            className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onInputChange("instore_price", Number(e.target.value))}
          />
        </div>
              
        {/* Online Price */}
        <div className="flex flex-col">
          <label htmlFor="product-price-online" className="text-sm font-medium text-black mb-1">
            Online Price ($)*
          </label>
          <input
            defaultValue={product.online_price}
            id="product-price-online"
            placeholder="e.g., 15.00"
            type="number"
            step="any"
            className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => onInputChange("online_price", Number(e.target.value))}
          />
        </div>
              
        {/* Category */}
        {categories && <AutocompleteInput label="Category" value="" options={categories} placeholder="E.g. Food" onSelect={(value)=>onInputChange("category", value)} /> }

        {/* Location */}
        {locations && <AutocompleteInput label="Location" value="" options={locations} placeholder="E.g. Rack 1" onSelect={(value)=>onInputChange("location", value) }/> }

        {/* Barcode */}
        <div className="flex flex-col">
          <label htmlFor="product-barcode" className="text-sm font-medium text-black mb-1">
            Barcode
          </label>
          <input
            defaultValue={product.barcode}
            id="product-barcode"
            placeholder="e.g., NTWA-009879000"
            step="any"
            className="bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              onChange={(e) => onInputChange("image", e.target.value)}
            />
            <div className="flex items-center justify-center p-3 rounded-lg border-2 border-dashed border-gray-600 cursor-pointer hover:bg-gray-700 transition-colors">
              <FiUpload className="text-gray-400 w-6 h-6 mr-2" />
              <span className="text-gray-400">Click to upload image</span>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full bg-black text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors"
        >
          Add Product
        </button>
      </form>
  );
};

export default ExistingProductFormRW;