import React, { useState } from "react";
import resortImage from "../../../assets/ResortBooking.svg";
import bedIcon from "../../../assets/BedIcon.svg";
import forwardArrow from "../../../assets/Arrow_2.svg";
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
const SectionComponent = () => {
  const [clicked, setClicked] = useState(false);
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
            <ImageWrapper></ImageWrapper>
            <ImageWrapper></ImageWrapper>
            <ImageWrapper></ImageWrapper>
            <ImageWrapper></ImageWrapper>
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
                <div>
                  <img src={bedIcon} />
                </div>
                <p>2 bedrooms</p>
              </FeatureIconAndText>
              <FeatureIconAndText>
                <div>
                  <img src={bedIcon} />
                </div>
                <p>3 living rooms</p>
              </FeatureIconAndText>
              <FeatureIconAndText>
                <div>
                  <img src={bedIcon} />
                </div>
                <p>7 people max</p>
              </FeatureIconAndText>
              <FeatureIconAndText>
                <div>
                  <img src={bedIcon} />
                </div>
                <p>3500 sq ft</p>
              </FeatureIconAndText>
            </FeaturesWrapper>
            <ResortTimingWrapper>
              <IndividualTimeWrapper>
                <p
                  style={{ margin: "0px", color: "#A5A7AF", fontSize: "16px" }}
                >
                  Check out Time
                </p>
                <p
                  style={{
                    margin: "0px",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  4:00 AM
                </p>
              </IndividualTimeWrapper>
              <img
                src={forwardArrow}
                style={{ marginLeft: "20px", marginRight: "20px" }}
              ></img>
              <IndividualTimeWrapper>
                <p
                  style={{ margin: "0px", color: "#A5A7AF", fontSize: "16px" }}
                >
                  Check out Time
                </p>
                <p
                  style={{
                    margin: "0px",
                    fontWeight: "bold",
                    fontSize: "16px",
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
        style={{ backgroundColor: clicked ? "#ED702D" : "#a5a5a5" }}
        onClick={handleClick}
      >
        <p style={{ margin: "0px", textAlign: "center" }}>
          Choose The Resource
        </p>
        <img src={bedIcon} />
      </ChooseTheResource>
    </ComponentOuterWrapper>
  );
};

export default SectionComponent;
