import { useState } from "react";
import NewProductForm from "../../components/WMS/newProduct/newProductForm";
import ProductCardPreview from "../../components/products/ProductCardPreview";
import { type Product } from "../../types";
import ProductCard from "../../components/Website/ProductCard";
import { sample_product } from "../../constants";
import useCreateOneProduct from "../../hooks/database/useCreateOneProduct";
import CartItemDetailPreview from "../../components/products/CartItemDetailPreview";

const NewProductRegistration = () => {
  const [product, setProduct] = useState<Product>(sample_product);
  const {createOneProduct} = useCreateOneProduct ();
  
  const onInputChangeValue = (field: keyof Product, value: string | number) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };
  const onNestedInputChangeValue = <T extends "location" | "category">(
    field: T,
    nestedField: keyof Product[T],
    value: string
  ) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [field]: {
        ...prevProduct[field],
        [nestedField]: value,
      },
    }));
  };

  const handleProductRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createOneProduct(product);
  }
  return (
    <div className="p-8 text-black bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">New Product Registration</h1>

      <div className="flex items-start space-x-8">
        
        <div className="flex-1 bg-white border border-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <NewProductForm product={product} onInputChange={onInputChangeValue} onSubmit = {handleProductRegistration} onNestedInputChange={onNestedInputChangeValue}/>
        </div>

        <div className="flex-1 bg-gray-600 border border-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="flex-1 justify-center items-center space-y-4">
            <ProductCardPreview name={product.name.length > 0 ? product.name : "Product Name"} price={product.instore_price_cents} image={product.image}/>
            <CartItemDetailPreview id={product.id}  name={product.name.length > 0 ? product.name: "Product Name"} price={product.instore_price_cents} quantity={1} image={product.image} />
            <h1 className="text-xl font-semibold mb-4"> Website </h1>
            <ProductCard product={product} onClick={()=> {}} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewProductRegistration;