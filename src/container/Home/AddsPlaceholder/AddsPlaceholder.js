import React from "react";
import Container from "components/UI/Container/Container";

const AddsPlaceholder = () => {
  return (
    <Container fluid={true}>
      <div
        style={{
          //   width: "90%",
          marginTop: "40px",
          marginBottom: "40px",
          borderRadius: "25px",
          height: "200px",
          backgroundColor: "silver",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{ fontsize: "28px", color: "whitesmoke", fontWeight: "bold" }}
        >
          Adds placeholder
        </p>
      </div>
    </Container>
  );
};

export default AddsPlaceholder;
