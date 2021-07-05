import logo from "./logo.svg";
import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Checkout from "./Components/Checkout/Checkout";
import { react } from "@babel/types";
import PrivateRoute from "./Components/Privateroute/Privateroute";

export const userContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>

          <PrivateRoute path="/checkout/:Id">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
