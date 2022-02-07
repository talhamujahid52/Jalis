import React, { useState } from "react";
import resortImage from "../../../assets/ResortBooking.svg";
// import bedIcon from "../../../assets/BedIcon.svg";
import bedIcon from "../../../assets/orangeBed.svg";

import AreaIcon from "../../../assets/AreaIcon.svg";
import PeopleIcon from "../../../assets/NumPeopleIcon.svg";
import LivingroomIcon from "../../../assets/LivingroomIcon.svg";
import SelectedIcon from "../../../assets/selectedIcon.svg";
import forwardArrow from "../../../assets/Arrow_2.svg";
import SectionImage from "../../../assets/addresort.jpg";
import {
  MainWrapper,
  TopDiv,
  BottomDiv,
  BottomLeftDiv,
  ImageWrapper,
  BottomRightDiv,
  FeaturesWrapper,
  FeatureIconAndText,
  ResortTimingWrapper,
  IndividualTimeWrapper,
  ChooseTheResource,
  ComponentOuterWrapper,
} from "./SectionComponent.style";
import useWindowSize from "../../../library/hooks/useWindowSize";
const SectionComponent = () => {
  const [clicked, setClicked] = useState(false);
  const { width } = useWindowSize();

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <ComponentOuterWrapper>
      <MainWrapper>
        <TopDiv>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ height: "55px", width: "55px", marginRight: "15px" }}>
              <img
                alt=""
                src={resortImage}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <p style={{ margin: "0px", fontSize: "16px", fontWeight: "bold" }}>
              Section Number 1
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                margin: "0px",
                fontSize: "16px",
                fontWeight: "bold",
                marginRight: "50px",
                fontFamily: "Noto Kufi Arabic, sans-serif",
              }}
            >
              08 أيام
            </p>
            <p
              style={{
                margin: "0px",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#ED702D",
                fontFamily: "Noto Kufi Arabic, sans-serif",
              }}
            >
              3000 ريال
            </p>
          </div>
        </TopDiv>
        <hr
          style={{ height: "2px", backgroundColor: "#F8F9FA", border: "0px" }}
        ></hr>
        <BottomDiv>
          <BottomLeftDiv>
            <ImageWrapper>
              <img
                alt=""
                style={{ height: "100%", width: "100%" }}
                src={SectionImage}
              ></img>
            </ImageWrapper>
            <ImageWrapper>
              <img
                alt=""
                style={{ height: "100%", width: "100%" }}
                src={SectionImage}
              ></img>
            </ImageWrapper>
            <ImageWrapper>
              <img
                alt=""
                style={{ height: "100%", width: "100%" }}
                src={SectionImage}
              ></img>
            </ImageWrapper>
            <ImageWrapper>
              <img
                alt=""
                style={{ height: "100%", width: "100%" }}
                src={SectionImage}
              ></img>
            </ImageWrapper>
          </BottomLeftDiv>
          <BottomRightDiv>
            <div>
              <p
                style={{
                  margin: "0px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                Section Description
              </p>
              <p style={{ color: "#A5A5A5", margin: "0px", fontSize: "16px" }}>
                This is a elegant luxury Resort . This resort is an 8-minute
                walk from the Thomas Hefferson Memeorial, 1.4 miles from both
                downtown and white house. This is a elegant luxury Resort . This
                resort is an 8-minute walk from the Thomas Hefferson Memeorial,
                1.4 miles from both downtown and white house.
              </p>
            </div>

            <FeaturesWrapper>
              <FeatureIconAndText>
                <div style={{ width: "36px", height: "28px" }}>
                  <img
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                    src={bedIcon}
                  />
                </div>
                <p>2 bedrooms</p>
              </FeatureIconAndText>
              <FeatureIconAndText>
                <div style={{ width: "40px", height: "30px" }}>
                  <img
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                    src={LivingroomIcon}
                  />
                </div>
                <p>3 living rooms</p>
              </FeatureIconAndText>
              <FeatureIconAndText>
                <div style={{ width: "38px", height: "25px" }}>
                  <img
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                    src={PeopleIcon}
                  />
                </div>
                <p>7 people max</p>
              </FeatureIconAndText>
              <FeatureIconAndText>
                <div style={{ width: "28px", height: "28px" }}>
                  <img
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                    src={AreaIcon}
                  />
                </div>
                <p>3500 sq ft</p>
              </FeatureIconAndText>
            </FeaturesWrapper>
            <ResortTimingWrapper>
              <IndividualTimeWrapper>
                <p
                  style={{
                    margin: "0px",
                    color: "#A5A7AF",
                    fontSize: width > 800 ? "16px" : "12px",
                    textAlign: "center",
                  }}
                >
                  Check out Time
                </p>
                <p
                  style={{
                    margin: "0px",
                    fontWeight: "bold",
                    // fontSize: "16px",
                    fontSize: width > 800 ? "16px" : "12px",
                  }}
                >
                  4:00 AM
                </p>
              </IndividualTimeWrapper>
              <img
                alt=""
                src={forwardArrow}
                style={{
                  marginLeft: width > 800 ? "20px" : "10px",
                  marginRight: width > 800 ? "20px" : "10px",
                }}
              ></img>
              <IndividualTimeWrapper>
                <p
                  style={{
                    margin: "0px",
                    color: "#A5A7AF",
                    fontSize: width > 800 ? "16px" : "12px",
                    textAlign: "center",
                  }}
                >
                  Check in Time
                </p>
                <p
                  style={{
                    margin: "0px",
                    fontWeight: "bold",
                    // fontSize: "16px",
                    fontSize: width > 800 ? "16px" : "12px",
                  }}
                >
                  4:00 AM
                </p>
              </IndividualTimeWrapper>
            </ResortTimingWrapper>
          </BottomRightDiv>
        </BottomDiv>
      </MainWrapper>
      <ChooseTheResource
        style={{
          backgroundColor: clicked ? "#ED702D" : "#a5a5a5",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <p
          style={{
            margin: "0px",
            textAlign: "center",
            fontSize: "20px",
            marginBottom: "10px",
          }}
        >
          Choose this resource
        </p>
        <div style={{ width: "41px", height: "24px" }}>
          <img
            alt=""
            style={{ width: "100%", height: "100%" }}
            src={SelectedIcon}
          />
        </div>
      </ChooseTheResource>
    </ComponentOuterWrapper>
  );
};

export default SectionComponent;
