import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import { AuthContext } from "context/AuthProvider";
import {
  HOME_PAGE,
  // LISTING_POSTS_PAGE,
  // PRICING_PLAN_PAGE,
  // AGENT_ACCOUNT_SETTINGS_PAGE,
  ACCOUNT_SETTINGS_PAGE,
  // ADD_RESORT_PAGE,
  Favourites,
  AGENT_PROFILE_PAGE,
  SERVICES_HOME_PAGE,
  LOGIN_PAGE,
} from "settings/constant";

const MobileMenu = ({ className }) => {
  // auth context
  const { loggedIn, logOut } = useContext(AuthContext);

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={HOME_PAGE}>
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item key="1">
        <NavLink to={Favourites}>Favourites</NavLink>
      </Menu.Item>
      <Menu.Item key="2">
        <NavLink to={AGENT_PROFILE_PAGE}>Contact Us</NavLink>
      </Menu.Item>
      <Menu.Item key="5">
        <NavLink to={SERVICES_HOME_PAGE}>Services</NavLink>
      </Menu.Item>
      {!loggedIn && (
        <>
          <Menu.Item key="6">
            <NavLink to={LOGIN_PAGE}>Settings</NavLink>
          </Menu.Item>
        </>
      )}
      {loggedIn && (
        <>
          <Menu.Item key="6">
            <NavLink to={ACCOUNT_SETTINGS_PAGE}>Settings</NavLink>
          </Menu.Item>
        </>
      )}

      {/* {loggedIn && (
        <>
          <Menu.Item key="3">
            <NavLink to={ACCOUNT_SETTINGS_PAGE}>Account Settings</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to={ADD_RESORT_PAGE}>Add Hotel</NavLink>
          </Menu.Item>
        </>
      )} */}
      {loggedIn && (
        <Menu.Item key="4">
          <button onClick={logOut}>Log Out</button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default MobileMenu;
