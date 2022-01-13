import styled from "styled-components";

export const MessagesWrapper = styled.div`
  border-radius: 20px;
  margin: 20px 40px;
  padding: 25px 75px;
  background: #f7f9fa;
  @media (max-width: 900px) {
    padding: 20px 20px;
    margin: 20px 0px;
  }
`;
export const ImageWrapper = styled.div`
  width: 75px;
  height: 75px;
  margin-right: 20px;
  img {
    height: 100%;
    width: 100%;
  }
`;
export const MessagesHeadingText = styled.h1`
  /* font-size: 24px; */
  font-weight: bolder;
  margin: 0px;
  /* padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 3px solid #f0f1f2; */
`;
export const ChatsWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 16px #00000014;
  border-radius: 8px;
  padding: 20px 20px;
  margin: 40px 0px;
`;
