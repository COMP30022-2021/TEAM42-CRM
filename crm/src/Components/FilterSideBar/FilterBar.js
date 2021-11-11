import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";

export default function FilterBar({ filters, setFilters, setX }) {
  const [postcode, setPostcode] = React.useState("");

  return (
    <div className="filterBar">
      <Header text={"Filters"} top_a={"0%"} width_a={"100%"} />
      <Header text={""} top_a={"100%"} width_a={"100%"} />

      <GrClose
        onClick={() => setX("125%")}
        style={{ position: "absolute", left: "90%", top: "2.5%" }}
        cursor="pointer"
      />

      <div className="p3" style={{ left: "15%", top: "22%" }}>
        Gender:
      </div>

      <p className="pone" style={{ top: "30%", left: "20%" }}>
        Male
      </p>

      <p className="pone" style={{ top: "30%", left: "50%" }}>
        Female
      </p>

      <input
        style={{
          position: "absolute",
          height: "10%",
          left: "26%",
          width: "20%",
          top: "35%",
        }}
        type="checkbox"
        checked={filters.isMale}
        value={filters.isMale}
        onChange={(e) =>
          setFilters({ ...filters, isMale: e.currentTarget.checked })
        }
      />

      <input
        style={{
          position: "absolute",
          height: "10%",
          left: "60%",
          width: "20%",
          top: "35%",
        }}
        type="checkbox"
        checked={filters.isFeale}
        value={filters.isFemale}
        onChange={(e) =>
          setFilters({ ...filters, isFemale: e.currentTarget.checked })
        }
      />

      <div className="p3" style={{ left: "15%", top: "60%" }}>
        Postcode:
      </div>

      <input
        style={{ top: "70%", left: "15%", width: "30%", height: "10%" }}
        className="numInput"
        type="text"
        value={postcode}
        onChange={(e) => setPostcode(e.target.value)}
      ></input>

      <button
        className="buttonAdd"
        style={{
          left: "50%",
          width: "40%",
          height: "12%",
          top: "70%",
        }}
      >
        <p
          class="pButton"
          style={{ fontSize: 13, color: "black" }}
          onClick={() => {
            filters.postcodes.push(postcode);
            setPostcode("");
          }}
        >
          Add Postcode
        </p>
      </button>
    </div>
  );
}
