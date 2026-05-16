import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#211c19] shadow-md px-6 py-4 flex justify-between items-center w-full h-25">
      <h1 className="text-2xl font-bold italic text-stone-100 tracking-wider">
        Tavern Coffee
      </h1>

      <div className="flex gap-6 text-[#2b1d17]">
        <NavLink
          to="/"
          className="hover:underline hover:decoration-orange-500 transition-all duration-1000 text-white font-bold italic "
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="hover:underline hover:decoration-orange-500 transition-all duration-1000  text-white font-bold italic"
        >
          Products
        </NavLink>
        <NavLink
          to="/add-product"
          className="hover:underline hover:decoration-orange-500 transition-all duration-1000 text-white font-bold italic"
        >
          Add Product
        </NavLink>
      </div>
    </nav>
  );
}
