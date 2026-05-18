import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { Trash2, Edit } from "lucide-react";
import { ProductContext } from "../context/ProductContext";

export default function ProductCard({ product }) {
  const { deleteProduct, updateProduct } = useContext(ProductContext);

  const [editOpen, setEditOpen] = useState(false);

  const [form, setForm] = useState({
    name: product.name,
    price: product.price,
    stock: product.stock,
    description: product.description,
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await updateProduct(product.id, form);
    setEditOpen(false);
  }

  return (
    <div className="relative bg-[#3a1b0b] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300">
      {/* Edit Modal */}
      {editOpen && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="bg-white rounded-xl p-6 w-full"
          >
            <h2 className="text-lg font-bold mb-4">Edit Product</h2>

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 border mb-2"
              placeholder="Name"
            />

            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full p-2 border mb-2"
              placeholder="Price"
            />

            <input
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="w-full p-2 border mb-2"
              placeholder="Stock"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-2 border mb-2"
              placeholder="Description"
            />

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setEditOpen(false)}
                className="px-3 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-3 py-1 bg-amber-500 text-black rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Delete Icon */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          deleteProduct(product.id);
        }}
        className="absolute bottom-3 right-3 bg-red-600 p-2 rounded-full text-white hover:bg-red-500 z-10"
      >
        <Trash2 size={18} />
      </button>

      {/* Edit Icon */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setEditOpen(true);
        }}
        className="absolute top-3 right-3 bg-amber-500 p-2 rounded-full text-black hover:bg-amber-400 z-10"
      >
        <Edit size={18} />
      </button>

      {/* Product Content */}
      <Link to={`/products/${product.slug}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl font-bold text-amber-400">{product.name}</h2>

          <span className="bg-amber-500 text-black text-sm px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <p className="text-stone-300 line-clamp-1">{product.description}</p>

        <p className="text-stone-200 mt-3 font-semibold">Ksh {product.price}</p>
      </div>
    </div>
  );
}
