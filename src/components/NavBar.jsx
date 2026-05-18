<<<<<<< HEAD
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#211c19] shadow-md px-6 py-4 flex justify-between items-center w-full h-25">
      <h1 className="text-2xl font-bold italic text-stone-100 tracking-wider">
        Brown and Bean Co.
      </h1>

      <div className="flex gap-6 text-[#2b1d17]">
        <NavLink
          to="/"
          className="hover:underline hover:decoration-orange-500 transition-all duration-500 text-white font-bold italic "
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className="hover:underline hover:decoration-orange-500 transition-all duration-500  text-white font-bold italic"
        >
          Products
        </NavLink>
        <NavLink
          to="/add-product"
          className="hover:underline hover:decoration-orange-500 transition-all duration-500 text-white font-bold italic"
        >
          Add Product
        </NavLink>
      </div>
    </nav>
  );
}
=======
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold text-[#c97b36]">
    Tavern Coffee
  </h1>

  <div className="flex gap-6 text-[#2b1d17]">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/products">Products</NavLink>
    <NavLink to="/add-product">Add Product</NavLink>
  </div>
</nav>
  )
}
>>>>>>> c3a3d64 (AI manufactured crap :/)
