import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

export default function ProductDetails() {
  const { slug } = useParams();

  const { products } = useContext(ProductContext);

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-amber-400 mb-4">
            Product Not Found
          </h1>

          <p className="text-stone-300 mb-8">
            The coffee product you are looking for does not exist.
          </p>

          <Link
            to="/products"
            className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-bold transition"
          >
            Back To Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* IMAGE SECTION */}

        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-150 object-cover rounded-3xl shadow-2xl"
          />
        </div>

        {/* DETAILS SECTION */}

        <div>
          <p className="uppercase tracking-[0.3em] text-amber-400 mb-4">
            {product.category}
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-300">
            {product.name}
          </h1>

          <p className="text-stone-300 text-lg leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="flex items-center gap-10 mb-10">
            <div>
              <p className="text-stone-400 mb-2">Price</p>

              <h2 className="text-4xl font-bold">${product.price}</h2>
            </div>

            <div>
              <p className="text-stone-400 mb-2">Stock</p>

              <h2 className="text-4xl font-bold">{product.stock}</h2>
            </div>
          </div>

          {/* EXTRA INFO */}

          <div className="bg-[#2a221e] p-6 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              Product Information
            </h3>

            <div className="space-y-3 text-stone-300">
              <p>
                <span className="font-semibold text-amber-300">Category:</span>{" "}
                {product.category}
              </p>

              <p>
                <span className="font-semibold text-amber-300">
                  Availability:
                </span>{" "}
                {product.stock > 0 ? "In Stock" : "Out Of Stock"}
              </p>

              <p>
                <span className="font-semibold text-amber-300">
                  Product Slug:
                </span>{" "}
                {product.slug}
              </p>
            </div>
          </div>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-amber-500 hover:bg-amber-400 text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Back To Products
            </Link>

            <Link
              to="/add-product"
              className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-8 py-4 rounded-xl font-bold transition"
            >
              Add Another Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
