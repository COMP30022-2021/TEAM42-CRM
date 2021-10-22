import React from "react";
import Header from "../SignIns/SignInHeader";
import { GrClose } from "react-icons/gr";

export default function VendorFilterBar({ filters, setFilters, setX }) {
  const [postcode, setPostcode] = React.useState("");
  const [tags, setTags] = React.useState("");

  return (
    <div className="filterBar">
      <Header text={"Filters"} top_a={"0%"} width_a={"100%"} />
      <Header text={""} top_a={"100%"} width_a={"100%"} />

      <GrClose
        onClick={() => setX("125%")}
        style={{ position: "absolute", left: "90%", top: "2.5%" }}
        cursor="pointer"
      />

      <div className="p3" style={{ left: "15%", top: "17%" }}>
        Gender:
      </div>

      <p className="pone" style={{ top: "20%", left: "25%" }}>
        Male
      </p>
      <p className="pone" style={{ top: "20%", left: "55%" }}>
        Female
      </p>
      <input
        style={{
          position: "absolute",
          height: "8%",
          left: "29%",
          width: "20%",
          top: "25%",
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
          top: "25%",
        }}
        type="checkbox"
        checked={filters.isFeale}
        value={filters.isFemale}
        onChange={(e) =>
          setFilters({ ...filters, isFemale: e.currentTarget.checked })
        }
      />

      <div className="p3" style={{ left: "15%", top: "70%" }}>
        Postcode:
      </div>

      <input
        style={{ top: "78%", left: "15%", width: "30%", height: "9%" }}
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
          height: "10.5%",
          top: "78%",
        }}
      >
        <p
          class="pButton"
          style={{ fontSize: 13, color: "black" }}
          onClick={() => {
            setPostcode("");
            filters.postcodes.push(postcode);
          }}
        >
          Add Postcode
        </p>
      </button>

      <div className="p3" style={{ left: "15%", top: "41%" }}>
        Tags:
      </div>

      <input
        style={{ top: "51%", left: "15%", width: "30%", height: "9%" }}
        className="numInput"
        type="text"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      ></input>

      <button
        className="buttonAdd"
        style={{
          left: "50%",
          width: "40%",
          height: "10.5%",
          top: "51%",
        }}
      >
        <p
          class="pButton"
          style={{ fontSize: 13, color: "black" }}
          onClick={() => {
            setTags("");
            filters.tags.push(tags);
          }}
        >
          Add Tags
        </p>
      </button>
    </div>
  );
}
