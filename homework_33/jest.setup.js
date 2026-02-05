import "@testing-library/jest-dom";

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([]),
  }),
);

jest.mock("./src/api/todoApi.js", () => ({
  fetchTodosApi: jest.fn(() => Promise.resolve([])),
  addTodoApi: jest.fn((todo) => Promise.resolve({ id: 1, ...todo })),
}));
