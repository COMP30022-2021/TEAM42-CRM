import React from "react";
import "./App.css";
import Contacts from "./Components/Contacts";
import Filters from "./Components/Filters";

import SearchBar from "./Components/SearchBar";
import { SideBar } from "./Components/SideBar";
import SideBarCollapsed from "./Components/SBC";

function App() {
  const [sbc, setSBC] = React.useState(true);
  return (
    <div className="App">
      <SearchBar />
      <Filters />
      <Contacts />
      {sbc ? <SideBarCollapsed setSBC={setSBC} /> : <SideBar setSBC={setSBC} />}
    </div>
  );
}

export default App;
