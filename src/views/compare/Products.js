import React, { useEffect, useState } from "react";
import ProductGrid from "../../components/ProductGrid";
const Compare = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((response) => response.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <div className="w-full">
      {}
      <div className="text-2xl font-bold">Compare Products</div>

      <div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Compare;
