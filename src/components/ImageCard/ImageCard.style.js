import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const ImageCardWrapper = styled.div`
  > a {
    display: block;
    height: 260px;
    // width: 400px;

    position: relative;
    border-radius: 20px;
    overflow: hidden;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

export const ContentWrapper = styled.div`
  // border: 2px solid red;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  // flex-direction: column;
  justify-content: center;
  // align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;
export const TextAndButtonWrapper = styled.div`
  padding: 0px 20px;
  // border: 2px solid red;
  position: absolute;
  width: 100%;
  height: 80px;
  bottom: 0;
  left: 0;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  align-items: center;
  // background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
  .read-more-Button-wrapper {
    border-radius: 20px;
    border-color: ${themeGet("primary.0", "#008489")};
    background-color: ${themeGet("primary.0", "#008489")};
    color: white;
  }
`;
export const Title = styled.h4`
  // border: 1px solid red;
  margin: 0px;
  color: ${themeGet("color.1", "#ffffff")};
  font-size: 25px;
  line-height: 30px;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
  @media only screen and (min-width: 1100px) and (max-width: 1250px) {
    font-size: 20px;
  }
  @media only screen and (min-width: 750px) and (max-width: 900px) {
    font-size: 18px;
  }
`;

export const Meta = styled.div`
  // border: 1px solid red;
  // color: ${themeGet("color.1", "#ffffff")};
  color: ${themeGet("primary.0", "#008489")};
  font-size: 17px;
  line-height: 21px;
  font-weight: bold;
  text-transform: capitalize;
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 480px) {
    font-size: 15px;
  }
  @media only screen and (min-width: 1100px) and (max-width: 1250px) {
    font-size: 16px;
  }
`;

export default ImageCardWrapper;
