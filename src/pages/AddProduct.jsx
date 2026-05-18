import { useState } from "react";
import slugify from "slugify";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
    stock: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newProduct = {
      ...formData,
      slug: slugify(formData.name, { lower: true }),
      price: Number(formData.price),
      stock: Number(formData.stock),
    };

    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    toast.success("Product added ☕");

    setFormData({
      name: "",
      category: "",
      price: "",
      image: "",
      description: "",
      stock: "",
    });
  }

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto bg-[#3a1b0b] p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-amber-500 mb-8">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* NAME */}
          <div>
            <label htmlFor="name" className="block mb-2 text-stone-300">
              Product Name
            </label>

            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full bg-stone-200 border border-stone-700 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label htmlFor="category" className="block mb-2 text-stone-300">
              Category
            </label>

            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full bg-stone-200 border border-stone-700 focus:outline-none focus:border-amber-500"
            >
              <option value="">Select Category</option>
              <option value="Coffee">Coffee</option>
              <option value="Pastry">Pastry</option>
              <option value="Beans">Beans</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>

          {/* PRICE + STOCK */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="price" className="block mb-2 text-stone-300">
                Price
              </label>

              <input
                id="price"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-full bg-stone-200 border border-stone-700 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="stock" className="block mb-2 text-stone-300">
                Stock
              </label>

              <input
                id="stock"
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-full bg-stone-200 border border-stone-700 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* IMAGE */}
          <div>
            <label htmlFor="image" className="block mb-2 text-stone-300">
              Image URL
            </label>

            <input
              id="image"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-full bg-stone-200 border border-stone-700 focus:outline-none focus:border-amber-500"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label htmlFor="description" className="block mb-2 text-stone-300">
              Description
            </label>

            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-lg bg-stone-200 border border-stone-700 h-36 resize-none focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-black py-4 rounded-full font-bold text-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
