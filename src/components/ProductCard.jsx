import { Link } from "react-router-dom";

export default function ProductCard({ product, updatePrice }) {
  function handlePriceChange() {
    const newPrice = prompt("Enter new price");

    if (!newPrice) return;

    updatePrice(product.id, Number(newPrice));
  }

  return (
    <div className="bg-[#3a1b0b] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl font-bold text-amber-400">{product.name}</h2>

          <span className="bg-amber-500 text-black text-sm px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <p className="text-stone-300 mb-5 line-clamp-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-sm text-stone-400">Price</p>

            <p className="text-2xl font-bold text-stone-200">Ksh {product.price}</p>
          </div>

          <div>
            <p className="text-sm text-stone-400">Stock</p>

            <p className="text-lg font-semibold text-stone-200">{product.stock}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handlePriceChange}
            className="bg-amber-500 hover:bg-amber-400 text-black px-4 py-2 rounded-lg font-semibold transition"
          >
            Edit Price
          </button>
          <Link
            to={`/products/${product.slug}`}
            className="border border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-black px-4 py-2 rounded-lg font-semibold transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
