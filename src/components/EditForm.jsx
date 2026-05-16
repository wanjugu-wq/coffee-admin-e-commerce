export default function EditForm({ product }) {
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    price: product.price,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form className="bg-stone-100 p-4 rounded-xl space-y-4">
      {/* NAME */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-2"
      />

      {/* CATEGORY COMBO BOX */}
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-2"
      >
        <option>Hot Coffee</option>
        <option>Iced Coffee</option>
        <option>Pastries</option>
      </select>

      {/* PRICE */}
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        className="w-full border rounded-lg px-4 py-2"
      />

      <button className="bg-amber-500 px-4 py-2 rounded-lg">Save</button>
    </form>
  );
}
