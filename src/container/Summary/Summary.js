import React, { useState } from "react";
import {
  MainSummaryWrapper,
  DetailsWrapper,
  ResortNameImagePriceWrapper,
  ImageWrapper,
  ResortName,
  // LocationWrapper,
  // LocationName,
  NameSectionAndPriceWrapper,
  FinalCalculationNameAndAmount,
  PaymentWrapper,
  PaymentMethodImage,
  ProceedButton,
  CancelButton,
} from "./Summary.style";
import ResortImage from "../../assets/addresort.jpg";
import verifiedIcon from "../../assets/Verified.svg";
// import locationIcon from "../../assets/location-pin.svg";
import VisaMcIcon from "../../assets/visaMC-icon.svg";
import madaIcon from "../../assets/mada-icon.svg";
import googlePay from "../../assets/GPay-icon.svg";
import doneAllIcon from "../../assets/DoneAll.svg";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import useSummaryModal from "./SummaryModal/SummaryModal";
import useWindowSize from "../../library/hooks/useWindowSize";
import BillingSummaryImage from "../../assets/BillingSummaryIcon.svg";
import { useHistory } from "react-router-dom";
const Summary = (props) => {
  const { width } = useWindowSize();
  const [value, setValue] = React.useState(new Date());
  const Modal = useSummaryModal();
  const [visa, setVisa] = useState();
  const [mada, setMada] = useState();
  const [google, setGoogle] = useState();
  const [paymentMethod, setPaymentMethod] = useState();
  const history = useHistory();
  return (
    <MainSummaryWrapper>
      <Modal.Popup paymentMethod={paymentMethod} />
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
                alt=""
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
                  style={{ height: "24px", width: "18px", marginTop: "5px" }}
                >
                  <img
                    alt=""
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
        {/* <LocationWrapper>
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
        </LocationWrapper> */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div
            style={{
              display: "flex",
              flexDirection: width > 800 ? "row" : "column",
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
              value={props.location.state.checkInDate}
              disabled
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
                marginTop: width > 800 ? "0px" : "5px",
                // color: "white",
              }}
            >
              to
            </p>
            <DesktopDatePicker
              label="Check out date"
              value={props.location.state.checkOutDate}
              disabled
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
          {/* <div
            style={{
              // backgroundColor: "#F8F9FA",
              borderRadius: "20px",
              padding: "10px",
            }}
          > */}
          {/* <p style={{ margin: "0px", fontSize: "16px" }}>
              It was my first visit to this property had heard lot of praises
              turned out to be worth it.
            </p> */}
          <textarea
            style={{
              borderRadius: "5px",
              width: "100%",
              height: "100px",
              padding: "20px",
              // border: "0px",
            }}
          ></textarea>
          {/* </div> */}
        </div>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <div style={{ width: "30px", height: "30px", marginRight: "10px" }}>
            <img
              alt=""
              style={{ width: "100%", height: "100%" }}
              src={BillingSummaryImage}
            ></img>
          </div>
          <p
            style={{
              margin: "0px",
              color: "#ED702D",
              fontSize: width > 800 ? "20px" : "13px",
              fontWeight: "bold",
            }}
          >
            Billing Summary
          </p>
        </div>

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
          <FinalCalculationNameAndAmount style={{ color: "#ED702D" }}>
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <FinalCalculationNameAndAmount>
            Remaining
          </FinalCalculationNameAndAmount>

          <FinalCalculationNameAndAmount>
            ريال 106
          </FinalCalculationNameAndAmount>
        </div>
      </DetailsWrapper>
      <PaymentWrapper>
        <p
          style={{
            margin: "0px",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: width > 900 ? "28px" : "22px",
          }}
        >
          Choose your Payment Method
        </p>
        <p
          style={{
            color: "#A5A5A5",
            fontSize: "16px",
            margin: "0px",
            marginTop: width > 900 ? "25px" : "10px",
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
          <PaymentMethodImage
            style={{
              border: visa ? "1px solid #ED702D" : "0px ",
              borderRadius: "8px",
            }}
            onClick={() => {
              setVisa(!visa);
              setGoogle(false);
              setMada(false);
              setPaymentMethod(VisaMcIcon);
            }}
          >
            <img
              alt=""
              style={{ color: "#707070", height: "100%", width: "100%" }}
              src={VisaMcIcon}
            />
          </PaymentMethodImage>
          <PaymentMethodImage
            style={{
              border: mada ? "1px solid #ED702D" : "0px ",
              borderRadius: "8px",
            }}
            onClick={() => {
              setVisa(false);
              setGoogle(false);
              setMada(!mada);
              setPaymentMethod(madaIcon);
            }}
          >
            <img
              alt=""
              style={{ color: "#707070", height: "100%", width: "100%" }}
              src={madaIcon}
            />
          </PaymentMethodImage>
          <PaymentMethodImage
            style={{
              border: google ? "1px solid #ED702D" : "0px ",
              borderRadius: "8px",
            }}
            onClick={() => {
              setVisa(false);
              setGoogle(!google);
              setMada(false);
              setPaymentMethod(googlePay);
            }}
          >
            <img
              alt=""
              style={{ color: "#707070", height: "100%", width: "100%" }}
              src={googlePay}
            />
          </PaymentMethodImage>
        </div>
      </PaymentWrapper>
      <p
        style={{
          margin: "0px",
          marginTop: "50px",
          marginBottom: "30px",
          fontSize: "18px",
          textAlign: "center",
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
        <ProceedButton onClick={Modal.handleOpen}>
          <div style={{ width: "30px", height: "27px", marginRight: "10px" }}>
            <img
              alt=""
              style={{ width: "100%", height: "100%" }}
              src={doneAllIcon}
            ></img>
          </div>
          Proceed
        </ProceedButton>
        <CancelButton
          onClick={() => {
            history.goBack();
          }}
        >
          Cancel
        </CancelButton>
      </div>
    </MainSummaryWrapper>
  );
};

export default Summary;
