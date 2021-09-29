import React from "react";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import { Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUpBusiness from "./pages/SignUpBusiness";
import ContactDisplay from "./pages/ContactDisplay";

import customer from "./res/images/Customer.jpg";
import employee from "./res/images/Employee.jfif";
import vendor from "./res/images/external_vendor.jpg";

import AddEmployee from "./Components/AddContact/AddEmployee";
import UpdateEmployee from "./Components/UpdateContacts/UpdateEmployee";
import AddCustomer from "./Components/AddContact/AddCustomer";
import UpdateCustomer from "./Components/UpdateContacts/UpdateCustomer";
import AddExternalVendor from "./Components/AddContact/AddExternalVendor";
import UpdateExternalVendor from "./Components/UpdateContacts/UpdateExternalVendor";
import CustomerDisplay from "./Components/ContactDisplay/CustomerDisplay";
import EmployeeDisplay from "./Components/ContactDisplay/EmployeeDisplay";
import ExternalVendorDisplay from "./Components/ContactDisplay/ExternalVendorDisplay";
import CustomerFilterBar from "./Components/FilterSideBar/CustomerFilterBar";
import FilterBar from "./Components/FilterSideBar/FilterBar";
import { SideBarUser } from "./Components/SideBar/SideBarUser";
import AddEngagement from "./Components/Visits/AddEngagement";
import AddVisit from "./Components/Visits/AddVisit";
import EngagementCompleteHistory from "./Components/Visits/EngagementCompleteHistory";
import ContactsListElement from "./Components/ContactDisplay/ContactsListElement";
import ContactsList from "./Components/ContactDisplay/ContactsList";
import VisitsCompleteHistory from "./Components/Visits/VisitsCompleteHistory";

const contacts = [
  {
    id: 1,
    Name: "Lindsey Stroud",
    Gender: "Female",
    Role: "Employee",
    Email: "lindsey.stroud@gmail.com",
    image: employee,
    Phone: "+61 468 337 459",
    Address: "1406/28 Bouverie Street, Melbourne",
    DateOfBirth: "23rd of September 2000",
    DateJoined: "3rd of November 2015",
  },
  {
    id: 2,
    Name: "Nicci Troiani",
    Gender: "Female",
    Role: "Customer",
    Email: "nicci.troiani@gmail.com",
    image: customer,
    Phone: "+43 660 366 350",
    Address: "575 Lonsdale Street, Melbourne",
    DateOfBirth: "1st of September 2000",
    FirstVisit: "4th of March 2015",
  },
  {
    id: 3,
    Name: "George Fields",
    Gender: "Male",
    Role: "External Vendor",
    Email: "george.fields@gmail.com",
    image: vendor,
    Phone: "+43 603 668 350",
    Address: "575 Lonsdale Street, Melbourne",
    tags: "#plummer #tradie",
    cost: "$61 per hour",
  },
];

function App() {
  return (
    <div className="App" style={{ background: "#000000" }}>
      {/* <Route
        exact
        path="/contacts"
        render={() =>
          localStorage.getItem("loggedIn") === "true" ? (
            <ContactPage contacts={contacts} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route
        exact
        path="/"
        render={() =>
          localStorage.getItem("loggedIn") === "true" ? (
            <Dashboard contacts={contacts} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/signup" render={() => <SignUpBusiness />} />

      <Route
        exact
        path="/contacts/:role/:name/:id"
        render={() =>
          localStorage.getItem("loggedIn") === "true" ? (
            <ContactDisplay contacts={contacts} />
          ) : (
            <Redirect to="/login" />
          )
        }
      /> */}
    <VisitsCompleteHistory/>
    </div>
  );
}

export default App;
