import React, { useState } from "react";
import {
  InputWrapper,
  HeadingWrapper,
  TextHeading,
  InputTitle,
  InputAndTitleWrap,
  PriceButtons,
  ButtonWrapper,
  ButtonsAndInputWrapper,
  CheckedInputWrapper,
} from "./PricingSection.style";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
const Weekend = () => {
  const [priceTagWeekends, setPriceTagWeekends] = useState("Fix");
  const [specialPriceChecked, setSpecialPriceChecked] = useState(false);
  const [fridayChecked, setFridayChecked] = useState(false);
  const [satuardayChecked, setSatuardayChecked] = useState(false);
  const [sundayChecked, setSundayChecked] = useState(false);

  return (
    <div>
      <HeadingWrapper>
        <TextHeading>Weekends</TextHeading>
        <TextHeading>Friday, Satuarday, Sunday</TextHeading>
      </HeadingWrapper>
      <div>
        <ButtonsAndInputWrapper>
          <ButtonWrapper>
            <PriceButtons
              type="button"
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
              type="button"
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
          {priceTagWeekends === "Customize" && (
            <>
              <InputAndTitleWrap>
                <div style={{ width: "50%", marginTop: "15px" }}>
                  <InputTitle>Friday</InputTitle>
                  <InputWrapper
                    type="number"
                    min={0}
                    max={6}
                    required={!fridayChecked}
                    disabled={fridayChecked}
                    style={{
                      cursor: fridayChecked ? "not-allowed" : "default",
                      textDecoration: fridayChecked ? "line-through" : "none",
                    }}
                  ></InputWrapper>
                </div>
                <div style={{ width: "50%" }}>
                  <CheckedInputWrapper>
                    <Checkbox
                      checked={fridayChecked}
                      onChange={() => {
                        setFridayChecked(!fridayChecked);
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
                    max={6}
                    required={fridayChecked}
                    disabled={!fridayChecked}
                    style={{
                      cursor: !fridayChecked ? "not-allowed" : "default",
                      // textDecoration: "line-through",
                    }}
                  ></InputWrapper>
                </div>
              </InputAndTitleWrap>
              <InputAndTitleWrap>
                <div style={{ width: "50%", marginTop: "15px" }}>
                  <InputTitle>Satuarday</InputTitle>
                  <InputWrapper
                    type="number"
                    min={0}
                    max={6}
                    disabled={satuardayChecked}
                    required={!satuardayChecked}
                    style={{
                      cursor: satuardayChecked ? "not-allowed" : "default",
                      textDecoration: satuardayChecked
                        ? "line-through"
                        : "none",
                    }}
                  ></InputWrapper>
                </div>
                <div style={{ width: "50%" }}>
                  <CheckedInputWrapper>
                    <Checkbox
                      checked={satuardayChecked}
                      onChange={() => {
                        setSatuardayChecked(!satuardayChecked);
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
                    max={6}
                    disabled={!satuardayChecked}
                    required={satuardayChecked}
                    style={{
                      cursor: !satuardayChecked ? "not-allowed" : "default",
                      // textDecoration: "line-through",
                    }}
                  ></InputWrapper>
                </div>
              </InputAndTitleWrap>
              <InputAndTitleWrap>
                <div style={{ width: "50%", marginTop: "15px" }}>
                  <InputTitle>Sunday</InputTitle>
                  <InputWrapper
                    type="number"
                    min={0}
                    max={6}
                    disabled={sundayChecked}
                    required={!sundayChecked}
                    style={{
                      cursor: sundayChecked ? "not-allowed" : "default",
                      textDecoration: sundayChecked ? "line-through" : "none",
                    }}
                  ></InputWrapper>
                </div>
                <div style={{ width: "50%" }}>
                  <CheckedInputWrapper>
                    <Checkbox
                      checked={sundayChecked}
                      onChange={() => {
                        setSundayChecked(!sundayChecked);
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
                    max={6}
                    disabled={!sundayChecked}
                    required={sundayChecked}
                    style={{
                      cursor: !sundayChecked ? "not-allowed" : "default",
                      // textDecoration: "line-through",
                    }}
                  ></InputWrapper>
                </div>
              </InputAndTitleWrap>
            </>
          )}
          {priceTagWeekends === "Fix" && (
            <>
              <InputAndTitleWrap>
                <div style={{ width: "50%", marginTop: "15px" }}>
                  <InputTitle>Price per night</InputTitle>
                  <InputWrapper
                    type="number"
                    min={0}
                    max={6}
                    required={!specialPriceChecked}
                    disabled={specialPriceChecked}
                    style={{
                      cursor: specialPriceChecked ? "not-allowed" : "default",
                      textDecoration: specialPriceChecked
                        ? "line-through"
                        : "none",
                    }}
                  ></InputWrapper>
                </div>
                <div style={{ width: "50%" }}>
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
                    max={6}
                    required={specialPriceChecked}
                    disabled={!specialPriceChecked}
                    style={{
                      cursor: !specialPriceChecked ? "not-allowed" : "default",
                      // textDecoration: "line-through",
                    }}
                  ></InputWrapper>
                </div>
              </InputAndTitleWrap>
            </>
          )}
        </ButtonsAndInputWrapper>
      </div>
    </div>
  );
};

export default Weekend;
