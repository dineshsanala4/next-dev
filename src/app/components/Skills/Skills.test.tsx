import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

test("renders learn react link", () => {
  render(<Skills />);
  const linkElement = screen.getByText(/SKILLS/i);
  expect(linkElement).toBeInTheDocument();
});
