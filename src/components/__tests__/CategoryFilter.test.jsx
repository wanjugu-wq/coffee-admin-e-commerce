import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import CategoryFilter from "../CategoryFilter";

describe("CategoryFilter Component", () => {
  const categories = [
    {
      id: 1,
      name: "Hot Coffee",
      slug: "hot-coffee",
    },
    {
      id: 2,
      name: "Iced Coffee",
      slug: "iced-coffee",
    },
  ];

  test("renders category buttons", () => {
    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="all"
        setSelectedCategory={vi.fn()}
      />,
    );

    expect(screen.getByText("Hot Coffee")).toBeInTheDocument();

    expect(screen.getByText("Iced Coffee")).toBeInTheDocument();
  });

  test("calls setSelectedCategory when clicked", async () => {
    const setSelectedCategory = vi.fn();

    render(
      <CategoryFilter
        categories={categories}
        selectedCategory="all"
        setSelectedCategory={setSelectedCategory}
      />,
    );

    const hotCoffeeButton = screen.getByText("Hot Coffee");

    await userEvent.click(hotCoffeeButton);

    expect(setSelectedCategory).toHaveBeenCalledWith("hot-coffee");
  });
});
