import React from "react";
import useWindowSize from "../../../library/hooks/useWindowSize";

const AmenetiesComponent = (props) => {
  const { width } = useWindowSize();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: width > 600 ? "100px" : "30px",
          height: width > 600 ? "100px" : "30px",
        }}
      >
        <img style={{ height: "100%", width: "100%" }} src={props.image} />
      </div>
      <p style={{ color: "#2D3447", fontSize: "14px", fontWeight: "bold" }}>
        {props.title}
      </p>
    </div>
  );
};

export default AmenetiesComponent;
