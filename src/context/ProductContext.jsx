import { createContext, useEffect, useState } from "react";
<<<<<<< HEAD
import toast from "react-hot-toast";

export const ProductContext = createContext();

const BASE_URL = "http://localhost:3001";

=======

export const ProductContext = createContext();

>>>>>>> c3a3d64 (AI manufactured crap :/)
export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

<<<<<<< HEAD
  // Fetch Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${BASE_URL}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Delete Product
  const deleteProduct = async (id) => {
    try {
      await fetch(`${BASE_URL}/products/${id}`, {
        method: "DELETE",
      });

      setProducts((prev) =>
        prev.filter((p) => p.id !== id)
      );
      toast.success("Product deleted successfully");
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Failed to delete product");
    }
  };

  // Update Product
  const updateProduct = async (id, updatedData) => {
    try {
      const res = await fetch(`${BASE_URL}/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      const data = await res.json();

      setProducts((prev) =>
        prev.map((p) => (p.id === id ? data : p))
      );
      toast.success("Product updated successfully");
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update product");
    }
  };

=======
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
>>>>>>> c3a3d64 (AI manufactured crap :/)
  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
<<<<<<< HEAD
        deleteProduct,
        updateProduct,
=======
        addProduct,
        updatePrice,
>>>>>>> c3a3d64 (AI manufactured crap :/)
      }}
    >
      {children}
    </ProductContext.Provider>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> c3a3d64 (AI manufactured crap :/)
