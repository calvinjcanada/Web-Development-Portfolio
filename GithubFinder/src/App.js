import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import GithubState from "./context/Github/GithubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          {/* // The returned Element MUST always be one parent element (nothing can
        be outside of the div with class App */}
          <div className="App">
            <Navbar title="Github-Finder" icon="fab fa-github" />

            {/* These are wrapped in the parent element */}
            {/* reference a variable = {name} */}
            {/* <h1>Hello {showName && name} from React</h1> */}
            {/* 1st argument = boolean conditional */}
            {/* 2nd argument = value to be computed */}

            {/* {loading ? <h4>Loading...</h4> : <h4>Page is loaded!!!</h4>}; */}
            {/*Ternary Operation is a boolean in expression form.*/}
            {/*1st = comparison [true or false]*/}
            {/*2nd = True value*/}
            {/*3rd = False value*/}

            <div className="container">
              <Alert />
              <Switch>
                {/* Root Route */}
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:login" component={User} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
    //
    // React Fragments can make it possible to NOT need the one parent element
    // <Fragment>
    //   {/* These are NOT wrapped in the parent element */}
    //   <h1>Hello from React</h1>
    //   <h2>Goodbye</h2>
    // </Fragment>
    // You can only have 1 (parent element) or the other (React fragments)
  );
};

export default App;
