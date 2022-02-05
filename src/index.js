import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// import { ThemeProvider } from '@material-ui/core';
import theme from "themes/default.theme";
import GlobalStyles from "themes/global.style";
import AuthProvider from "context/AuthProvider";
import Routes from "./router";
import "./i18n";
import Loader from "./components/Loader/Loader";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <BrowserRouter>
        <AuthProvider>
          <Suspense fallback={<Loader />}>
            <Routes />
          </Suspense>
          {/* <Routes /> */}
        </AuthProvider>
      </BrowserRouter>
    </>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
