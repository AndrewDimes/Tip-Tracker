import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
//Components
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import JobPage from '../JobPage/JobPage';
//Utils
import userService from '../../utils/userService';
//Global Styles
import { GlobalStyle } from '../../styles/globalStyles';
//Theme Provider
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogOut() {
    userService.logout();
    setUser({ user: null });
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path="/login">
            <LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />
          </Route>
          <Route exact path="/signup">
            <SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />
          </Route>
          {userService.getUser() ? (
            <>
              <Switch>
                <Route exact path="/">
                  <HomePage handleLogOut={handleLogOut} />
                </Route>
                <Route exact path="/:id">
                  <JobPage handleLogOut={handleLogOut} />
                </Route>
              </Switch>
            </>
          ) : (
            <Redirect to="/login" />
          )}
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
