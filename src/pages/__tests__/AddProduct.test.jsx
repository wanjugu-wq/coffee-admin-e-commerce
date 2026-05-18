import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AddProduct from "../AddProduct";

describe("AddProduct Page", () => {
  test("renders add product form", () => {
    render(<AddProduct />);

    expect(screen.getByLabelText(/product name/i)).toBeInTheDocument();
  });

  test("allows typing into form fields", async () => {
    render(<AddProduct />);

    const nameInput = screen.getByLabelText(/product name/i);

    await userEvent.type(nameInput, "Latte");

    expect(nameInput.value).toBe("Latte");
  });

  test("renders submit button", () => {
    render(<AddProduct />);

    expect(
      screen.getByRole("button", {
        name: /add product/i,
      }),
    ).toBeInTheDocument();
  });
});
