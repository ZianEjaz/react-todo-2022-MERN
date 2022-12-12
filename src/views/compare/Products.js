import React, { useEffect, useState } from "react";
import ProductGrid from "../../components/ProductGrid";
import { SwishSpinner } from "react-spinners-kit";
import { Animated } from "react-animated-css";

const Compare = () => {
  const [products, setProducts] = useState([]);
  const [loadingAnimation, setLoadingAnimation] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
        setLoadingAnimation(false);
      });
  }, []);

  return (
    <div className="w-full ">
      <Animated
        className={
          `flex bg-gray-900 justify-center h-screen items-center ${!loadingAnimation && 'hidden' }`
          
         
        }
        animationIn="fadeIn"
        animationOut="fadeOut"
        isVisible={loadingAnimation}
      >
        <SwishSpinner size={100} color="#686769" />
      </Animated>
      <div className="text-2xl font-bold">Compare Products</div>

      <div>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default Compare;
