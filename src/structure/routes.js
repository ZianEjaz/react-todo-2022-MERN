import { Routes, Route } from "react-router-dom";

// components
import Home from "../views/Home";
import SignIn from "../views/SignIn";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signIn" element={<SignIn />} />
    </Routes>
  );
};

export default Router;
