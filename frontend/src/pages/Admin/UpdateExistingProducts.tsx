import SearchExistingProducts from "../../components/WMS/existingProducts/searchExistingProducts";

const UpdateExistingProducts = () => {
  return (
    <div className="p-8 text-black bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Update Product Details</h1>
      <p className="text-black text-lg mb-6">Please Select an Item to Edit</p>
      <SearchExistingProducts />
    </div>
  );
};

export default UpdateExistingProducts;