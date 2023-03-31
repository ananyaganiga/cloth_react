import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import Productlisting from "./pages/About/Productlisting";
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productlisitng" element={<Productlisting />} />
        <Route path="/products" element={<ProductCard />} />
      </Routes>
    </div>
  );
}

export default App;
