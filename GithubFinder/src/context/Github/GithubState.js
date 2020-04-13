// Initial State & Functions and API calls

import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from "../types";

let githubClientId;
let githubClientSecret;

githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

const GithubState = (props) => {
  // Global State
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  // Get response from API call, Dispatch a type to Reducer
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search User
  const searchUsers = async (text) => {
    // Function to take text from search bar and pass in API call to Github
    setLoading();

    // Use Environment Variables: store api call and response data in response
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    // Modify State
    dispatch({
      type: SEARCH_USERS,
      // The data we want to send
      payload: response.data.items,
    });
  };

  // Get User profiles
  const getUser = async (username) => {
    setLoading();

    // Use Environment Variables: store api call and response data in response
    const response = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    //Modify State
    dispatch({
      type: GET_USER,
      payload: response.data,
    });
  };

  // Get user repos
  const getUserRepos = async (username) => {
    // setLoading(true);
    setLoading();

    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );

    // Modify State
    dispatch({
      type: GET_REPOS,
      payload: response.data,
    });
  };

  // clear users from state
  const clearUsers = () => {
    dispatch({
      type: CLEAR_USERS,
    });
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      // Value = things that will be made available globally
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
