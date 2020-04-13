// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  // state = {
  //   // This is a component-level state
  //   // Houses information about the user
  //   id: "id",
  //   login: "calvinjcanada",
  //   avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
  //   html_url: "https://github.com/calvinjcanada"
  // };

  // const { login, avatar_url, html_url } = this.state;
  // Destructure attributes from state object
  // const { login, avatar_url, html_url } = props.user;
  return (
    <div className="card text-center all-center">
      {/* UserItem */}
      <img
        src={avatar_url}
        // Import the avatar url link from the state object
        className="round-img"
        style={{ width: "60px", display: "block" }}
        alt=""
      ></img>
      <h3>{login}</h3>
      <div>
        <Link
          // Open user profile in the current page
          to={`/user/${login}`}
          // Import profile url from the state object
          className="btn btn-dark btn-sm my-1"
        >
          Profile Link!
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default UserItem;
