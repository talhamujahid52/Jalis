import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import { AuthContext } from "./context/AuthProvider";
import Layout from "./container/Layout/Layout";
import {
  LOGIN_PAGE,
  REGISTRATION_PAGE,
  FORGET_PASSWORD_PAGE,
  OTP_VERIFICATION,
  ENTER_NEW_PASSWORD,
  HOME_PAGE,
  LISTING_POSTS_PAGE,
  SINGLE_POST_PAGE,
  SINGLE_SERVICES_PAGE,
  ADD_HOTEL_PAGE,
  AGENT_PROFILE_PAGE,
  // AGENT_ACCOUNT_SETTINGS_PAGE,
  ACCOUNT_SETTINGS_PAGE,
  PRIVACY_PAGE,
  PRICING_PLAN_PAGE,
  ADD_RESORT_PAGE,
  ADD_SECTION_PAGE,
  MANAGE_SECTION_PAGE,
  MANAGE_RESORT_PAGE,
  TAB_Navigation,
  Resource_Section_Selection,
  Summary_Detail,
  My_Bookings,
  My_Resort_Bookings,
  Reports,
  Revenue,
  BlockedDates,
  Messages,
  CurrentPlan,
  DetailedChat,
  AddService,
  SERVICES_HOME_PAGE,
  UserProfile,
  MANAGE_SERVICE_PAGE,
  Favourites,
} from "./settings/constant";

/**
 *
 * Public Routes
 *
 */
const Loading = () => null;

const routes = [
  {
    path: UserProfile,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Home" */ "./container/Profile/Profile"),
      loading: Loading,
      modules: ["UserProfile"],
    }),
    exact: true,
  },
  {
    path: HOME_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Home" */ "./container/Home/Home"),
      loading: Loading,
      modules: ["Home"],
    }),
    exact: true,
  },
  {
    path: Favourites,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Home" */ "./container/Favourites/Favourites"
        ),
      loading: Loading,
      modules: ["Favourites"],
    }),
    exact: true,
  },
  {
    path: SERVICES_HOME_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Home" */ "./container/Home_Services/HomeServices"
        ),
      loading: Loading,
      modules: ["Home_Services"],
    }),
    exact: true,
  },
  {
    path: LOGIN_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SignIn" */ "./container/Auth/SignIn/SignIn"
        ),
      loading: Loading,
      modules: ["SignIn"],
    }),
  },
  {
    path: REGISTRATION_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SignUp" */ "./container/Auth/SignUp/SignUp"
        ),
      loading: Loading,
      modules: ["SignUp"],
    }),
  },
  {
    path: FORGET_PASSWORD_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/Auth/ForgetPassword"
        ),
      loading: Loading,
      modules: ["ForgetPassword"],
    }),
  },
  {
    path: ENTER_NEW_PASSWORD,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/Auth/EnterNewPassword"
        ),
      loading: Loading,
      modules: ["EnterNewPassword"],
    }),
  },
  {
    path: OTP_VERIFICATION,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/Auth/OTPVerification"
        ),
      loading: Loading,
      modules: ["OTPVerification"],
    }),
  },
  {
    path: ADD_RESORT_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/AddResort/AddResort"
        ),
      loading: Loading,
      modules: ["AddResort"],
    }),
  },
  {
    path: MANAGE_RESORT_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/ManageResort/ManageResort"
        ),
      loading: Loading,
      modules: ["ManageResort"],
    }),
  },
  {
    path: MANAGE_SERVICE_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/ManageServices/ManageServices"
        ),
      loading: Loading,
      modules: ["ManageService"],
    }),
  },
  {
    path: ADD_SECTION_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/AddSection/AddSection"
        ),
      loading: Loading,
      modules: ["AddSection"],
    }),
  },
  {
    path: MANAGE_SECTION_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/ManageSection/ManageSection"
        ),
      loading: Loading,
      modules: ["ManageSection"],
    }),
  },
  {
    path: TAB_Navigation,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "ForgetPassword" */ "./container/TabNavigation/TabNavigation"
        ),
      loading: Loading,
      modules: ["TabNavigation"],
    }),
  },
  {
    path: `${SINGLE_POST_PAGE}/:slug`,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SinglePageView" */ "./container/SinglePage/SinglePageView"
        ),
      loading: Loading,
      modules: ["SinglePageView"],
    }),
  },
  {
    path: `${SINGLE_SERVICES_PAGE}/:slug`,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "SinglePageView" */ "./container/SinglePage/SinglePageServiceView"
        ),
      loading: Loading,
      modules: ["SinglePageServiceView"],
    }),
  },
  {
    path: Resource_Section_Selection,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Listing" */ "./container/ResourceSectionSelection/ResourceSectionSelection"
        ),
      loading: Loading,
      modules: ["ResourceSectionSelection"],
    }),
  },
  {
    path: Summary_Detail,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Listing" */ "./container/Summary/Summary"),
      loading: Loading,
      modules: ["SummaryDetail"],
    }),
  },
  {
    path: LISTING_POSTS_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Listing" */ "./container/Listing/Listing"),
      loading: Loading,
      modules: ["Listing"],
    }),
  },
  {
    path: AGENT_PROFILE_PAGE,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "AgentDetailsViewPage" */ "./container/Agent/AccountDetails/AgentDetailsViewPage"
        ),
      loading: Loading,
      modules: ["AgentDetailsViewPage"],
    }),
  },
  {
    path: PRIVACY_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "privacy" */ "./container/Privacy/Privacy"),
      loading: Loading,
      modules: ["Privacy"],
    }),
  },
  {
    path: PRICING_PLAN_PAGE,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Pricing" */ "./container/Pricing/Pricing"),
      loading: Loading,
      modules: ["Pricing"],
    }),
  },
  {
    path: My_Bookings,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Pricing" */ "./container/MyBookings/MyBookings"
        ),
      loading: Loading,
      modules: ["MyBookings"],
    }),
  },
  {
    path: My_Resort_Bookings,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Pricing" */ "./container/MyResortBookings/MyResortBookings"
        ),
      loading: Loading,
      modules: ["MyResortBookings"],
    }),
  },
  {
    path: Reports,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Pricing" */ "./container/Reports/Reports"),
      loading: Loading,
      modules: ["Reports"],
    }),
  },
  {
    path: Revenue,
    component: Loadable({
      loader: () =>
        import(/* webpackChunkName: "Pricing" */ "./container/Reports/Revenue"),
      loading: Loading,
      modules: ["Revenue"],
    }),
  },
  {
    path: BlockedDates,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Pricing" */ "./container/BlockedDates/BlockedDates"
        ),
      loading: Loading,
      modules: ["BlockedDates"],
    }),
  },
  {
    path: Messages,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Pricing" */ "./container/Messages/Messages"
        ),
      loading: Loading,
      modules: ["Messages"],
    }),
  },
  {
    path: CurrentPlan,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Pricing" */ "./container/Pricing/SelectedPlanDescription"
        ),
      loading: Loading,
      modules: ["CurrentPlan"],
    }),
  },
  {
    path: DetailedChat,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Pricing" */ "./container/Messages/DetailedChat/DetailedChat"
        ),
      loading: Loading,
      modules: ["DetailedChat"],
    }),
  },
  {
    path: AddService,
    component: Loadable({
      loader: () =>
        import(
          /* webpackChunkName: "Pricing" */ "./container/AddService/AddService"
        ),
      loading: Loading,
      modules: ["AddService"],
    }),
  },
];

/**
 *
 * Protected Route Component
 *
 */
const AddListing = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "AddListing" */ "./container/AddListing/AddListing"
    ),
  loading: Loading,
  modules: ["AddListing"],
});

// const AgentAccountSettingsPage = Loadable({
//   loader: () =>
//     import(
//       /* webpackChunkName: "AgentAccountSettingsPage" */ "./container/Agent/AccountSettings/AgentAccountSettingsPage"
//     ),
//   loading: Loading,
//   modules: ["AgentAccountSettingsPage"],
// });

const AccountSettingsPage = Loadable({
  loader: () =>
    import(
      /* webpackChunkName: "AgentAccountSettingsPage" */ "./container/Settings/AccountSettings"
    ),
  loading: Loading,
  modules: ["AccountSettingsPage"],
});

/**
 *
 * Not Found Route Component
 *
 */

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "NotFound" */ "./container/404/404"),
  loading: Loading,
  modules: ["NotFound"],
});

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Route
      render={(props) =>
        loggedIn ? <Component {...props} /> : <Redirect to={LOGIN_PAGE} />
      }
      {...rest}
    />
  );
};

/**
 *
 * Overall Router Component
 *
 */

const Routes = () => {
  return (
    <Layout>
      <Switch>
        {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact} component={component} />
        ))}
        <ProtectedRoute path={ADD_HOTEL_PAGE} component={AddListing} />
        {/* <ProtectedRoute
          path={AGENT_ACCOUNT_SETTINGS_PAGE}
          component={AgentAccountSettingsPage}
        /> */}
        <ProtectedRoute
          path={ACCOUNT_SETTINGS_PAGE}
          component={AccountSettingsPage}
        />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
};

export default Routes;
