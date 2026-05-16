import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#f7f3ee] shadow-md px-6 py-4 flex justify-between items-center w-full h-25">
      <h1 className="text-2xl font-bold text-[#e7730c]">Tavern Coffee</h1>

      <div className="flex gap-6 text-[#2b1d17]">
        <NavLink
          to="/"
          className="hover:underline hover:decoration-orange-500 transition-all duration-300"
        >
          Home
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/add-product">Add Product</NavLink>
      </div>
    </nav>
  );
}
