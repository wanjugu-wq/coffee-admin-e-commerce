import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#211c19] text-center border-t border-stone-800 grid grid-cols-1 grid-rows-2 gap-7 p-12 w-full h-82">
      <div className="flex flex-col justify-center items-center gap-1 pt-8">
        <h2 className="text-3xl font-bold text-amber-400 mb-3">
          Brew and Bean Co.
        </h2>
        <p className="text-stone-400">
          Crafted with warmth &bull; Brewed with passion
        </p>
      </div>
      <br />
      <div className="grid md:grid-cols-2">
        <div>
          <p className="text-stone-400">123 Kenyatta Avenue, Nairobi, Kenya</p>
          <br />
          <h3 className="mb-2 text-stone-400">Contact Us</h3>
          <p className="mb-2 text-stone-400">Email: brown&b@gmail.com</p>
          <p className="mb-2 text-stone-400">Phone: +254 712 345 678</p>
        </div>
        <div>
          <div className="flex flex-col gap-3 text-stone-400 pt-3">
            <Link to="/" className="hover:text-amber-400 transition">
              Home
            </Link>
            <Link to="/products" className="hover:text-amber-400 transition">
              Products
            </Link>
            <Link to="/add-product" className="hover:text-amber-400 transition">
              Add Product
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
