import React from "react";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Route exact path="/contacts" component={ContactPage} />
      <Route exact path="/" component={Dashboard} />
    </div>
  );
}

export default App;
