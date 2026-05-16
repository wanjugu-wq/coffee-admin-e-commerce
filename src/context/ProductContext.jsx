import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);
  function addProduct(product) {
    setProducts((prev) => [...prev, product]);
  }

  function updatePrice(id, newPrice) {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, price: newPrice } : product,
      ),
    );
  }
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        addProduct,
        updatePrice,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
