import { render, screen } from "@testing-library/react";
import React from "react";

import App from "./App";

xtest("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/loading/i);
  expect(linkElement).toBeInTheDocument();
});
