import React, { useContext, useState } from "react";

import { CompareContext } from "../contexts/compare.context";

const ProductGrid = ({ products }) => {
  const [compareList, setCompareList] = useState([]);
  const compareContextData = useContext(CompareContext);

  const triggerCompareClick = (product) => {
    setCompareList([...compareList, product]);
    compareContextData.setCompareList(compareList);
  };
  return (
    <div className=" flex flex-wrap">
      {products.map((product, index) => {
        return (
          <div
            className=" w-full md:w-1/2 lg:w-1/4 flex justify-center p-8 "
            key={index}
          >
            <div className="border bg-white rounded-xl mb-8 w-full ">
              <div className=" h-fit group">
                <div className="relative overflow-hidden ">
                  <img
                    className="h-96 w-full object-cover rounded-lg "
                    src={product.images[0]}
                    alt=""
                  />

                  <div className="rounded-xl absolute h-full w-full bg-black/60 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button
                      className="bg-white text-black py-2 px-5 text-lg font-semibold rounded"
                      onClick={() => triggerCompareClick(product)}
                    >
                      {compareContextData.compareList.some((val) => val.id === product.id)
                        ? "Remove Compare"
                        : "Compare"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full text-xl font-bold p-4 text-center">
                {product.title}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
