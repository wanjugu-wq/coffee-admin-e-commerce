<<<<<<< HEAD
import { useContext, useEffect, useState } from "react";
import { getCategories } from "../api/api";
import CategoryFilter from "../components/CategoryFilter";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";

export default function Products() {
  const { products, loading } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch categories
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  const safeProducts = products || [];

  // Search filter
  const searchFiltered = safeProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Category filter
  const filteredProducts =
    selectedCategory === "all"
      ? searchFiltered
      : searchFiltered.filter(
          (p) =>
            (p.category || "").toLowerCase() === selectedCategory.toLowerCase(),
        );

=======
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default function Products() {
  const { products, loading, updatePrice } = useContext(ProductContext);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()),
  );

>>>>>>> c3a3d64 (AI manufactured crap :/)
  if (loading) return <h1 className="p-6">Loading...</h1>;

  return (
    <div className="p-6">
<<<<<<< HEAD
      {/* Search */}
      <div className="mb-8 flex justify-center">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Categories */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Products */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
=======
      <div className="mb-8">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            updatePrice={updatePrice}
          />
>>>>>>> c3a3d64 (AI manufactured crap :/)
        ))}
      </div>
    </div>
  );
}
