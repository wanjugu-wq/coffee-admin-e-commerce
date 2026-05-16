import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="app-scroll">
    <div className="min-h-screen bg-[#f7f3ee] text-[#2b1d17]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
      </Routes>
    </div>
    </div>
  );
}
