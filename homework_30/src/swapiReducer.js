import {
  FETCH_PEOPLE_REQUEST,
  FETCH_PEOPLE_SUCCESS,
  CLEAR_TODO,
} from "./swapiActions";

const initialState = {
  loading: false,
  person: null,
};

export const swapiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_REQUEST:
      return { ...state, loading: true };
    case FETCH_PEOPLE_SUCCESS:
      return { loading: false, person: action.payload };
    case CLEAR_TODO:
      return initialState;
    default:
      return state;
  }
};
