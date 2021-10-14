import React from "react";
import FilterBar from "./FilterBar";
import CustomerFilterBar from "./CustomerFilterBar";
import EmployeeFilterBar from "./EmployeeFilterBar";
import VendorFilterBar from "./VendorFilterBar";

import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";

export default function Filters({ filters, setFilters }) {
  const [xPosition, setX] = React.useState("125%");
  const contactType = useLocation().pathname.split("/")[2];
  const history = useHistory();

  const toggleMenu = () => {
    if (xPosition === "125%") {
      setX("70%");
    } else {
      setX("125%");
    }
  };

  React.useEffect(() => {
    setX("125%");
  }, []);

  const handleAdd = () => {
    if (xPosition === "125%") toggleMenu();
    else {
      console.log(filters);
      history.push("/contacts/" + contactType + "/filter");
    }
  };

  const handleClear = () => {
    history.push("/contacts/" + contactType + "/all");
  };

  return (
    <div>
      <div
        className="filterPanel"
        style={{ top: "25%", transform: `translatex(${xPosition})` }}
      >
        {contactType === "all" ? (
          <FilterBar setFilters={setFilters} filters={filters} setX={setX} />
        ) : contactType === "customers" ? (
          <CustomerFilterBar
            setFilters={setFilters}
            filters={filters}
            setX={setX}
          />
        ) : contactType === "employee" ? (
          <EmployeeFilterBar
            setFilters={setFilters}
            filters={filters}
            setX={setX}
          />
        ) : (
          <VendorFilterBar
            setFilters={setFilters}
            filters={filters}
            setX={setX}
          />
        )}
      </div>

      <div
        className="button1"
        style={{ left: "73%", top: "1.5%", zIndex: 1 }}
        onClick={() => handleAdd()}
      >
        <p>{xPosition === "125%" ? "Add Filter" : "Apply Filter"}</p>
      </div>
      <div
        className="button1"
        style={{ left: "86%", top: "1.5%", zIndex: 1 }}
        onClick={() => handleClear()}
      >
        <p>Clear Filters</p>
      </div>
    </div>
  );
}
