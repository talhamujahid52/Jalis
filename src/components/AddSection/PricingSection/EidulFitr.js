import React, { useState } from "react";
import {
  InputWrapper,
  InputTitle,
  PriceButtons,
  ButtonWrapper,
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
const EidulFitr = () => {
  const [priceTagEidUlFitr, setPriceTagEidUlFitr] = useState("Fix");
  const [specialPriceChecked, setSpecialPriceChecked] = useState(false);
  const [day1, setDay1] = useState(false);
  const [day2, setDay2] = useState(false);
  const [day3, setDay3] = useState(false);
  const [day4, setDay4] = useState(false);
  const [day5, setDay5] = useState(false);
  const [day6, setDay6] = useState(false);

  return (
    <div>
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
                      <InputWrapper
                        disabled={specialPriceChecked}
                        style={{
                          cursor: specialPriceChecked
                            ? "not-allowed"
                            : "default",
                          textDecoration: specialPriceChecked
                            ? "line-through"
                            : "none",
                        }}
                      ></InputWrapper>
                    </div>
                  )}
                  {priceTagEidUlFitr === "Customize" && (
                    <>
                      <div style={{ marginTop: "15px" }}>
                        <InputTitle>Day 01</InputTitle>
                        <InputWrapper
                          disabled={day1}
                          style={{
                            cursor: day1 ? "not-allowed" : "default",
                            textDecoration: day1 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 02</InputTitle>
                        <InputWrapper
                          disabled={day2}
                          style={{
                            cursor: day2 ? "not-allowed" : "default",
                            textDecoration: day2 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 03</InputTitle>
                        <InputWrapper
                          disabled={day3}
                          style={{
                            cursor: day3 ? "not-allowed" : "default",
                            textDecoration: day3 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 04</InputTitle>
                        <InputWrapper
                          disabled={day4}
                          style={{
                            cursor: day4 ? "not-allowed" : "default",
                            textDecoration: day4 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 05</InputTitle>
                        <InputWrapper
                          disabled={day5}
                          style={{
                            cursor: day5 ? "not-allowed" : "default",
                            textDecoration: day5 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 06</InputTitle>
                        <InputWrapper
                          disabled={day6}
                          style={{
                            cursor: day6 ? "not-allowed" : "default",
                            textDecoration: day6 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                    </>
                  )}
                </LeftDaysInputWrapper>
                <RightDaysInputWrapper>
                  {priceTagEidUlFitr === "Fix" && (
                    <div>
                      <CheckedInputWrapper>
                        <Checkbox
                          checked={specialPriceChecked}
                          onChange={() => {
                            setSpecialPriceChecked(!specialPriceChecked);
                          }}
                          sx={{
                            color: "#6F6E71",
                            "&.Mui-checked": {
                              color: "#ED702D",
                            },
                          }}
                        />
                        <InputTitle>Special Offer</InputTitle>
                      </CheckedInputWrapper>
                      <InputWrapper
                        disabled={!specialPriceChecked}
                        style={{
                          cursor: !specialPriceChecked
                            ? "not-allowed"
                            : "default",
                          // textDecoration: "line-through",
                        }}
                      ></InputWrapper>
                    </div>
                  )}
                  {priceTagEidUlFitr === "Customize" && (
                    <>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            checked={day1}
                            onChange={() => {
                              setDay1(!day1);
                            }}
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper
                          disabled={!day1}
                          style={{
                            cursor: !day1 ? "not-allowed" : "default",
                            // textDecoration: "line-through",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            checked={day2}
                            onChange={() => {
                              setDay2(!day2);
                            }}
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper
                          disabled={!day2}
                          style={{
                            cursor: !day2 ? "not-allowed" : "default",
                            // textDecoration: "line-through",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            checked={day3}
                            onChange={() => {
                              setDay3(!day3);
                            }}
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper
                          disabled={!day3}
                          style={{
                            cursor: !day3 ? "not-allowed" : "default",
                            // textDecoration: "line-through",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            checked={day4}
                            onChange={() => {
                              setDay4(!day4);
                            }}
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper
                          disabled={!day4}
                          style={{
                            cursor: !day4 ? "not-allowed" : "default",
                            // textDecoration: "line-through",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            checked={day5}
                            onChange={() => {
                              setDay5(!day5);
                            }}
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper
                          disabled={!day5}
                          style={{
                            cursor: !day5 ? "not-allowed" : "default",
                            // textDecoration: "line-through",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <CheckedInputWrapper>
                          <Checkbox
                            checked={day6}
                            onChange={() => {
                              setDay6(!day6);
                            }}
                            sx={{
                              color: "#6F6E71",
                              "&.Mui-checked": {
                                color: "#ED702D",
                              },
                            }}
                          />
                          <InputTitle>Special Offer</InputTitle>
                        </CheckedInputWrapper>
                        <InputWrapper
                          disabled={!day6}
                          style={{
                            cursor: !day6 ? "not-allowed" : "default",
                            // textDecoration: "line-through",
                          }}
                        ></InputWrapper>
                      </div>
                    </>
                  )}
                </RightDaysInputWrapper>
              </DaysInputWrapper>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default EidulFitr;
