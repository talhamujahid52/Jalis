import React from "react";
import {
  MainSummaryWrapper,
  DetailsWrapper,
  ResortNameImagePriceWrapper,
  ImageWrapper,
  ResortName,
  LocationWrapper,
  LocationName,
  NameSectionAndPriceWrapper,
  FinalCalculationNameAndAmount,
  PaymentWrapper,
  ProceedButton,
  CancelButton,
} from "./Summary.style";
import ResortImage from "../../assets/addresort.jpg";
import verifiedIcon from "../../assets/Verified.svg";
import locationIcon from "../../assets/location-pin.svg";
import VisaMcIcon from "../../assets/visaMC-icon.svg";
import madaIcon from "../../assets/mada-icon.svg";
import googlePay from "../../assets/GPay-icon.svg";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import useSummaryModal from "./SummaryModal/SummaryModal";
const Summary = () => {
  const [value, setValue] = React.useState(new Date());
  const Modal = useSummaryModal();
  return (
    <MainSummaryWrapper>
      <Modal.Popup />
      <h1 style={{ margin: "0px", fontWeight: "bold" }}> Summary</h1>
      <p style={{ color: "#A5A5A5", margin: "0px", fontSize: "16px" }}>
        Your Resort Booking Summary
      </p>
      <hr
        style={{
          backgroundColor: "#A5A5A5",
          height: "1px",
          width: "100%",
          marginBottom: "20px",
        }}
      ></hr>
      <DetailsWrapper>
        <ResortNameImagePriceWrapper>
          <div style={{ display: "flex" }}>
            <ImageWrapper>
              <img
                src={ResortImage}
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "20px",
                }}
              />
            </ImageWrapper>
            <NameSectionAndPriceWrapper>
              <div style={{ display: "flex" }}>
                <ResortName>Rabbit Hill Inn</ResortName>
                <div
                  style={{ height: "30px", width: "24px", marginRight: "20px" }}
                >
                  <img
                    src={verifiedIcon}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <p style={{ margin: "0px", fontSize: "16px", color: "#A5A5A5" }}>
                Section Name
              </p>
            </NameSectionAndPriceWrapper>
          </div>
          <NameSectionAndPriceWrapper>
            <p
              style={{
                margin: "0px",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#ED702D",
                fontFamily: "Noto Kufi Arabic, sans-serif",
              }}
            >
              1000 ريال
            </p>
          </NameSectionAndPriceWrapper>
        </ResortNameImagePriceWrapper>
        <LocationWrapper>
          <ImageWrapper>
            <img
              src={ResortImage}
              style={{
                height: "100%",
                width: "100%",
                borderRadius: "20px",
              }}
            />
          </ImageWrapper>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              //   marginLeft: "30px",
            }}
          >
            <div style={{ height: "27px", width: "19px", marginRight: "10px" }}>
              <img
                src={locationIcon}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <LocationName>8 Pennsylvania Avenue, Washington, USA</LocationName>
          </div>
        </LocationWrapper>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              //   borderRadius: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
              borderBottom: "1px solid #707070 ",
              //   backgroundColor: "#2F3547",
              // padding: "40px",
            }}
          >
            <DesktopDatePicker
              label="Check in date"
              value={value}
              minDate={new Date("2017-01-01")}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => {
                return <TextField {...params} />;
              }}
              // color="white"
            />
            <p
              style={{
                margin: "0px",
                marginRight: "20px",
                marginLeft: "20px",
                // color: "white",
              }}
            >
              to
            </p>
            <DesktopDatePicker
              label="Check out date"
              value={value}
              minDate={new Date("2017-01-01")}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => {
                return <TextField {...params} />;
              }}
            />
          </div>
        </LocalizationProvider>
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid #707070 ",
          }}
        >
          <div
            style={{
              backgroundColor: "#F8F9FA",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <p style={{ margin: "0px", fontSize: "16px" }}>
              It was my first visit to this property had heard lot of praises
              turned out to be worth it.
            </p>
          </div>
        </div>
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid #707070 ",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#F8F9FA",
              borderRadius: "20px",
              padding: "20px",
            }}
          >
            <p style={{ margin: "0px", fontSize: "16px", fontWeight: "bold" }}>
              Provide ID number
            </p>
            <div
              style={{
                backgroundColor: "white",
                paddingRight: "10px",
                paddingLeft: "10px",
                color: "#A5A5A5",
                borderRadius: "5px",
              }}
            >
              123456789
            </div>
          </div>
        </div>
        <p
          style={{
            color: "#A5A5A5",
            margin: "0px",
            fontSize: "14px",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "2px dashed #d5d5d5",
          }}
        >
          This information is needed to be added to the contract and it will not
          be saved
        </p>
        <p
          style={{
            margin: "0px",
            color: "#ED702D",
            fontSize: "20px",
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          Billing Summary
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <FinalCalculationNameAndAmount>
            Booking amount
          </FinalCalculationNameAndAmount>
          <FinalCalculationNameAndAmount>
            ريال 3000
          </FinalCalculationNameAndAmount>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <FinalCalculationNameAndAmount>
            Additional Services
          </FinalCalculationNameAndAmount>

          <FinalCalculationNameAndAmount>ريال 30</FinalCalculationNameAndAmount>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <FinalCalculationNameAndAmount style={{ color: "black" }}>
            Total amount
          </FinalCalculationNameAndAmount>
          <FinalCalculationNameAndAmount style={{ color: "black" }}>
            ريال 3020
          </FinalCalculationNameAndAmount>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <FinalCalculationNameAndAmount>
            Deposit amount
          </FinalCalculationNameAndAmount>

          <FinalCalculationNameAndAmount>
            ريال 906
          </FinalCalculationNameAndAmount>
        </div>
      </DetailsWrapper>
      <PaymentWrapper>
        <h1 style={{ margin: "0px", fontWeight: "bold", textAlign: "center" }}>
          Choose your Payment Method
        </h1>
        <p
          style={{
            color: "#A5A5A5",
            fontSize: "16px",
            margin: "0px",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          All transactions are secured & encrypted
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          <div style={{ height: "60px", width: "100px" }}>
            <img
              style={{ color: "#707070", height: "100%", width: "100%" }}
              src={VisaMcIcon}
            />
          </div>
          <div style={{ height: "60px", width: "100px" }}>
            <img
              style={{ color: "#707070", height: "100%", width: "100%" }}
              src={madaIcon}
            />
          </div>
          <div style={{ height: "60px", width: "100px" }}>
            <img
              style={{ color: "#707070", height: "100%", width: "100%" }}
              src={googlePay}
            />
          </div>
        </div>
      </PaymentWrapper>
      <p
        style={{
          margin: "0px",
          marginTop: "70px",
          marginBottom: "30px",
          fontSize: "18px",
        }}
      >
        By proceeding, I confirm that I read and agree to the terms and
        conditions.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <ProceedButton onClick={Modal.handleOpen}>Proceed</ProceedButton>
        <CancelButton>Cancel</CancelButton>
      </div>
    </MainSummaryWrapper>
  );
};

export default Summary;
