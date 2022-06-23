import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  render(<App />);
  const titleElement = screen.getByText(/We're launching/i);
  expect(titleElement).toBeInTheDocument();
});
