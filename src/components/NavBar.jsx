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