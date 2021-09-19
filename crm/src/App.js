import React from "react";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUpBusiness from "./pages/SignUpBusiness";
import ContactDisplay from "./pages/ContactDisplay";

function App() {
  const [loggedIn, setloggedIn] = React.useState(true);
  return (
    <div className="App" style={{ background: "#000000" }}>
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
      <Route exact path="/signup" render={() => <SignUpBusiness />} />

      <Route
        exact
        path="/contact1"
        render={() =>
          loggedIn ? <ContactDisplay /> : <Redirect to="/login" />
        }
      />
    </div>
  );
}

export default App;
