import React from "react";
import { render, screen } from "@testing-library/react";
import Blog from "./Blog";

test("renders learn react link", () => {
  render(<Blog />);
  const linkElement = screen.getByText(/Blog/i);
  expect(linkElement).toBeInTheDocument();
});
