import React from "react";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const [loggedIn, setloggedIn] = React.useState(false);
  console.log(setloggedIn);
  return (
    <div className="App">
      <Route
        exact
        path="/contacts"
        render={() => (loggedIn ? <ContactPage /> : <Redirect to="/login" />)}
      />
      <Route
        exact
        path="/"
        render={() => (loggedIn ? <Dashboard /> : <Redirect to="/login" />)}
      />
      <Route
        exact
        path="/login"
        render={() => <Login setLogIn={setloggedIn} />}
      />
    </div>
  );
}

export default App;
