import { useState } from "react";
import NewProductForm from "../../components/WMS/newProduct/newProductForm";
import ProductCardPreview from "../../components/products/ProductCardPreview";
import { type Product } from "../../types";
import CartItemDetail from "../../components/Checkout/above_section/CartItemDetail";

const NewProductRegistration = () => {
  const [product, setProduct] = useState<Product>({
    id: "Company.ProductName",
    name: "Product Name",
    price: 100,
    image: "/logoexample.jpg",
  });

  const onInputChangeValue = (field: keyof Product, value: string | number) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [field]: value,
    }));
  };

  return (
    <div className="p-8 text-black bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">New Product Registration</h1>

      <div className="flex items-start space-x-8">
        
        <div className="flex-1 bg-white border border-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Product Details</h2>
          <NewProductForm product={product} onInputChange={onInputChangeValue} />
        </div>

        <div className="flex-1 bg-gray-600 border border-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="flex-1 justify-center items-center space-y-4">
            <ProductCardPreview
              name={product.name.length > 0 ? product.name : "Product Name"}
              price={product.price}
              image={product.image}
            />
            <CartItemDetail 
            id={product.id} 
            name={product.name} 
            price={product.price} 
            quantity={1} 
            image={product.image} 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewProductRegistration;