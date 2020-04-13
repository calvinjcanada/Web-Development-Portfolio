// Initial State & Functions and API calls

import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import AlertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  // Global State
  const initialState = null;

  //Connects state to Reducer
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  // Set alerts (Does not display it..only puts in the state object[requires Alert component (Alert.js)])
  const setAlert = (msg, type) => {
    // Modify State
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });

    // Timer to remove alert
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 2000);
  };

  return (
    <AlertContext.Provider
      // Value = things that will be made available globally
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
