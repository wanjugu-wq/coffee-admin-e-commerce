export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {/* All Button */}
      <button
        onClick={() => setSelectedCategory("all")}
        className={`px-5 py-2 rounded-full border transition font-medium ${
          selectedCategory === "all"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-700"
        }`}
      >
        All
      </button>

      {/* Category Buttons */}
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() =>
            setSelectedCategory(cat.slug.toLowerCase())
          }
          className={`px-5 py-2 rounded-full border transition font-medium ${
            selectedCategory === cat.slug
              ? "bg-gray-900 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
}