import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";

export default function CustomerFilterBar({ filters, setFilters, setX }) {
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

      <div className="p3" style={{ left: "15%", top: "14%" }}>
        Gender:
      </div>

      <p className="pone" style={{ top: "17%", left: "25%" }}>
        Male
      </p>
      <p className="pone" style={{ top: "17%", left: "55%" }}>
        Female
      </p>
      <input
        style={{
          position: "absolute",
          height: "8%",
          left: "29%",
          width: "20%",
          top: "22%",
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
          height: "8%",
          left: "63%",
          width: "20%",
          top: "22%",
        }}
        type="checkbox"
        checked={filters.isFemale}
        value={filters.isFemale}
        onChange={(e) =>
          setFilters({ ...filters, isFemale: e.currentTarget.checked })
        }
      />

      <div className="p3" style={{ left: "15%", top: "32%" }}>
        Age:
      </div>

      <input
        style={{ top: "40%", left: "34%", width: "10%" }}
        className="numInput"
        type="text"
        value={filters.ageFrom}
        onChange={(e) =>
          setFilters({ ...filters, ageFrom: e.currentTarget.value })
        }
      ></input>

      <div className="p3" style={{ left: "52%", top: "40%" }}>
        to
      </div>

      <input
        style={{ top: "40%", left: "64%", width: "10%" }}
        className="numInput"
        type="text"
        value={filters.ageTo}
        onChange={(e) =>
          setFilters({ ...filters, ageTo: e.currentTarget.value })
        }
      ></input>

      <div className="p3" style={{ left: "15%", top: "76%" }}>
        Postcode:
      </div>

      <input
        style={{ top: "84%", left: "15%", width: "30%", height: "9%" }}
        className="numInput"
        type="text"
        onChange={(e) => setPostcode(e.target.value)}
        value={postcode}
      ></input>

      <button
        className="buttonAdd"
        style={{
          left: "50%",
          width: "40%",
          height: "10.5%",
          top: "84%",
        }}
      >
        <p
          className="pButton"
          style={{ fontSize: 13, color: "black" }}
          onClick={() => {
            filters.postcodes.push(postcode);
            setPostcode("");
          }}
        >
          Add Postcode
        </p>
      </button>

      <div className="p3" style={{ left: "15%", top: "50%" }}>
        First Visit:
      </div>

      <div className="pone" style={{ left: "22%", top: "58%" }}>
        After
      </div>

      <input
        style={{ top: "58%", left: "40%", width: "42%" }}
        className="numInput"
        type="date"
        value={filters.from}
        onChange={(e) =>
          setFilters({ ...filters, from: e.currentTarget.value })
        }
      ></input>

      <div className="pone" style={{ left: "22%", top: "67%" }}>
        Before
      </div>

      <input
        style={{ top: "67%", left: "40%", width: "42%" }}
        className="numInput"
        type="date"
        value={filters.to}
        onChange={(e) => setFilters({ ...filters, to: e.currentTarget.value })}
      ></input>
    </div>
  );
}
