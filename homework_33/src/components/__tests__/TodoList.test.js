import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, test, beforeEach, expect, afterEach } from "@jest/globals";
import TodoList from "../TodoList.jsx";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Todo List tests", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <TodoList />
      </Provider>,
    );
  });

  test("Should enter letters and numbers in the input field", () => {
    const input = screen.getByPlaceholderText(/input/i);
    fireEvent.change(input, { target: { value: "Task444" } });
    expect(input.value).toBe("Task444");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Should show error if input is empty", () => {
    const button = screen.getByText(/Add/i);

    act(() => {
      fireEvent.click(button);
    });

    const errorMessage = screen.getByText(/Field cannot be empty/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("Should add a new Todo after entering text", async () => {
    const input = screen.getByPlaceholderText(/input/i);
    const button = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "Task 3" } });

    act(() => {
      fireEvent.click(button);
    });

    const todoItem = await screen.findByText(/Task 3/i);
    expect(todoItem).toBeInTheDocument();
  });

  test("Should the input field be cleared after adding a TODO", () => {
    const input = screen.getByPlaceholderText(/input/i);
    const button = screen.getByText(/Add/i);

    fireEvent.change(input, { target: { value: "Test todo" } });

    act(() => {
      fireEvent.click(button);
    });

    expect(input.value).toBe("");
  });
});
