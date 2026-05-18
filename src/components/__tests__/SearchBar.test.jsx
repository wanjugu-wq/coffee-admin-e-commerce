import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import SearchBar from "../SearchBar";

describe("SearchBar Component", () => {
  test("renders search input", () => {
    render(<SearchBar search="" setSearch={vi.fn()} />);

    expect(
      screen.getByPlaceholderText(/search from menu/i),
    ).toBeInTheDocument();
  });

  test("calls setSearch when typing", async () => {
    const setSearch = vi.fn();

    render(<SearchBar search="" setSearch={setSearch} />);

    const input = screen.getByPlaceholderText(/search from menu/i);

    await userEvent.type(input, "latte");

    expect(setSearch).toHaveBeenCalled();
  });
});
