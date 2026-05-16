import { useState } from "react";
import slugify from "slugify";

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

    alert("Product Added Successfully");

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
      <div className="max-w-3xl mx-auto bg-[#2a221e] p-8 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-amber-400 mb-8">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-stone-300">Product Name</label>

            <input
              type="text"
              name="name"
              placeholder="Caramel Latte"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-[#1b1715] border border-stone-700 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-stone-300">Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-[#1b1715] border border-stone-700 focus:outline-none focus:border-amber-500"
            >
              <option value="">Select Category</option>
              <option value="Coffee">Coffee</option>
              <option value="Pastry">Pastry</option>
              <option value="Beans">Beans</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-stone-300">Price</label>

              <input
                type="number"
                name="price"
                placeholder="6"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-[#1b1715] border border-stone-700 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block mb-2 text-stone-300">Stock</label>

              <input
                type="number"
                name="stock"
                placeholder="10"
                value={formData.stock}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-xl bg-[#1b1715] border border-stone-700 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-stone-300">Image URL</label>

            <input
              type="text"
              name="image"
              placeholder="https://..."
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-[#1b1715] border border-stone-700 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-stone-300">Description</label>

            <textarea
              name="description"
              placeholder="Write product description..."
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-[#1b1715] border border-stone-700 h-36 resize-none focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-400 text-black py-4 rounded-xl font-bold text-lg transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}