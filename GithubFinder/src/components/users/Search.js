import React, { useState, useContext } from "react";
import GithubContext from "../../context/Github/githubContext";
import AlertContext from "../../context/alert/alertContext";

export const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  // Create "text" state and function to change the state
  const [text, setText] = useState("");

  const onChange = (event) => {
    // Stores the typed input in the state object
    setText(event.target.value);
  };

  const onSubmit = (event) => {
    // Gets the text from the form
    event.preventDefault();
    // console.log(this.state.text);
    // Alert Message
    if (text === "") {
      alertContext.setAlert("Please enter something", "light");
      // Uses a prop function so need to add propType
      // 1st argument = alert message
      // 2nd argument = color it will appear
    } else {
      githubContext.searchUsers(text);
      // Function to pass search text to App.js for processing
      // Passes as a prop (Place as a prop/attribute in <Search />)
      setText("");
      // Reset form to no text
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          // Stores in state object
          onChange={onChange}
          // Required or you won't be able to type in the search bar
          // Component level state (This is what you want for this)
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>

      {/* Clear Users button: Only appears if users have been searched */}
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
