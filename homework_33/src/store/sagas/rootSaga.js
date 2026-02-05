import { all } from "redux-saga/effects";
import {
  watchAddTodo,
  watchDeleteTodo,
  watchFetchTodos,
  watchUpdateTodo,
} from "./watchers.js";

export function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchAddTodo(),
    watchDeleteTodo(),
    watchUpdateTodo(),
  ]);
}
