import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";

import ProductCard from "../ProductCard";
import { ProductContext } from "../../context/ProductContext";

const mockProduct = {
  id: 1,
  name: "Cappuccino",
  slug: "cappuccino",
  image: "https://example.com/image.jpg",
  category: "Hot Coffee",
  description: "Rich creamy coffee",
  price: 300,
  stock: 12,
};

describe("ProductCard Component", () => {
  test("renders product information", () => {
    render(
      <BrowserRouter>
        <ProductContext.Provider
          value={{
            deleteProduct: vi.fn(),
            updateProduct: vi.fn(),
          }}
        >
          <ProductCard product={mockProduct} />
        </ProductContext.Provider>
      </BrowserRouter>,
    );

    expect(screen.getByText(/cappuccino/i)).toBeInTheDocument();

    expect(screen.getByText(/rich creamy coffee/i)).toBeInTheDocument();

    expect(screen.getByText(/ksh 300/i)).toBeInTheDocument();
  });

  test("opens edit modal when edit button is clicked", async () => {
    render(
      <BrowserRouter>
        <ProductContext.Provider
          value={{
            deleteProduct: vi.fn(),
            updateProduct: vi.fn(),
          }}
        >
          <ProductCard product={mockProduct} />
        </ProductContext.Provider>
      </BrowserRouter>,
    );

    const buttons = screen.getAllByRole("button");

    const editButton = buttons[1];

    await userEvent.click(editButton);

    expect(screen.getByText(/edit product/i)).toBeInTheDocument();
  });

  test("calls deleteProduct when delete button is clicked", async () => {
    const deleteProduct = vi.fn();

    render(
      <BrowserRouter>
        <ProductContext.Provider
          value={{
            deleteProduct,
            updateProduct: vi.fn(),
          }}
        >
          <ProductCard product={mockProduct} />
        </ProductContext.Provider>
      </BrowserRouter>,
    );

    const buttons = screen.getAllByRole("button");

    const deleteButton = buttons[0];

    await userEvent.click(deleteButton);

    expect(deleteProduct).toHaveBeenCalledWith(1);
  });
});
