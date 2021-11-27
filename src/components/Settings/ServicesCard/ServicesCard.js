import React from "react";
import "./ServicesCard.css";
import mybooking from "../../../assetts/MyBooking.svg";
import arrow from "../../../assetts/chevron-down.svg";

const ServicesCard = (props) => {
  return (
    <div onClick={props.onClick} className="maindiv">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <img
          src={props.picture ? props.picture : mybooking}
          style={{
            height: "50px",
            width: "50px",
          }}
          alt="logo"
        />
        <img
          src={arrow}
          style={{
            height: "10px",
            width: "17px",
            // transform: "rotate(270deg)",
          }}
          alt="logo"
        />
      </div>

      <p
        style={{
          fontWeight: "bold",
          // border: "1px solid red",
          margin: "0px",
        }}
      >
        {props.name ? props.name : "My Bookings"}
      </p>
      <p
        style={{
          color: "#A5A5A5",
          // border: "1px solid red",
        }}
      >
        {props.description
          ? props.description
          : "see a list of all your bookings"}
      </p>
    </div>
  );
};

export default ServicesCard;
