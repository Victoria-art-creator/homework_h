import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    fetchTodos: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.items = action.payload;
      state.loading = false;
    },

    addTodo: (state) => {
      state.loading = true;
    },
    addTodoSuccess: (state, action) => {
      state.items.push(action.payload);
      state.loading = false;
    },

    deleteTodo: (state) => {
      state.loading = true;
    },
    deleteTodoSuccess: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      state.loading = false;
    },

    updateTodo: (state) => {
      state.loading = true;
    },
    updateTodoSuccess: (state, action) => {
      const index = state.items.findIndex((t) => t.id === action.payload.id);
      state.items[index] = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchTodos,
  fetchTodosSuccess,
  addTodo,
  addTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  updateTodo,
  updateTodoSuccess,
} = todosSlice.actions;

export default todosSlice.reducer;
