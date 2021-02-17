import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import AuthenticatedRoute from './authentication/AuthenticatedRoute';
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import LandingPage from './LandingPage.js'
import GenreIndexPage from './GenreIndexPage.js'
import GenreShowPage from './GenreShowPage.js'
import BoardGameShowPage from './BoardGameShowPage'

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);
  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/users/new' component={RegistrationForm} />
        <Route exact path='/user-sessions/new' component={SignInForm} />
        <Route exact path='/genres' component={GenreIndexPage}/>
        <Route exact path='/genres/:id' component={GenreShowPage}/>
        <AuthenticatedRoute exact path='/boardgames/:id' component={BoardGameShowPage}/>
      </Switch>
    </Router>
  );
};

export default hot(App);
