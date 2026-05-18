import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f3ee] text-[#2b1d17]">
      <Navbar />

      {/* flex-1 makes this section grow and push the footer down */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
