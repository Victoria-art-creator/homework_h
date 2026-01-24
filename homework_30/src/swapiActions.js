export const FETCH_PEOPLE_REQUEST = "FETCH_PEOPLE_REQUEST";
export const FETCH_PEOPLE_SUCCESS = "FETCH_PEOPLE_SUCCESS";
export const CLEAR_TODO = "CLEAR_TODO";

export const fetchPeople = (url) => async (dispatch) => {
  dispatch({ type: FETCH_PEOPLE_REQUEST });

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error();
    const data = await res.json();
    dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: data });
  } catch {
    dispatch({ type: FETCH_PEOPLE_SUCCESS, payload: null });
  }
};

export const clearTodo = () => ({ type: CLEAR_TODO });
