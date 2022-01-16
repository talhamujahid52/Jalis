import React from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

import {
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  PRICING_PLAN_PAGE,
  SERVICES_HOME_PAGE,
} from "settings/constant";

const MainMenu = ({ className }) => {
  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={`${LISTING_POSTS_PAGE}`}>About Us</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={`${AGENT_PROFILE_PAGE}`}>Contact Us</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${SERVICES_HOME_PAGE}`}>Services</NavLink>
      </Menu.Item>
      <Menu.Item key="4">
        <NavLink to={`${PRICING_PLAN_PAGE}`}>Settings</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default MainMenu;
