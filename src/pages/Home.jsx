import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}

      <section className="relative h-[90vh] flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0"></div>

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-amber-300 mb-4">
            Tavern Inspired Coffee House
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-amber-400 leading-tight mb-6">
            Brewed For Comfort & Connection
          </h1>

          <p className="text-lg md:text-xl text-stone-700 max-w-2xl mx-auto mb-8">
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

            <Link
              to="/add-product"
              className="border border-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Add Product
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}

      <section className="px-6 py-10 bg-[#211c19]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-amber-400 uppercase tracking-[0.3em] mb-3">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-bold text-white">
              Crafted With Passion
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#2a221e] p-8 rounded-2xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-5"></div>

              <h3 className="text-2xl font-bold text-amber-400 mb-4 italic">
                Premium Coffee
              </h3>

              <p className="text-stone-300 italic">
                Carefully selected beans roasted to perfection for rich,
                unforgettable flavor.
              </p>
            </div>

            <div className="bg-[#2a221e] p-8 rounded-2xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-5"></div>

              <h3 className="text-2xl font-bold text-amber-400 mb-4 italic">
                Fresh Pastries
              </h3>

              <p className="text-stone-300 italic">
                Daily baked pastries made to perfectly complement your coffee.
              </p>
            </div>

            <div className="bg-[#2a221e] p-8 rounded-2xl hover:-translate-y-2 transition">
              <div className="text-5xl mb-5"></div>

              <h3 className="text-2xl font-bold text-amber-400 mb-4 italic">
                Cozy Atmosphere
              </h3>

              <p className="text-stone-300 italic">
                Warm tavern interiors designed for conversations, creativity,
                and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

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

          <div>
            <p className="uppercase tracking-[0.3em] text-amber-400 mb-3">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Inspired By Traditional Taverns
            </h2>

            <p className="text-gray-800 text-lg leading-relaxed mb-6 font-thin">
              Our coffee house blends rustic tavern charm with modern café
              culture. Every cup is crafted to create warmth, connection, and
              unforgettable experiences.
            </p>

            <Link
              to="/products"
              className="inline-block bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-full font-bold transition"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#211c19] py-10 text-center border-t border-stone-800 h-70 grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-amber-400 mb-3">
            Tavern Coffee
          </h2>
          <p className="text-stone-400">
            Crafted with warmth • Brewed with passion
          </p>
        </div>
        <div>
          <p className="text-stone-400">Contacts</p>
        </div>
      </footer>
    </div>
  );
}
