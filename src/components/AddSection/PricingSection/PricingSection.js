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

const PricingSection = () => {
  const [specialPriceChecked, setSpecialPriceChecked] = useState(false);
  const [nightPrice, setNightPrice] = useState();
  const [specialPrice, setSpecialPrice] = useState();
  useEffect(() => {
    setSpecialPrice("");
  }, [specialPriceChecked]);
  return (
    <PricingWrapper>
      <HeadingWrapper>
        <TextHeading>Weekdays</TextHeading>
        <TextHeading>Monday, Tuesday, Wednesday, Thursday</TextHeading>
      </HeadingWrapper>
      <InputAndTitleWrapSimple>
        <div style={{ width: "50%", marginTop: "15px" }}>
          <InputTitle>Price per night</InputTitle>
          <InputWrapper
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
            value={specialPrice}
            onChange={(e) => {
              setSpecialPrice(e.target.value);
            }}
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
  );
};

export default PricingSection;
