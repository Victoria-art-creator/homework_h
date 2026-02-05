import { takeEvery } from "redux-saga/effects";
import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../todosSlice.js";
import {
  fetchTodosWorker,
  addTodoWorker,
  deleteTodoWorker,
  updateTodoWorker,
} from "./workers.js";

export function* watchFetchTodos() {
  yield takeEvery(fetchTodos.type, fetchTodosWorker);
}

export function* watchAddTodo() {
  yield takeEvery(addTodo.type, addTodoWorker);
}

export function* watchDeleteTodo() {
  yield takeEvery(deleteTodo.type, deleteTodoWorker);
}

export function* watchUpdateTodo() {
  yield takeEvery(updateTodo.type, updateTodoWorker);
}
