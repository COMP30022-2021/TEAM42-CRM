import React from "react";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/SignIns/Header";
import ChangePassword from "./Components/SignIns/ChangePassword";
import Login from "./Components/SignIns/Login";

function App() {
  const [loggedIn, setLogIn] = React.useState(true);
  return (
    <div className="App">
      <Route
        exact
        path="/contacts"
        render={() => render(loggedIn, ContactPage)}
      />
      <Route exact path="/" render={() => render(loggedIn, Dashboard)} />
      <Route exact path="/login" component={Login} />
    </div>
  );
}

const render = ({ loggedIn, component }) => {
  return loggedIn ? <component /> : <Redirect to="/login" />;
};

export default App;
