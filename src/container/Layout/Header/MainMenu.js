import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "antd";

import {
  HOME_PAGE,
  // LISTING_POSTS_PAGE,
  AGENT_PROFILE_PAGE,
  ACCOUNT_SETTINGS_PAGE,
  // PRICING_PLAN_PAGE,
  SERVICES_HOME_PAGE,
  // AGENT_PROFILE_FAVOURITE,
  Favourites,
  LOGIN_PAGE,
} from "settings/constant";
import { AuthContext } from "../../../context/AuthProvider";

const MainMenu = ({ className }) => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Menu className={className}>
      <Menu.Item key="0">
        <NavLink exact to={`${HOME_PAGE}`}>
          Home
        </NavLink>
      </Menu.Item>

      {/* <Menu.Item key="1">
        <NavLink to={`${Favourites}`}>Favourites</NavLink>
      </Menu.Item> */}
      {!loggedIn && (
        <>
          <Menu.Item key="6">
            <NavLink to={`${LOGIN_PAGE}`}>Favourites</NavLink>
          </Menu.Item>
        </>
      )}
      {loggedIn && (
        <>
          <Menu.Item key="7">
            <NavLink to={`${Favourites}`}>Favourites</NavLink>
          </Menu.Item>
        </>
      )}
      <Menu.Item key="2">
        <NavLink to={`${AGENT_PROFILE_PAGE}`}>Contact Us</NavLink>
      </Menu.Item>
      <Menu.Item key="3">
        <NavLink to={`${SERVICES_HOME_PAGE}`}>Services</NavLink>
      </Menu.Item>
      {!loggedIn && (
        <>
          <Menu.Item key="8">
            <NavLink to={LOGIN_PAGE}>Settings</NavLink>
          </Menu.Item>
        </>
      )}
      {loggedIn && (
        <>
          <Menu.Item key="9">
            <NavLink to={ACCOUNT_SETTINGS_PAGE}>Settings</NavLink>
          </Menu.Item>
        </>
      )}
      {/* <Menu.Item key="4">
        <NavLink to={`${ACCOUNT_SETTINGS_PAGE}`}>Settings</NavLink>
      </Menu.Item> */}
    </Menu>
  );
};

export default MainMenu;
