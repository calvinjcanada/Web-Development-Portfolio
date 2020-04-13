import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
// import PropTypes from "prop-types";
import GithubContext from "../../context/Github/githubContext";

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { loading, users } = githubContext;
  console.log("Users.js users: " + users);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      // Return a div containing a list of the users array (user.login)
      // .map() accepts an arrow function (it creates the list on the page)
      <div style={userStyle}>
        {users.map((user) => (
          // this.props uses state from the API
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  // You HAVE to use "camelCase" when using JSX
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};
export default Users;
