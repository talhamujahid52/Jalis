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
import eidImage from "../../../assets/MoverIcon.svg";

const EidulAdha = () => {
  const [priceTagEidUlAdha, setPriceTagEidUlAdha] = useState("Fix");
  const [specialPriceChecked, setSpecialPriceChecked] = useState(false);
  const [day1, setDay1] = useState(false);
  const [day2, setDay2] = useState(false);
  const [day3, setDay3] = useState(false);
  const [day4, setDay4] = useState(false);
  const [day5, setDay5] = useState(false);
  const [day6, setDay6] = useState(false);

  return (
    <div>
      <div style={{ marginTop: "40px" }}>
        <Accordion style={{ borderRadius: "25px" }}>
          <AccordionSummary
            // expandIcon={}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              >
                <img
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                  src={eidImage}
                ></img>
              </div>

              <Typography style={{ marginTop: "10px" }}>Eid ul Adha</Typography>
            </div>
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
                  type="button"
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
                  type="button"
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
                      <InputTitle>Price per Night</InputTitle>
                      <InputWrapper
                        type="number"
                        min={0}
                        // max={6}
                        disabled={specialPriceChecked}
                        required={!specialPriceChecked}
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
                  {priceTagEidUlAdha === "Customize" && (
                    <>
                      <div style={{ marginTop: "15px" }}>
                        <InputTitle>Day 01</InputTitle>
                        <InputWrapper
                          type="number"
                          min={0}
                          // max={6}
                          disabled={day1}
                          required={!day1}
                          style={{
                            cursor: day1 ? "not-allowed" : "default",
                            textDecoration: day1 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 02</InputTitle>
                        <InputWrapper
                          type="number"
                          min={0}
                          // max={6}
                          disabled={day2}
                          required={!day2}
                          style={{
                            cursor: day2 ? "not-allowed" : "default",
                            textDecoration: day2 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 03</InputTitle>
                        <InputWrapper
                          type="number"
                          min={0}
                          // max={6}
                          disabled={day3}
                          required={!day3}
                          style={{
                            cursor: day3 ? "not-allowed" : "default",
                            textDecoration: day3 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 04</InputTitle>
                        <InputWrapper
                          type="number"
                          min={0}
                          // max={6}
                          disabled={day4}
                          required={!day4}
                          style={{
                            cursor: day4 ? "not-allowed" : "default",
                            textDecoration: day4 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 05</InputTitle>
                        <InputWrapper
                          type="number"
                          min={0}
                          // max={6}
                          disabled={day5}
                          required={!day5}
                          style={{
                            cursor: day5 ? "not-allowed" : "default",
                            textDecoration: day5 ? "line-through" : "none",
                          }}
                        ></InputWrapper>
                      </div>
                      <div>
                        <InputTitle>Day 06</InputTitle>
                        <InputWrapper
                          type="number"
                          min={0}
                          // max={6}
                          disabled={day6}
                          required={!day6}
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
                  {priceTagEidUlAdha === "Fix" && (
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
                        type="number"
                        min={0}
                        // max={6}
                        disabled={!specialPriceChecked}
                        required={specialPriceChecked}
                        style={{
                          cursor: !specialPriceChecked
                            ? "not-allowed"
                            : "default",
                          // textDecoration: "line-through",
                        }}
                      ></InputWrapper>
                    </div>
                  )}
                  {priceTagEidUlAdha === "Customize" && (
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
                          type="number"
                          min={0}
                          // max={6}
                          disabled={!day1}
                          required={day1}
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
                          type="number"
                          min={0}
                          // max={6}
                          disabled={!day2}
                          required={day2}
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
                          type="number"
                          min={0}
                          // max={6}
                          disabled={!day3}
                          required={day3}
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
                          type="number"
                          min={0}
                          // max={6}
                          disabled={!day4}
                          required={day4}
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
                          type="number"
                          min={0}
                          // max={6}
                          disabled={!day5}
                          required={day5}
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
                          type="number"
                          min={0}
                          // max={6}
                          disabled={!day6}
                          required={day6}
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

export default EidulAdha;
