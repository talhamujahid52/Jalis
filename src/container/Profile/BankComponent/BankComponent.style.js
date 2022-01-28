import styled from "styled-components";

export const NotificationsComponentWrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const ImageWrapper = styled.div`
  width: 65px;
  height: 65px;
  /* background: #ed702d;
  border-radius: 100px; */
  margin-right: 20px;
  /* @media (max-width: 900px) {
    margin-right: 10px;
    width: 70px;
    height: 70px;
  } */
`;
