const BASE_URL = `https://6975ef93c0c36a2a994fcdb8.mockapi.io/api/all/todos`;

export const fetchTodosApi = () => fetch(BASE_URL).then((res) => res.json());

export const addTodoApi = (todo) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  }).then((res) => res.json());

export const deleteTodoApi = (id) =>
  fetch(`${BASE_URL}/${id}`, { method: "DELETE" });

export const updateTodoApi = (id, data) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json());
