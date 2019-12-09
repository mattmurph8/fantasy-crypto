import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Landing from "./views/Landing";
import Login from "./views/Login";
import Lobby from "./views/Lobby";
import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import GameView from "./views/GameView";
import MyGames from "./views/MyGames";
import Profile from "./views/Profile";
import AddFunds from "./views/AddFunds";
import WithdrawFunds from "./views/WithdrawFunds";
import Friends from "./views/Friends";
import Asset from "./views/Asset";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#9ae200"
    },
    secondary: {
      main: "#ff890b"
    }
  }
});

const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const routes = () => (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/login">
        <Login handleLogin={handleLogin} />
      </Route>
      <Route path="/signup">
        <Login handleLogin={handleLogin} />
      </Route>
      <Route exact path="/lobby" component={Lobby} />
      <Route exact path="/games/:gameId" component={GameView} />
      <Route path="/my-games" component={MyGames} />
      <Route exact path="/account" component={Profile} />
      <Route path="/account/add-funds" component={AddFunds} />
      <Route path="/account/withdraw-funds" component={WithdrawFunds} />
      <Route path="/friends" component={Friends} />
      <Route path="/games/:gameId/assets/:symbol" component={Asset} />
    </Switch>
  );

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <Router>
          {loggedIn && <Header />}
          {routes()}
          {loggedIn && <BottomNav />}
        </Router>
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default App;
