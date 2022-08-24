import { BrowserRouter } from "react-router-dom";
import "animate.css";
import "./styles/style.css";
import Router from "./structure/routes";

// components
import Header from "./structure/Header";
import Footer from "./structure/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
