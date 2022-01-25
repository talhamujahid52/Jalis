import Container from "components/UI/Container/Container";
import React from "react";
import { PriceButtons, ButtonWrapper } from "./ServicesNearYourLocation.style";
const ResortNearYourLocation = () => {
  return (
    <Container fluid={true}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontSize: "40px", margin: "0px", fontWeight: "bold" }}>
          Services near your Location
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
        {/* <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            margin: "0px",
            marginBottom: "40px",
          }}
        >
          Filter by city
        </p> */}
        <ButtonWrapper>
          <PriceButtons
            onClick={() => {
              alert("CLicked!!");
            }}
            style={{
              backgroundColor: "#ED702D",
              color: "White",
            }}
          >
            Services near my Location
          </PriceButtons>
        </ButtonWrapper>
      </div>
    </Container>
  );
};

export default ResortNearYourLocation;
