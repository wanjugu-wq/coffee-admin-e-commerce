import { Link } from "react-router-dom";
<<<<<<< HEAD
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-amber-300 mb-4">
=======

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}

      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Coffee Shop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-amber-300 mb-4">
>>>>>>> c3a3d64 (AI manufactured crap :/)
            Tavern Inspired Coffee House
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-amber-400 leading-tight mb-6">
            Brewed For Comfort & Connection
          </h1>

<<<<<<< HEAD
          <p className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto mb-8">
=======
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-8">
>>>>>>> c3a3d64 (AI manufactured crap :/)
            Experience handcrafted coffee, cozy tavern aesthetics, and a warm
            atmosphere built for every coffee lover.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Explore Products
            </Link>
<<<<<<< HEAD
=======

            <Link
              to="/add-product"
              className="border border-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Add Product
            </Link>
>>>>>>> c3a3d64 (AI manufactured crap :/)
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Features Section */}
      <section className="px-6 py-10 bg-[#211c19]">
=======
      {/* FEATURES SECTION */}

      <section className="px-6 py-20 bg-[#211c19]">
>>>>>>> c3a3d64 (AI manufactured crap :/)
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 uppercase tracking-[0.3em] mb-3">
              Why Choose Us
            </p>

<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-white">
              Crafted With Passion
            </h2>
=======
            <h2 className="text-4xl font-bold">Crafted With Passion</h2>
>>>>>>> c3a3d64 (AI manufactured crap :/)
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a221e] p-8 rounded-2xl hover:-translate-y-2 transition">
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-amber-400 mb-4 italic">
                Premium Coffee
              </h3>
              <p className="text-stone-300 italic">
=======
              <div className="text-5xl mb-5">☕</div>

              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Premium Coffee
              </h3>

              <p className="text-stone-300">
>>>>>>> c3a3d64 (AI manufactured crap :/)
                Carefully selected beans roasted to perfection for rich,
                unforgettable flavor.
              </p>
            </div>

            <div className="bg-[#2a221e] p-8 rounded-2xl hover:-translate-y-2 transition">
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-amber-400 mb-4 italic">
                Fresh Pastries
              </h3>
              <p className="text-stone-300 italic">
=======
              <div className="text-5xl mb-5">🥐</div>

              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Fresh Pastries
              </h3>

              <p className="text-stone-300">
>>>>>>> c3a3d64 (AI manufactured crap :/)
                Daily baked pastries made to perfectly complement your coffee.
              </p>
            </div>

            <div className="bg-[#2a221e] p-8 rounded-2xl hover:-translate-y-2 transition">
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-amber-400 mb-4 italic">
                Cozy Atmosphere
              </h3>
              <p className="text-stone-300 italic">
=======
              <div className="text-5xl mb-5">🪵</div>

              <h3 className="text-2xl font-bold text-amber-400 mb-4">
                Cozy Atmosphere
              </h3>

              <p className="text-stone-300">
>>>>>>> c3a3d64 (AI manufactured crap :/)
                Warm tavern interiors designed for conversations, creativity,
                and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* About Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
            alt="Coffee"
            className="rounded-xl shadow-2xl"
          />
=======
      {/* ABOUT SECTION */}

      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="Coffee"
              className="rounded-2xl shadow-2xl"
            />
          </div>
>>>>>>> c3a3d64 (AI manufactured crap :/)

          <div>
            <p className="uppercase tracking-[0.3em] text-amber-400 mb-3">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inspired By Traditional Taverns
            </h2>

<<<<<<< HEAD
            <p className="text-gray-800 text-lg leading-relaxed mb-6 font-thin">
=======
            <p className="text-stone-300 text-lg leading-relaxed mb-6">
>>>>>>> c3a3d64 (AI manufactured crap :/)
              Our coffee house blends rustic tavern charm with modern café
              culture. Every cup is crafted to create warmth, connection, and
              unforgettable experiences.
            </p>

            <Link
              to="/products"
<<<<<<< HEAD
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-bold transition"
=======
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-bold transition"
>>>>>>> c3a3d64 (AI manufactured crap :/)
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

      {/* FOOTER */}

      <footer className="bg-[#211c19] py-10 text-center border-t border-stone-800">
        <h2 className="text-3xl font-bold text-amber-400 mb-3">
          Tavern Coffee
        </h2>

        <p className="text-stone-400">
          Crafted with warmth • Brewed with passion
        </p>
      </footer>
>>>>>>> c3a3d64 (AI manufactured crap :/)
    </div>
  );
}
