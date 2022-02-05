import React from "react";
import {
  ExpandedComponentWrapper,
  BookingAndTransactionIDWrapper,
  BookingAndTransactionID,
  DateAndTimeHeading,
  LocationWrapper,
  ImageWrapper,
  LocationName,
  BookingNotes,
  CalculationNameAndAmount,
} from "./ExpandedComponent.style";
import ResortImage from "../../../assets/addresort.jpg";
import locationIcon from "../../../assets/location-pin.svg";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import googlePay from "../../../assets/GPay-icon.svg";
import useGiveRatingModal from "../../Summary/SummaryModal/GiveRatingModal";
import BillingSummaryImage from "../../../assets/BillingSummaryIcon.svg";

const ExpandedComponent = () => {
  const Billing = [
    { name: "Booking Amount", price: "ريال 2210" },
    { name: "Additional Services", price: "ريال 20" },
    { name: "Total Amount", price: "ريال 2410" },
    { name: "Deposit Amount", price: "ريال 1105" },
    { name: "Remaining Amount", price: "ريال 1105" },
  ];
  const [value, setValue] = React.useState(new Date());
  const Modal = useGiveRatingModal();

  return (
    <ExpandedComponentWrapper>
      {/* IDs DIV */}
      <Modal.Popup />

      <BookingAndTransactionIDWrapper>
        <BookingAndTransactionID
          style={{ marginRight: "20px" }}
          color="#5DA755"
          background="#DFF2DD"
        >
          Booking ID: A814
        </BookingAndTransactionID>
        <BookingAndTransactionID color="#8B8F9F" background="#F3F5F9">
          Trans. ID: A814
        </BookingAndTransactionID>
      </BookingAndTransactionIDWrapper>
      {/* Date And Time Heading */}
      <DateAndTimeHeading>
        <p style={{ marginRight: "20px" }}>Date & Time of Booking</p>
        <p>07/10/2020 07:30 pm</p>
      </DateAndTimeHeading>
      {/* Location Wrapper */}
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
            <img src={locationIcon} style={{ height: "100%", width: "100%" }} />
          </div>
          <LocationName>8 Pennsylvania Avenue, Washington, USA</LocationName>
        </div>
      </LocationWrapper>
      {/* Date And Time Picker */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
            borderBottom: "2px solid #d5d5d5 ",
          }}
        >
          <DesktopDatePicker
            readOnly
            label="Check in date"
            value={value}
            minDate={new Date("2017-01-01")}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => {
              return <TextField {...params} />;
            }}
          />
          <p
            style={{
              margin: "0px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            to
          </p>
          <DesktopDatePicker
            readOnly
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
      {/* Booking Notes */}
      <BookingNotes>
        <p style={{ margin: "0px", fontSize: "20px", fontWeight: "bold" }}>
          Booking Notes
        </p>
        <p style={{ margin: "0px", fontSize: "16px" }}>
          It was my first visit to this property had heard lot of praises turned
          out to be worth it.
        </p>
      </BookingNotes>
      {/* Billing Calculation */}
      <div style={{ display: "flex", marginTop: "10px" }}>
        <div style={{ width: "30px", height: "30px", marginRight: "10px" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={BillingSummaryImage}
          ></img>
        </div>
        <p
          style={{
            margin: "0px",
            color: "#ED702D",
            fontSize: "20px",
            fontWeight: "bold",
            // marginTop: "10px",
          }}
        >
          Billing Payment Summary
        </p>
      </div>
      {Billing.map((item, idx) => {
        return (
          <div
            key={idx}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <CalculationNameAndAmount>{item.name}</CalculationNameAndAmount>
            <CalculationNameAndAmount>{item.price}</CalculationNameAndAmount>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          borderBottom: "2px dashed #F8F9FA ",
          paddingBottom: "30px",
        }}
      >
        <CalculationNameAndAmount>Payment method</CalculationNameAndAmount>
        <div
          style={{
            width: "110px",
            height: "45px",
            padding: "0px",
            margin: "0px",
          }}
        >
          <img src={googlePay} />
        </div>
      </div>
      {/* <div
        style={{
          color: "#64AA5D",
          fontSize: "16px",
          justifyContent: "center",
          display: "flex",
          marginTop: "20px",
          cursor: "pointer",
        }}
        onClick={Modal.handleOpen}
      >
        Get a copy of your contract
      </div> */}
    </ExpandedComponentWrapper>
  );
};

export default ExpandedComponent;
