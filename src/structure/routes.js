import { Routes, Route } from "react-router-dom";

// components
import Home from "../views/Home";
import SignIn from "../views/SignIn";
import Products from "../views/compare/Products";
import Compare from "../views/compare/Compare";
import DynamicGrid from "../views/dynamicGrid/DynamicGrid";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signIn" element={<SignIn />} />
      <Route path="Products" element={<Products />} />
      <Route path="compare" element={<Compare />} />
      <Route path="DynamicGrid" element={<DynamicGrid />} />
    </Routes>
  );
};

export default Router;
