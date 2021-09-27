import React from "react";

export default function VisitsListElement({ visit }) {
  return (
      <div className="block">
        <h4 style={{ left: "12%", top: "12%" }}>{visit.date}</h4>
        <h4 style={{ left: "30%", top: "12%" }}>{visit.items}</h4>
        <h4 style={{ left: "49%", top: "12%" }}>{visit.numberPeople}</h4>
        <h4 style={{ left: "70%", top: "12%" }}>{visit.price}</h4>
      </div>
  );
}

// VisitsListElement.defaultProps = {
//     visit: {
//       date: "23/09/00",
//       items:"1, 3, 4",
//       numberPeople:"10",
//       price:"20.00"
//     },
//   };
  