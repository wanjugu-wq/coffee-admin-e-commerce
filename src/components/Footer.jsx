import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#211c19] border-t border-stone-800 px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* BRAND SECTION */}
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-4">
            Tavern Coffee
          </h2>

          <p className="text-stone-400 leading-relaxed">
            A cozy tavern-inspired coffee house where every cup is crafted for
            warmth, comfort, and connection.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold text-amber-300 mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-stone-300">
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

        {/* CONTACT / INFO */}
        <div>
          <h3 className="text-xl font-bold text-amber-300 mb-4">Contact</h3>

          <div className="text-stone-400 space-y-2">
            <p>📍 Nairobi, Kenya</p>
            <p>📧 support@tavercoffee.com</p>
            <p>📞 +254 700 000 000</p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="text-center mt-10 pt-6 border-t border-stone-800 text-stone-500">
        © {new Date().getFullYear()} Tavern Coffee. All rights reserved.
      </div>
    </footer>
  );
}
