import React from "react";
import {
  NotificationsComponentWrapper,
  ImageWrapper,
} from "./NotificationsComponent.style";
import Switch from "@mui/material/Switch";
// import NotificatioinImage from "../../../assets/PushNotification.svg";
import DownArrow from "../../../assets/chevron-down.svg";
const label = { inputProps: { "aria-label": "Switch demo" } };
const NotificationsComponent = (props) => {
  return (
    <NotificationsComponentWrapper>
      <div
        style={{ display: "flex", alignItems: "center", marginRight: "10px" }}
      >
        <ImageWrapper>
          <img
            alt="NotificationImage"
            style={{ height: "100%", width: "100%" }}
            src={props.image}
          ></img>
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
          {/* <input
            style={{
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "22px",
              color: "#3A3A3A",
              border: "2px solid #F5F4F4 ",
              padding: "0px 10px",
            }}
            // value={phone}
          ></input> */}
          <p
            style={{
              margin: "0px",
              color: "#A5A5A5",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            {props.subHeading}
          </p>
        </div>
      </div>
      <div>
        {props.show && <img alt="DownArrow" src={DownArrow} />}
        {!props.show && <Switch {...label} defaultChecked />}
        {/* <Switch {...label} defaultChecked /> */}
        {/* <img src={DownArrow} /> */}
      </div>
    </NotificationsComponentWrapper>
  );
};

export default NotificationsComponent;
