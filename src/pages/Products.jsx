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

  if (loading) return <h1 className="p-6">Loading...</h1>;

  return (
    <div className="p-6">
      <div className="mb-8 flex justify-center align-middle">
        <SearchBar search={search} setSearch={setSearch}/>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            updatePrice={updatePrice}
          />
        ))}
      </div>
    </div>
  );
}
