import React from "react";
import { NavLink } from "react-router-dom";
// import { Menu } from "antd";

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  PRIVACY_PAGE,
  PRICING_PLAN_PAGE,
  AGENT_PROFILE_PAGE,
} from "settings/constant";

const FooterMenu = () => {
  return (
    // <Menu>
    //   <Menu.Item key="0">
    //     <NavLink to={`${HOME_PAGE}`}>Home</NavLink>
    //   </Menu.Item>
    //   <Menu.Item key="1">
    //     <NavLink to={`${LISTING_POSTS_PAGE}`}>About Us</NavLink>
    //   </Menu.Item>
    //   <Menu.Item key="2">
    //     <NavLink to={`${PRICING_PLAN_PAGE}`}>Contact Us</NavLink>
    //   </Menu.Item>
    //   <Menu.Item key="3">
    //     <NavLink to={`${PRIVACY_PAGE}`}>FAQ</NavLink>
    //   </Menu.Item>
    //   <Menu.Item key="4">
    //     <NavLink to={`${AGENT_PROFILE_PAGE}`}>Terms of Service</NavLink>
    //   </Menu.Item>
    //   <Menu.Item key="5">
    //     <NavLink to={`${AGENT_PROFILE_PAGE}`}>Privacy Policy</NavLink>
    //   </Menu.Item>
    // </Menu>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "30px",
      }}
    >
      <div>
        <NavLink
          to={`${HOME_PAGE}`}
          style={{ color: "#ADADAD", fontSize: "20px" }}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "#ADADAD", fontSize: "20px" }}
          to={`${LISTING_POSTS_PAGE}`}
        >
          About Us
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "#ADADAD", fontSize: "20px" }}
          to={`${PRICING_PLAN_PAGE}`}
        >
          Contact Us
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "#ADADAD", fontSize: "20px" }}
          to={`${PRIVACY_PAGE}`}
        >
          FAQ
        </NavLink>
      </div>
      <div>
        {" "}
        <NavLink
          style={{ color: "#ADADAD", fontSize: "20px" }}
          to={`${AGENT_PROFILE_PAGE}`}
        >
          Terms of Service
        </NavLink>
      </div>
      <div>
        {" "}
        <NavLink
          style={{ color: "#ADADAD", fontSize: "20px" }}
          to={`${AGENT_PROFILE_PAGE}`}
        >
          Privacy Policy
        </NavLink>
      </div>{" "}
    </div>
  );
};

export default FooterMenu;
