import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import ProductDetails from "../ProductDetails";
import { ProductContext } from "../../context/ProductContext";

const mockProducts = [
  {
    id: 1,
    name: "Latte",
    slug: "latte",
    image: "https://example.com/latte.jpg",
    category: "Hot Coffee",
    description: "Smooth coffee",
    price: 400,
    stock: 10,
  },
];

describe("ProductDetails Page", () => {
  test("renders product details", () => {
    render(
      <ProductContext.Provider
        value={{
          products: mockProducts,
        }}
      >
        <MemoryRouter initialEntries={["/products/latte"]}>
          <Routes>
            <Route path="/products/:slug" element={<ProductDetails />} />
          </Routes>
        </MemoryRouter>
      </ProductContext.Provider>,
    );

    expect(screen.getByText(/latte/i)).toBeInTheDocument();

    expect(screen.getByText(/smooth coffee/i)).toBeInTheDocument();

    expect(screen.getByText(/ksh 400/i)).toBeInTheDocument();
  });

  test("shows not found message for invalid slug", () => {
    render(
      <ProductContext.Provider
        value={{
          products: mockProducts,
        }}
      >
        <MemoryRouter initialEntries={["/products/wrong-slug"]}>
          <Routes>
            <Route path="/products/:slug" element={<ProductDetails />} />
          </Routes>
        </MemoryRouter>
      </ProductContext.Provider>,
    );

    expect(screen.getByText(/product not found/i)).toBeInTheDocument();
  });
});
