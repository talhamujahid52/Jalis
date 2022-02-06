import React, { useEffect, useState } from "react";
import {
  PricingWrapper,
  InputWrapper,
  HeadingWrapper,
  TextHeading,
  InputTitle,
  InputAndTitleWrapSimple,
  CheckedInputWrapper,
} from "./PricingSection.style";

import Checkbox from "@mui/material/Checkbox";
import Weekend from "./Weekend";
import EidulFitr from "./EidulFitr";
import EidulAdha from "./EidulAdha";
import doneAllIcon from "../../../assets/DoneAll.svg";

const PricingSection = (props) => {
  const [specialPriceChecked, setSpecialPriceChecked] = useState(false);
  const [nightPrice, setNightPrice] = useState();
  const [specialPrice, setSpecialPrice] = useState();
  useEffect(() => {
    setSpecialPrice("");
  }, [specialPriceChecked]);
  return (
    <form id="pricingForm" onSubmit={props.handleNext}>
      <PricingWrapper>
        <HeadingWrapper>
          <TextHeading>Weekdays</TextHeading>
          <TextHeading>Monday, Tuesday, Wednesday, Thursday</TextHeading>
        </HeadingWrapper>
        <InputAndTitleWrapSimple>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <InputTitle>Price per night</InputTitle>
            <InputWrapper
              type="number"
              required={!specialPriceChecked}
              min={0}
              // max={6}
              value={nightPrice}
              onChange={(e) => {
                setNightPrice(e.target.value);
              }}
              disabled={specialPriceChecked}
              style={{
                cursor: specialPriceChecked ? "not-allowed" : "default",
                textDecoration: specialPriceChecked ? "line-through" : "none",
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
              <InputTitle>Special offer</InputTitle>
            </CheckedInputWrapper>
            <InputWrapper
              type="number"
              min={0}
              // max={6}
              value={specialPrice}
              onChange={(e) => {
                setSpecialPrice(e.target.value);
              }}
              required={specialPriceChecked}
              disabled={!specialPriceChecked}
              style={{
                cursor: !specialPriceChecked ? "not-allowed" : "default",
                // textDecoration: "line-through",
              }}
            ></InputWrapper>
          </div>
        </InputAndTitleWrapSimple>
        <Weekend />
        <EidulFitr />
        <EidulAdha />
      </PricingWrapper>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            height: "50px",
            width: "120px",
            border: "1px solid #E3E3E3",
            color: "#6F6E71",
            borderRadius: "40px",
          }}
          onClick={props.handleBack}
        >
          BACK
        </button>
        <button
          style={{
            height: "50px",
            width: "170px",
            backgroundColor: "#ED702D",
            border: "0px",
            color: "white",
            borderRadius: "40px",
          }}
          type="submit"
          form="pricingForm"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ margin: "0px" }}>NEXT</p>
            <div style={{ width: "25px", height: "25px", marginLeft: "10px" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={doneAllIcon}
              ></img>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
};

export default PricingSection;
