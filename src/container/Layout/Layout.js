import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { Layout as LayoutWrapper } from "antd";
import useWindowSize from "library/hooks/useWindowSize";
import LayoutProvider from "context/LayoutProvider";
import {
  LISTING_POSTS_PAGE,
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  AGENT_PROFILE_PAGE,
  AGENT_ACCOUNT_SETTINGS_PAGE,
  ACCOUNT_SETTINGS_PAGE,
  ADD_HOTEL_PAGE,
  PRICING_PLAN_PAGE,
  SINGLE_POST_PAGE,
  PRIVACY_PAGE,
  CHANGE_PASSWORD_PAGE,
  FORGET_PASSWORD_PAGE,
  ENTER_NEW_PASSWORD,
  OTP_VERIFICATION,
  AGENT_IMAGE_EDIT_PAGE,
  AGENT_PASSWORD_CHANGE_PAGE,
} from "settings/constant";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
const { Content } = LayoutWrapper;

export default withRouter(function Layout({ children, location }) {
  const { width } = useWindowSize();
  const singlePageUrlFromConst = SINGLE_POST_PAGE.split("/");
  const singlePageUrlFormLocation = location.pathname.split("/");

  return (
    <LayoutProvider>
      {location.pathname === LOGIN_PAGE ||
      location.pathname === CHANGE_PASSWORD_PAGE ||
      location.pathname === FORGET_PASSWORD_PAGE ||
      location.pathname === ENTER_NEW_PASSWORD ||
      location.pathname === OTP_VERIFICATION ||
      location.pathname === REGISTRATION_PAGE ? (
        <Content>{children}</Content>
      ) : (
        <Fragment>
          <Header />
          <Content>{children}</Content>
          {location.pathname === LISTING_POSTS_PAGE ||
          location.pathname === PRICING_PLAN_PAGE ||
          location.pathname === ADD_HOTEL_PAGE ||
          location.pathname === AGENT_PROFILE_PAGE ||
          location.pathname === CHANGE_PASSWORD_PAGE ||
          location.pathname === FORGET_PASSWORD_PAGE ||
          location.pathname === ENTER_NEW_PASSWORD ||
          location.pathname === OTP_VERIFICATION ||
          location.pathname === ACCOUNT_SETTINGS_PAGE ||
          location.pathname === PRIVACY_PAGE ||
          location.pathname ===
            `${AGENT_ACCOUNT_SETTINGS_PAGE + AGENT_IMAGE_EDIT_PAGE}` ||
          location.pathname ===
            `${AGENT_ACCOUNT_SETTINGS_PAGE + AGENT_PASSWORD_CHANGE_PAGE}` ||
          location.pathname === AGENT_ACCOUNT_SETTINGS_PAGE ? (
            <div style={{ height: "33px" }} />
          ) : (
            <Fragment>
              <Footer />
              {singlePageUrlFormLocation[1] === singlePageUrlFromConst[1] && (
                <Fragment>
                  {width < 1200 && <div style={{ height: "74px" }} />}
                </Fragment>
              )}
            </Fragment>
          )}
        </Fragment>
      )}
    </LayoutProvider>
  );
});
