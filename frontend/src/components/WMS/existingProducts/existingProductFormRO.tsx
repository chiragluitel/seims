import type { Product } from "../../../types";
import useGetAllLocations from "../../../hooks/database/useGetAllLocations";
import useGetAllProductCategories from "../../../hooks/database/useGetAllProductCategories";
import AutocompleteInput from "../../userinput/AutoCompleteInput";
import ImageInputBox from "../newProduct/imageInputBox";
import StringInputBoxRO from "../../userinput/stringInputBoxRO";
import NumberInputBoxRO from "../../userinput/numberInputBoxRO";


interface ExistingProductFormROProps {
  product: Product;
}

const ExistingProductFormRO: React.FC<ExistingProductFormROProps> = ({ product }) => {
  const {locations} = useGetAllLocations();
  const {categories} = useGetAllProductCategories();

  return (
    <form className="space-y-6">
    <StringInputBoxRO label="Product Name*" id="product-name" value={product.name} labelhtmlfor="product-name"/>
    <StringInputBoxRO label="Description*" id="product-description" value={product.description} labelhtmlfor="product-description" />
    <StringInputBoxRO label="Long Description*" id="product-longdescription" value={product.long_description} labelhtmlfor="product-longdescription" />
    <NumberInputBoxRO label="In-Store Price ($)*" id="product-price-xinstore" value={product.instore_price_cents/100} labelhtmlfor="product-price-instore"  />
    <NumberInputBoxRO label="Online Price ($)*" id="product-price-online" value={product.online_price_cents/100} labelhtmlfor="product-price-online" />
    {categories && <AutocompleteInput label="Category" value={product.category.name} options={categories} placeholder="E.g. Food" onSelect={()=>{}} disabled /> }
    <NumberInputBoxRO label="Current Stock" id="product-soh" value={product.soh_cents/100} labelhtmlfor="product-soh" />
    {locations && <AutocompleteInput label="Location" value={product.location.name} options={locations} placeholder="E.g. Rack 1" onSelect={()=>{}} disabled/> }
    <StringInputBoxRO label="Barcode" id="product-barcode" value="e.g., NTWA-009879000" labelhtmlfor="product-barcode"/>
    <ImageInputBox label="Product Image" id="product-image" labelhtmlfor="product-image" onUpload={()=>{}} />
    <button type="submit" className="w-full bg-black text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors">Add Product</button>  
    </form>
    );
};

export default ExistingProductFormRO;