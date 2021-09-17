import React from "react";
import "./App.css";
import ContactPage from "./ContactPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route exact path="/." component={ContactPage} />
    </div>
  );
}

export default App;
