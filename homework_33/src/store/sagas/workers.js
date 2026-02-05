import { call, put } from "redux-saga/effects";
import {
  fetchTodosSuccess,
  addTodoSuccess,
  deleteTodoSuccess,
  updateTodoSuccess,
} from "../todosSlice.js";

import {
  fetchTodosApi,
  addTodoApi,
  deleteTodoApi,
  updateTodoApi,
} from "../../api/todoApi.js";

export function* fetchTodosWorker() {
  const todos = yield call(fetchTodosApi);
  yield put(fetchTodosSuccess(todos));
}

export function* addTodoWorker(action) {
  const todo = yield call(addTodoApi, action.payload);
  yield put(addTodoSuccess(todo));
}

export function* deleteTodoWorker(action) {
  yield call(deleteTodoApi, action.payload);
  yield put(deleteTodoSuccess(action.payload));
}

export function* updateTodoWorker(action) {
  const updated = yield call(
    updateTodoApi,
    action.payload.id,
    action.payload.data,
  );
  yield put(updateTodoSuccess(updated));
}
