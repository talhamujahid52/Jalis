import React from "react";

const AmenetiesComponent = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100px", height: "100px" }}>
        <img style={{ height: "100%", width: "100%" }} src={props.image} />
      </div>
      <p style={{ color: "#2D3447", fontSize: "14px", fontWeight: "bold" }}>
        {props.title}
      </p>
    </div>
  );
};

export default AmenetiesComponent;
