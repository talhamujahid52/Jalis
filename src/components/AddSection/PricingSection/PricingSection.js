import React, { useState } from "react";
import {
  PricingWrapper,
  InputWrapper,
  HeadingWrapper,
  TextHeading,
  InputTitle,
  InputAndTitleWrap,
  PriceButtons,
  ButtonWrapper,
  ButtonsAndInputWrapper,
  InputAndTitleWrapSimple,
  AccordianInputs,
  DaysInputWrapper,
  RightDaysInputWrapper,
  LeftDaysInputWrapper,
} from "./PricingSection.style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PricingSection = () => {
  const [priceTag, setPriceTag] = useState("");

  return (
    <PricingWrapper>
      {/* Top Div */}
      <HeadingWrapper>
        <TextHeading>Weekdays</TextHeading>
        <TextHeading>Monday, Tuesday, Wednesday, Thursday</TextHeading>
      </HeadingWrapper>
      <InputAndTitleWrapSimple>
        <div style={{ width: "50%" }}>
          <InputTitle>Price per night</InputTitle>
          <InputWrapper></InputWrapper>
        </div>
        <div style={{ width: "50%" }}>
          <InputTitle>Price per night</InputTitle>
          <InputWrapper></InputWrapper>
        </div>
      </InputAndTitleWrapSimple>
      {/* Div number 2 */}
      <HeadingWrapper>
        <TextHeading>Weekends</TextHeading>
        <TextHeading>Friday, Satuarday, Sunday</TextHeading>
      </HeadingWrapper>
      <div>
        <ButtonsAndInputWrapper>
          <ButtonWrapper>
            <PriceButtons
              onClick={() => {
                setPriceTag("Customize");
              }}
              style={{
                backgroundColor:
                  priceTag === "Customize" ? "#ED702D1A" : "white",
                color: priceTag === "Customize" ? "#ED702D" : "#A5A5A5",
              }}
            >
              Customize price
            </PriceButtons>
            <PriceButtons
              onClick={() => {
                setPriceTag("Fix");
              }}
              style={{
                backgroundColor: priceTag === "Fix" ? "#ED702D1A" : "white",
                color: priceTag === "Fix" ? "#ED702D" : "#A5A5A5",
              }}
            >
              Fix price
            </PriceButtons>
          </ButtonWrapper>
          <hr
            style={{
              backgroundColor: "#e3e3e3",
              marginBottom: "10px",
              marginTop: "10px",
            }}
          ></hr>
          <InputAndTitleWrap>
            <div style={{ width: "50%" }}>
              <InputTitle>Price per night</InputTitle>
              <InputWrapper></InputWrapper>
            </div>
            <div style={{ width: "50%" }}>
              <InputTitle>Special Offer</InputTitle>
              <InputWrapper></InputWrapper>
            </div>
          </InputAndTitleWrap>
        </ButtonsAndInputWrapper>
      </div>
      <Accordion>
        <AccordionSummary
          // expandIcon={}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Eid ul Fitar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <AccordianInputs>
              <div style={{ width: "50%" }}>
                <InputTitle>From</InputTitle>
                <InputWrapper></InputWrapper>
              </div>
              <div style={{ width: "50%" }}>
                <InputTitle>To</InputTitle>
                <InputWrapper></InputWrapper>
              </div>
            </AccordianInputs>
            <ButtonWrapper style={{ marginTop: "20px" }}>
              <PriceButtons
                onClick={() => {
                  setPriceTag("Customize");
                }}
                style={{
                  backgroundColor:
                    priceTag === "Customize" ? "#ED702D1A" : "white",
                  color: priceTag === "Customize" ? "#ED702D" : "#A5A5A5",
                }}
              >
                Customize price
              </PriceButtons>
              <PriceButtons
                onClick={() => {
                  setPriceTag("Fix");
                }}
                style={{
                  backgroundColor: priceTag === "Fix" ? "#ED702D1A" : "white",
                  color: priceTag === "Fix" ? "#ED702D" : "#A5A5A5",
                }}
              >
                Fix price
              </PriceButtons>
            </ButtonWrapper>
            <DaysInputWrapper>
              <LeftDaysInputWrapper>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
              </LeftDaysInputWrapper>
              <RightDaysInputWrapper>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
              </RightDaysInputWrapper>
            </DaysInputWrapper>
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* Second ACcordian */}
      <div style={{ marginTop: "40px" }}>
        <Accordion>
          <AccordionSummary
            // expandIcon={}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Eid ul Adha</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <AccordianInputs>
                <div style={{ width: "50%" }}>
                  <InputTitle>From</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
                <div style={{ width: "50%" }}>
                  <InputTitle>To</InputTitle>
                  <InputWrapper></InputWrapper>
                </div>
              </AccordianInputs>
              <ButtonWrapper style={{ marginTop: "20px" }}>
                <PriceButtons
                  onClick={() => {
                    setPriceTag("Customize");
                  }}
                  style={{
                    backgroundColor:
                      priceTag === "Customize" ? "#ED702D1A" : "white",
                    color: priceTag === "Customize" ? "#ED702D" : "#A5A5A5",
                  }}
                >
                  Customize price
                </PriceButtons>
                <PriceButtons
                  onClick={() => {
                    setPriceTag("Fix");
                  }}
                  style={{
                    backgroundColor: priceTag === "Fix" ? "#ED702D1A" : "white",
                    color: priceTag === "Fix" ? "#ED702D" : "#A5A5A5",
                  }}
                >
                  Fix price
                </PriceButtons>
              </ButtonWrapper>
              <DaysInputWrapper>
                <LeftDaysInputWrapper>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                </LeftDaysInputWrapper>
                <RightDaysInputWrapper>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                  <div>
                    <InputTitle>Price per night</InputTitle>
                    <InputWrapper></InputWrapper>
                  </div>
                </RightDaysInputWrapper>
              </DaysInputWrapper>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </PricingWrapper>
  );
};

export default PricingSection;
