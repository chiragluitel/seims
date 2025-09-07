import { useState } from "react";
import NewProductForm from "../../components/WMS/newProduct/newProductForm";
import ProductCardPreview from "../../components/products/ProductCardPreview";
import { type Product } from "../../types";
import CartItemDetail from "../../components/Checkout/above_section/CartItemDetail";
import ProductCard from "../../components/Website/ProductCard";
import { sample_product } from "../../constants";
import useCreateOneProduct from "../../hooks/database/useCreateOneProduct";

const NewProductRegistration = () => {
  const [product, setProduct] = useState<Product>(sample_product);

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
  
  const {createOneProduct} = useCreateOneProduct ();
  const handleProductRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createOneProduct(product);
    // const formData = new FormData();
    // const productName = formData.get('product-name') 
    // const product_description = formData.get('product-description')
    // const product_longdescription = formData.get('product-longdescription')
    // const product_online_price = formData.get('product-price-online')
    // const product_instore_price = formData.get('product-price-instore')
    // const product_soh = formData.get('product-soh')
    // const product_barcode = formData.get('product-barcode')
    // const product_category = formData.get('Category')
    // const product_location = formData.get('Location')
    // const newproduct:Product = {
    //   id: 'CI-NEPSTRADING-LYNVIC-WAIWAI',
    //   sku: '10001', 
    //   name: productName ,
    //   description: 'Classical Nepali Noodles',
    //   long_description: "Nepal's Favorite Noodles for over 250 Years. Unbeatable Taste.",
    //   instore_price: 10.99, 
    //   online_price: 9.99,
    //   discounted_price: 9.99,
    //   soh: 35,
    //   ordered_quantity: 45,
    //   location: 'Rack 1',
    //   category: 'Food',
    //   image: '/logoexample.jpg',
    //   barcode: ''
    // } 
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
            <ProductCardPreview
              name={product.name.length > 0 ? product.name : "Product Name"}
              price={product.instore_price}
              image={product.image}
            />
            <CartItemDetail 
            id={product.id} 
            name={product.name.length > 0 ? product.name: "Product Name"} 
            price={product.instore_price} 
            quantity={1} 
            image={product.image} 
            />
            <h1 className="text-xl font-semibold mb-4"> Website </h1>
            <ProductCard product={product} onClick={()=> {}} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default NewProductRegistration;