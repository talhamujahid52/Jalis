import React from "react";
import Container from "components/UI/Container/Container";
import useWindowSize from "../../../library/hooks/useWindowSize";

const AddsPlaceholder = (props) => {
  const { width } = useWindowSize();

  return (
    <>
      {props.horizontalMargin && (
        <div
          style={{
            //   width: "90%",
            marginTop: "40px",
            marginBottom: "40px",
            borderRadius: "25px",
            height: width > 900 ? "200px" : "150px",
            backgroundColor: "#031930D9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontsize: "28px",
              color: "whitesmoke",
              fontWeight: "bold",
            }}
          >
            Adds placeholder
          </p>
        </div>
      )}
      {!props.horizontalMargin && (
        <Container fluid={true}>
          <div
            style={{
              //   width: "90%",
              marginTop: "40px",
              marginBottom: "40px",
              borderRadius: "25px",
              height: width > 900 ? "200px" : "150px",

              backgroundColor: "#031930D9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontsize: "28px",
                color: "whitesmoke",
                fontWeight: "bold",
              }}
            >
              Adds placeholder
            </p>
          </div>
        </Container>
      )}
    </>
  );
};

export default AddsPlaceholder;
