import React, { useEffect, Fragment, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/Github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    // Pulls :login param from the route
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    company,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        {/* Link perserves the state while an A(link href) tag does not */}
        Hireable:{" "}
        {hireable ? (
          <i className="fas fa-check text-success" />
        ) : (
          // If hirable is true
          <i className="fas fa-times-circle text-danger" />
          // If hirable is false
        )}
        {/* Profile Display */}
        <div className="card grid-2">
          <div className="all-center">
            {/* Profile Pic */}
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            ></img>
            <h1>{name}</h1>
            <p>{location}</p>
            {/* Bio */}
            <div>
              {bio && (
                <Fragment>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              {/* Profile Buttton */}
              <a href={html_url} className="btn btn-dark my-1">
                Visit Github Profile
              </a>
              {/* Additional Info */}
              <ul>
                <li>
                  {login && (
                    <Fragment>
                      <strong>Username: </strong> {login}
                    </Fragment>
                  )}
                </li>
                <li>
                  {company && (
                    <Fragment>
                      <strong>Company: </strong> {company}
                    </Fragment>
                  )}
                </li>
                <li>
                  {blog && (
                    <Fragment>
                      <strong>Website: </strong> {blog}
                    </Fragment>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* User Stats */}
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
