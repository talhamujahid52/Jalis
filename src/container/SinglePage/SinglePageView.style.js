import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const SinglePageWrapper = styled.div`
  /* padding-bottom: 56px;
  padding-left: 50px;
  padding-top: 50px;
  padding-right: 50px; */
  padding: 30px 50px;
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
  }
`;

export const LocationMeta = styled.div`
  color: ${themeGet("text.1", "#909090")};
  font-size: 13px;
  font-weight: 400;
`;

export const RatingMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${themeGet("text.0", "#2C2C2C")};
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 27px;
  @media (max-width: 767px) {
    margin-bottom: 20px;
  }

  i {
    color: ${themeGet("primary.0", "#008489")};
  }

  svg {
    fill: ${themeGet("primary.0", "#008489")};
  }

  strong {
    font-weight: 700;
    margin-left: 8px;
    margin-top: -2px;
  }
`;

export const Text = styled.p`
  color: ${themeGet("text.0", "#2C2C2C")};
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  margin: 0 0 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TextButton = styled.div`
  margin: 30px 0 0;
  @media (max-width: 767px) {
    margin-top: 19px;
  }
`;

export const TobBarWrapper = styled.div`
  .sticky-outer-wrapper {
    .sticky-inner-wrapper {
      background-color: ${themeGet("color.1", "#ffffff")};

      .scrollbar {
        box-shadow: none;
        border-top: 1px solid ${themeGet("border.3", "#E6E6E6")};
        border-bottom: 1px solid ${themeGet("border.3", "#E6E6E6")};

        .scrollbar_left {
          margin-right: 25px;
          padding-left: 25px;

          a {
            color: ${themeGet("text.0", "#2C2C2C")};
            font-size: 15px;
            padding: 28px 20px;
            text-transform: capitalize;
            transition: color 0.2s ease-in-out;

            &:first-child {
              padding-left: 0;
            }

            @media (max-width: 1200px) {
              padding: 18px 20px;
            }

            &:hover {
              color: ${themeGet("primary.0", "#008489")};
            }

            &.active {
              font-weight: 700;
              color: ${themeGet("primary.0", "#008489")};
              border-bottom: 3px solid ${themeGet("primary.0", "#008489")};
            }
          }
        }

        .scrollbar_right {
          padding-right: 25px;

          button,
          .ant-btn {
            @media (max-width: 767px) {
              min-width: 50px;
              svg {
                margin-right: 0;
              }
              > span {
                display: none;
              }
            }
          }
        }
      }
    }

    &.isSticky {
      .sticky-inner-wrapper {
        > div {
          border: 0;
          box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.16);
        }
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  button,
  button.ant-btn {
    margin: 0 5px;
    height: 37px;
    min-width: 90px;
    padding: 0 5px;
    border: 1px solid ${themeGet("border.3", "#E6E6E6")};
    color: ${themeGet("text.0", "#2C2C2C")};
    font-size: 15px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
    svg {
      width: 18.309px;
      height: 15.537px;
      margin-right: 10px;
      path {
        fill: transparent;
        stroke: ${themeGet("text.0", "#2C2C2C")};
        stroke-width: 1.5px;
      }
    }

    &.active {
      svg {
        path {
          stroke: ${themeGet("color.4", "#FC5C63")};
          fill: ${themeGet("color.4", "#FC5C63")};
        }
      }
    }

    &:focus {
      outline: none;
    }
    &:hover {
      background-color: ${themeGet("color.2", "#F7F7F7")};
    }
    &:after {
      display: none;
    }

    &:first-child {
      margin-left: 0;
      svg {
        position: relative;
        top: 1px;
        path {
          stroke-width: 1.8px;
        }
      }
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const ImageWrapper = styled.div`
  padding: 30px;
  border-radius: 20px;
  background: #f8f9fa;
  @media (max-width: 800px) {
    padding: 15px;
  }
`;
export const ResortDetailWrapper = styled.div`
  padding: 50px;
  @media (max-width: 800px) {
    padding: 20px;
  }
`;

export const PostImage = styled.div`
  /* height: 600px; */
  /* position: relative; */
  /* border-radius: 40px; */
  /* border: 1px solid red; */
  /* overflow: hidden; */

  /* @media (max-width: 767px) {
    height: 406px;
  } */

  /* img.absolute {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  .image_gallery_button {
    background: ${themeGet("color.1", "#ffffff")};
    border-radius: 3px;
    font-size: 15px;
    font-weight: 700;
    color: #2c2c2c;
    border: 0;
    height: 37px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: absolute;
    bottom: 30px;
    right: 25px;

    &:hover,
    &:focus {
      background: ${themeGet("color.2", "#F7F7F7")};
      color: ${themeGet("text.0", "#2C2C2C")};
    }
  } */
`;
export const ResortInfoWrapper = styled.div``;
export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const LocationArea = styled.div`
  color: ${themeGet("text.1", "#909090")};
  font-size: 24px;
  font-weight: 400;
  white-space: nowrap;
  /* width: 50%; */
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0px;
  margin-top: 5px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const RatingText = styled.p`
  font-size: 24px;
  color: #ffbb00;
  font-weight: bold;
  margin: 0px;
  margin-right: 5px;
  /* border: 1px solid red; */
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
export const RatingAndLocationWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const TitleAndPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
export const Title = styled.h2`
  color: ${themeGet("text.0", "#2C2C2C")};
  font-size: 25px;
  line-height: 34px;
  font-weight: 700;
  margin: 0 0 4px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  /* width: 80%; */
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
export const ArabicText = styled.p`
  margin: 0px;
  margin-left: 2px;
  margin-right: 2px;
  font-family: "Noto Kufi Arabic", sans-serif;
  color: ${themeGet("primary.0", "#2C2C2C")};
`;

export const PriceArea = styled.div`
  margin: 0px;
  /* border: 1px solid red; */
  color: ${themeGet("text.0", "#2C2C2C")};
  font-size: 24px;
  font-weight: 400;
  width: 50%;
  /* text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap; */
  @media (max-width: 800px) {
    width: 52%;
    /* text-align: left; */
    font-size: 16px;
  }
`;
export const startFromText = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: ${themeGet("text.0", "#2C2C2C")};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
export const NextButton = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  height: 60px;
  width: 300px;
  color: white;
  background: #ed702d;
  border-radius: 5px;
  border: 0px;
  font-size: 20px;
  text-align: left;
  padding-left: 20px;
  box-shadow: 0px 3px 99px #00000047;
  @media (max-width: 1100px) {
    margin-top: 20px;
  }
`;

export default SinglePageWrapper;
