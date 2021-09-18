import React from "react";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Header from "./Components/SignIns/Header";
import SignUpPage from "./Components/SignIns/SignUpPage";
import ChangePassword from "./Components/SignIns/ChangePassword";

function App() {
  return (
    <div className="App" >
      {/*  
      <Route exact path="/contacts" component={ContactPage} /> 
      <Route exact path="/" component={Dashboard} />
      <ChangePassword/>
      <SignUpPage/>
      */}
      <SignUpPage/>  
    </div>
  );
}

export default App;
