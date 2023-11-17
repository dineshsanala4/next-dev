import React from "react";
import { render, screen } from "@testing-library/react";
import PrevWorks from "./PrevWorks";

test("renders learn react link", () => {
  render(<PrevWorks />);
  const linkElement = screen.getByText(/PREVIOUS/i);
  expect(linkElement).toBeInTheDocument();
});
