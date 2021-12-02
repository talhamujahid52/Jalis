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
  CheckedInputWrapper,
} from "./PricingSection.style";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const PricingSection = () => {
  const [priceTagWeekends, setPriceTagWeekends] = useState("");
  const [priceTagEidUlFitr, setPriceTagEidUlFitr] = useState("Fix");
  const [priceTagEidUlAdha, setPriceTagEidUlAdha] = useState("Fix");

  return (
    <PricingWrapper>
      {/* Top Div */}
      <HeadingWrapper>
        <TextHeading>Weekdays</TextHeading>
        <TextHeading>Monday, Tuesday, Wednesday, Thursday</TextHeading>
      </HeadingWrapper>
      <InputAndTitleWrapSimple>
        <div style={{ width: "50%", marginTop: "15px" }}>
          <InputTitle>Price per night</InputTitle>
          <InputWrapper></InputWrapper>
        </div>
        <div style={{ width: "50%" }}>
          <CheckedInputWrapper>
            <Checkbox
              sx={{
                color: "#6F6E71",
                "&.Mui-checked": {
                  color: "#ED702D",
                },
              }}
            />
            <InputTitle>Price per night</InputTitle>
          </CheckedInputWrapper>
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
                setPriceTagWeekends("Customize");
              }}
              style={{
                backgroundColor:
                  priceTagWeekends === "Customize" ? "#ED702D1A" : "white",
                color: priceTagWeekends === "Customize" ? "#ED702D" : "#A5A5A5",
              }}
            >
              Customize price
            </PriceButtons>
            <PriceButtons
              onClick={() => {
                setPriceTagWeekends("Fix");
              }}
              style={{
                backgroundColor:
                  priceTagWeekends === "Fix" ? "#ED702D1A" : "white",
                color: priceTagWeekends === "Fix" ? "#ED702D" : "#A5A5A5",
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
            <div style={{ width: "50%", marginTop: "15px" }}>
              <InputTitle>Price per night</InputTitle>
              <InputWrapper></InputWrapper>
            </div>
            <div style={{ width: "50%" }}>
              <CheckedInputWrapper>
                <Checkbox
                  sx={{
                    color: "#6F6E71",
                    "&.Mui-checked": {
                      color: "#ED702D",
                    },
                  }}
                />
                <InputTitle>Special Offer</InputTitle>
              </CheckedInputWrapper>
              <InputWrapper></InputWrapper>
            </div>
          </InputAndTitleWrap>
        </ButtonsAndInputWrapper>
      </div>
      <div>
        <Accordion style={{ borderRadius: "25px" }}>
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
                    setPriceTagEidUlFitr("Customize");
                  }}
                  style={{
                    backgroundColor:
                      priceTagEidUlFitr === "Customize" ? "#ED702D1A" : "white",
                    color:
                      priceTagEidUlFitr === "Customize" ? "#ED702D" : "#A5A5A5",
                  }}
                >
                  Customize price
                </PriceButtons>
                <PriceButtons
                  onClick={() => {
                    setPriceTagEidUlFitr("Fix");
                  }}
                  style={{
                    backgroundColor:
                      priceTagEidUlFitr === "Fix" ? "#ED702D1A" : "white",
                    color: priceTagEidUlFitr === "Fix" ? "#ED702D" : "#A5A5A5",
                  }}
                >
                  Fix price
                </PriceButtons>
              </ButtonWrapper>
              <DaysInputWrapper>
                <LeftDaysInputWrapper>
                  {priceTagEidUlFitr === "Fix" && (
                    <div style={{ marginTop: "15px" }}>
                      <InputTitle>Price per Night</InputTitle>
                      <InputWrapper></InputWrapper>
                    </div>
                  )}
                  {priceTagEidUlFitr === "Customize" && (
                    <>
                      <div style={{ marginTop: "15px" }}>
                        <InputTitle>Day 01</InputTitle>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 02</InputTitle>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 03</InputTitle>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 04</InputTitle>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 05</InputTitle>
                        <InputWrapper></InputWrapper>
                      </div>
                    </>
                  )}
                </LeftDaysInputWrapper>
                <RightDaysInputWrapper>
                  {priceTagEidUlFitr === "Fix" && (
                    <div>
                      <CheckedInputWrapper>
                        <Checkbox
                          sx={{
                            color: "#6F6E71",
                            "&.Mui-checked": {
                              color: "#ED702D",
                            },
                          }}
                        />
                        <InputTitle>Special Offer</InputTitle>
                      </CheckedInputWrapper>
                      <InputWrapper></InputWrapper>
                    </div>
                  )}
                  {priceTagEidUlFitr === "Customize" && (
                    <>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                    </>
                  )}
                </RightDaysInputWrapper>
              </DaysInputWrapper>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      {/* Second ACcordian */}
      <div style={{ marginTop: "40px" }}>
        <Accordion style={{ borderRadius: "25px" }}>
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
                    setPriceTagEidUlAdha("Customize");
                  }}
                  style={{
                    backgroundColor:
                      priceTagEidUlAdha === "Customize" ? "#ED702D1A" : "white",
                    color:
                      priceTagEidUlAdha === "Customize" ? "#ED702D" : "#A5A5A5",
                  }}
                >
                  Customize price
                </PriceButtons>
                <PriceButtons
                  onClick={() => {
                    setPriceTagEidUlAdha("Fix");
                  }}
                  style={{
                    backgroundColor:
                      priceTagEidUlAdha === "Fix" ? "#ED702D1A" : "white",
                    color: priceTagEidUlAdha === "Fix" ? "#ED702D" : "#A5A5A5",
                  }}
                >
                  Fix price
                </PriceButtons>
              </ButtonWrapper>
              <DaysInputWrapper>
                <LeftDaysInputWrapper>
                  {priceTagEidUlAdha === "Fix" && (
                    <div style={{ marginTop: "15px" }}>
                      <InputTitle>Price per night</InputTitle>
                      <InputWrapper></InputWrapper>
                    </div>
                  )}
                  {priceTagEidUlAdha === "Customize" && (
                    <>
                      <div style={{ marginTop: "15px" }}>
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
                    </>
                  )}
                </LeftDaysInputWrapper>
                <RightDaysInputWrapper>
                  {priceTagEidUlAdha === "Fix" && (
                    <div>
                      <CheckedInputWrapper>
                        <Checkbox
                          sx={{
                            color: "#6F6E71",
                            "&.Mui-checked": {
                              color: "#ED702D",
                            },
                          }}
                        />
                        <InputTitle>Special Offer</InputTitle>
                      </CheckedInputWrapper>
                      <InputWrapper></InputWrapper>
                    </div>
                  )}
                  {priceTagEidUlAdha === "Customize" && (
                    <>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper></InputWrapper>
                      </div>{" "}
                    </>
                  )}
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
