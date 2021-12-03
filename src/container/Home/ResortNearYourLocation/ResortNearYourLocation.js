import Container from "components/UI/Container/Container";
import React, { useState } from "react";
import { PriceButtons, ButtonWrapper } from "./ResortNearYourLocation.style";
const ResortNearYourLocation = () => {
  const [cityFilter, setCityFilter] = useState("");
  return (
    <Container fluid={true}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "40px", margin: "0px", fontWeight: "bold" }}>
          Resorts near your Location
        </p>
        <p
          style={{
            fontSize: "18px",
            margin: "0px",
            color: "#A5A5A5",
            marginTop: "10px",
            marginBottom: "50px",
          }}
        >
          You can choose to filter the results below by city
        </p>
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            margin: "0px",
            marginBottom: "40px",
          }}
        >
          Filter by city
        </p>
        <ButtonWrapper>
          <PriceButtons
            onClick={() => {
              setCityFilter("Riyadh");
            }}
            style={{
              backgroundColor: cityFilter === "Riyadh" ? "#ED702D1A" : "white",
              color: cityFilter === "Riyadh" ? "#ED702D" : "#A5A5A5",
            }}
          >
            Riyadh
          </PriceButtons>
          <PriceButtons
            onClick={() => {
              setCityFilter("Makkah");
            }}
            style={{
              backgroundColor: cityFilter === "Makkah" ? "#ED702D1A" : "white",
              color: cityFilter === "Makkah" ? "#ED702D" : "#A5A5A5",
            }}
          >
            Makkah
          </PriceButtons>
          <PriceButtons
            onClick={() => {
              setCityFilter("Madina");
            }}
            style={{
              backgroundColor: cityFilter === "Madina" ? "#ED702D1A" : "white",
              color: cityFilter === "Madina" ? "#ED702D" : "#A5A5A5",
            }}
          >
            Madina
          </PriceButtons>
          <PriceButtons
            onClick={() => {
              setCityFilter("Reset");
            }}
            style={{
              backgroundColor: cityFilter === "Reset" ? "#ED702D1A" : "white",
              color: cityFilter === "Reset" ? "#ED702D" : "#A5A5A5",
            }}
          >
            Reset
          </PriceButtons>
        </ButtonWrapper>
      </div>
    </Container>
  );
};

export default ResortNearYourLocation;
