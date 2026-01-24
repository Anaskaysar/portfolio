import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

describe("App Component", () => {
  test("renders app without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Basic sanity check
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
