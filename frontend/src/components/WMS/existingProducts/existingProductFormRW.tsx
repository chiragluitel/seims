import type { Product } from "../../../types";
import AutocompleteInput from "../../userinput/AutoCompleteInput";
import useGetAllLocations from "../../../hooks/database/useGetAllLocations";
import useGetAllProductCategories from "../../../hooks/database/useGetAllProductCategories";
import StringInputBox from "../newProduct/stringInputBox";
import NumberInputBox from "../newProduct/numberInputBox";
import useS3UploadImage from "../../../hooks/s3Ops/useS3UploadImage";
import ImageInputBox from "../newProduct/imageInputBox";

interface ExistingProductFormRWProps {
  product: Product;
  onInputChange: (field: keyof Product, value: string | number) => void;
  onNestedInputChange: <T extends "location" | "category">(field: T, nestedField: keyof Product[T], value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  formRef: React.RefObject<HTMLFormElement | null>
}

const ExistingProductFormRW: React.FC<ExistingProductFormRWProps> = ({ formRef, product, onInputChange, onNestedInputChange, onSubmit, loading }) => {
  const {locations} = useGetAllLocations();
  const {categories} = useGetAllProductCategories();
  const {uploadFunction} = useS3UploadImage();
  
  const OnUpload = async (file: File | null ) => {
    if(!file){
      return
    }
    const s3ImageUrl = await uploadFunction(file);
    onInputChange('image', s3ImageUrl)
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
    <StringInputBox label="Product Name*" id="product-name" placeholder="E.g. Wai Wai Noodles" onInputChange={onInputChange} labelhtmlfor="product-name" fieldof="name" defaultvalue={product.name}/>
    <StringInputBox label="Description*" id="product-description" placeholder="e.g., A state of the art product" onInputChange={onInputChange} labelhtmlfor="product-description" fieldof="description" defaultvalue={product.description}/>
    <StringInputBox label="Long Description*" id="product-longdescription" placeholder="e.g., A state of the art product" onInputChange={onInputChange} labelhtmlfor="product-longdescription" fieldof="long_description" defaultvalue={product.long_description}/>
    <NumberInputBox label="In-Store Price ($)*" id="product-price-instore" placeholder="e.g., 15.00" onInputChange={onInputChange} labelhtmlfor="product-price-instore" fieldof="instore_price_cents" defaultvalue={product.instore_price_cents/100} />
    <NumberInputBox label="Online Price ($)*" id="product-price-online" placeholder="e.g., 15.00" onInputChange={onInputChange} labelhtmlfor="product-price-online" fieldof="online_price_cents" defaultvalue={product.online_price_cents/100}/>
    {categories && <AutocompleteInput label="Category" value={product.category.name} options={categories} placeholder="E.g. Food" onSelect={(value)=>onNestedInputChange("category", "id", value)} /> }
    <NumberInputBox label="Current Stock" id="product-soh" placeholder="e.g., 15" onInputChange={onInputChange} labelhtmlfor="product-soh" fieldof="soh_cents" defaultvalue={product.soh_cents/100}/>
    {locations && <AutocompleteInput label="Location" value={product.location.name} options={locations} placeholder="E.g. Rack 1" onSelect={(value)=>onNestedInputChange("location", "id", value) }/> }
    <StringInputBox label="Barcode" id="product-barcode" placeholder="e.g., NTWA-009879000" onInputChange={onInputChange} labelhtmlfor="product-barcode" fieldof="barcode" defaultvalue={product.name}/>
    <ImageInputBox label="Product Image" id="product-image" labelhtmlfor="product-image" onUpload={OnUpload} />
    {loading? (
      <button type="submit" className="w-full bg-black text-white font-bold p-3 rounded-lg cursor-not-allowed hover:bg-gray-900 transition-colors">Submitting ...</button>
    ):(
      <button type="submit" className="w-full bg-black text-white font-bold p-3 rounded-lg cursor-pointer hover:bg-gray-900 transition-colors">Add Product</button>  
    )}
    </form>
  );
};

export default ExistingProductFormRW;