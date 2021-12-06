import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import Box from "@mui/material/Box";

export const TabNavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 700px) {
    display: block;
  }
`;

export const TabNavigationComponentWrapper = styled.div`
  width: 80%;
  @media (max-width: 700px) {
    width: 100%;
  }
`;
