import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

// Reducer Function
export default (state, action) => {
  // action.type = is passed in from GithubState.js
  // action.payload = is passed in from GithubState.js
  // ...state = make a copy of the current state (Immutable so we have to add edits in a clone of the state)
  switch (action.type) {
    // Functions to modify state (One for each function)
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
