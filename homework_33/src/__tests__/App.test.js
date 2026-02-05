import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "../App.jsx";

describe("Todo App tests", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  test("Should page has main title 'Todo'", () => {
    const heading = screen.getByRole("heading", {
      name: /todo/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });
});
