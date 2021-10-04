import React from "react";

export const InfoPanel = ({ height, children }) => {
  const width = 500;
  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(-width);
  }, []);

  return (
    <div style={{ top: "34%", height: "100%", position: "absolute" }}>
      <div
        className="infoPanel"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          top: 55,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        ></button>
        <h1 className="infoHeader">About Lynk CRM</h1>
        <p className="infoText">
          Lynk - Founded in 2021 - is a Contact Relationship Manager that is
          specifically designed for restaurants. It empowers restaurant managers
          and staff to efficiently manage their contacts as well as keep track
          of contact activity. Additionally, the CRM displays key statistics
          that can used to by the restaurant management to assist in decision
          making. The CRM has the following features:
        </p>
        <ul>
          <li>Storing of contact information</li>
          <li>Efficient search of contacts based on filters</li>
          <li>Tracking any interaction with contacts</li>
          <li>Displaying of relevant statistics</li>
        </ul>
      </div>
    </div>
  );
};
