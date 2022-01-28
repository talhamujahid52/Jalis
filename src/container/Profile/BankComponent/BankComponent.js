import React from "react";
import {
  NotificationsComponentWrapper,
  ImageWrapper,
} from "./BankComponent.style";
// import Switch from "@mui/material/Switch";
// import NotificatioinImage from "../../../assets/PushNotification.svg";
// import DownArrow from "../../../assets/chevron-down.svg";
import EditIcon from "../../../assets/EditUsername.svg";

// const label = { inputProps: { "aria-label": "Switch demo" } };
const BankComponent = (props) => {
  return (
    <NotificationsComponentWrapper>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "20px" }}
      >
        <ImageWrapper>
          <img alt="BankImage" src={props.image}></img>
        </ImageWrapper>
        <div>
          <p
            style={{
              margin: "0px",
              color: "black",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {props.heading}
          </p>
          {/* <p
            style={{
              margin: "0px",
              color: "#ED702D",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {props.subHeading}
          </p> */}
          <input
            style={{
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              color: "#ED702D",
              border: "2px solid #F5F4F4 ",
              padding: "0px 10px",
            }}
            onChange={(e) => {
              props.setName(e.target.value);
            }}
            value={props.name}
          ></input>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <p
          style={{
            margin: "0px",
            fontSize: "20px",
            fontWeight: "bold",
            textDecoration: "underline",
            // marginRight: "10px",
          }}
        >
          Edit
        </p>
        <div style={{ height: "20px", width: "20px", marginLeft: "10px" }}>
          <img alt="EditImage" src={EditIcon}></img>
        </div>
      </div>
    </NotificationsComponentWrapper>
  );
};

export default BankComponent;
