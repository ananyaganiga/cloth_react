import "./App.css";
import Home from "./pages/Home/Home";
import Productlisting from "./pages/ProductList/Productlisting";
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";
import Color from "./pages/color/color";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisitng" element={<Productlisting />} />
        <Route path="/color" element={<Color />} />
        <Route path="/products" element={<ProductCard />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;
