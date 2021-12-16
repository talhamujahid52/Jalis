import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const ManageSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const DisplayManageSectionCenterWrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;

  /* align-items: center; */
  /* padding: 20px; */
`;
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
