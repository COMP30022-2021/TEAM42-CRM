import React from "react";
import Helmet from "react-helmet";
import { useLocation } from "react-router";

import SideBarCollapsed from "../Components/SideBar/SBC";
import { SideBar } from "../Components/SideBar/SideBar";
import SearchBar from "../Components/SearchBar";
import ContactList from "../Components/ContactDisplay/ContactsList";
import AddPopUp from "../Components/AddContact/AddPopUp.js";

import { ContactAssigner } from "../Components/ContactDisplay/ContactAssigner";
import UpdateContact from "../Components/UpdateContacts/UpdateContact";
import Loading from "../Components/Loading";

export default function ContactDisplay() {
  const [sbc, setSBC] = React.useState(true);
  const [blur, setBlur] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);

  const location = useLocation();
  const path = location.pathname.split("/");

  const [displayContact, setDisplayContact] = React.useState();
  const [loading, setLoading] = React.useState(true);

  const blurred = editMode || blur || loading;
  const loadContact = async () => {
    setLoading(true);
    await fetch(
      "https://team42-crm.herokuapp.com/contact/single?role=" +
        lowerCaseFirstLetter(path[2]) +
        "&id=" +
        path[4],
      {
        method: "get",
        mode: "cors",
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200) {
          setDisplayContact(data.contact[0]);
          setLoading(false);
        }
      });
  };

  React.useEffect(() => {
    loadContact();
  }, [location]);

  return (
    <div>
      <div
        className="Page"
        style={{
          filter: blurred ? "blur(2px)" : "",
        }}
      >
        <Helmet>
          <title>Lynk - {path[3]}</title>
        </Helmet>

        <ContactList setLoading={setLoading} />
        <SearchBar width="95%" onClick={setBlur} />

        {!loading && (
          <ContactAssigner
            contact={displayContact}
            role={path[2]}
            setEditMode={setEditMode}
          />
        )}
      </div>
      )
      {sbc ? (
        <SideBarCollapsed setSBC={setSBC} path={location.pathname} />
      ) : (
        <SideBar setSBC={setSBC} path={location.pathname} />
      )}
      {editMode && (
        <UpdateContact setEditMode={setEditMode} contact={displayContact} />
      )}
      {blur && <AddPopUp setBlur={setBlur} />}
      {loading && <Loading />}
    </div>
  );
}

function lowerCaseFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
