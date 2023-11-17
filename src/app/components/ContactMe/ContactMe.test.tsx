import React from "react";
import { render, screen } from "@testing-library/react";
import ContactMe from "./ContactMe";

test("renders learn react link", () => {
  render(<ContactMe />);
  const linkElement = screen.getByText(/Touch/i);
  expect(linkElement).toBeInTheDocument();
});
