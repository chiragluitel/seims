import { useState } from "react";
import SearchBox from "../../search";
import useListAllProducts from "../../../hooks/database/useListAllProducts";
import type { Product } from "../../../types";
import ProductCards from "../../products/ProductCards";
import { useNavigate } from "react-router-dom";

const SearchExistingProducts = () => {
  const [filter, setFilter] = useState("");
  const { products } = useListAllProducts();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );
  const navigate = useNavigate();

  const onSearchInput = (e: string) => {
    setFilter(e);
  };

  const onProductSelect = (product: Product) => {
    navigate(`/updateproduct/${product.sku}`);
  };

  return (
    <div>
      <div className="mb-6">
        <SearchBox onInput={onSearchInput} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCards
              key={product.id}
              product={product}
              onClick={onProductSelect}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 p-8">
            <p>No products found. Please try a different search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchExistingProducts;