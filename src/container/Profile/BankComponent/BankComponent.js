import React from "react";
import {
  NotificationsComponentWrapper,
  ImageWrapper,
} from "./BankComponent.style";
// import Switch from "@mui/material/Switch";
// import NotificatioinImage from "../../../assets/PushNotification.svg";
// import DownArrow from "../../../assets/chevron-down.svg";
import EditIcon from "../../../assets/EditUsername.svg";
import useWindowSize from "library/hooks/useWindowSize";
// const label = { inputProps: { "aria-label": "Switch demo" } };
const BankComponent = (props) => {
  const { width } = useWindowSize();
  return (
    <NotificationsComponentWrapper>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
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
              fontSize: width > 900 ? "16px" : "12px",
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            height: "20px",
            width: "20px",
            marginRight: "5px",
            marginBottom: "5px",
          }}
        >
          <img
            style={{ height: "100%", width: "100%" }}
            alt="EditIcon"
            src={EditIcon}
          ></img>
        </div>
        <p
          style={{
            margin: "0px",
            color: "#3A3A3A",
            fontSize: "18px",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          Save
        </p>
      </div>
      {/* <div style={{ display: "flex" }}>
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
      </div> */}
    </NotificationsComponentWrapper>
  );
};

export default BankComponent;
