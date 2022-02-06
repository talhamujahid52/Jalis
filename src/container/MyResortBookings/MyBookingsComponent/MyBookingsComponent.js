import React, { useState } from "react";
import verifiedIcon from "../../../assets/Verified.svg";
import ResortImage from "../../../assets/addresort.jpg";
import Star from "../../../assets/Rate.svg";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import Button from "@mui/material/Button";
import downArrow from "../../../assets/Arrow-down.svg";
import {
  OutsideWrapper,
  MainWrapper,
  NameAndSectionWrapper,
  PriceWrapper,
  ResortName,
  ImageWrapper,
  ResortNameImagePriceWrapper,
  ResortPrice,
  MiddleDiv,
  InnerMiddleDiv,
  RateResortButton,
  CancelBookingButton,
  ExpandDivWrapper,
} from "./MyBookingsComponent.style";
import ExpandedComponent from "../ExpandedComponent/ExpandedComponent";
import useGiveRatingModal from "../../Summary/SummaryModal/GiveRatingModal";

// import { height } from "styled-system";
const MyBookingsComponent = () => {
  const [value, setValue] = React.useState(new Date());
  // const [rateResort, setRateResort] = useState(false);
  const [cancelBooking, setCancelBooking] = useState(false);
  const [expand, setExpand] = useState(false);
  const Modal = useGiveRatingModal();

  return (
    <OutsideWrapper>
      <Modal.Popup />

      <MainWrapper>
        <ResortNameImagePriceWrapper>
          <div style={{ display: "flex" }}>
            <ImageWrapper>
              <img alt="ResortImage" src={ResortImage} />
            </ImageWrapper>
            <NameAndSectionWrapper>
              <div>
                <ResortName>Rabbit Hill Inn</ResortName>
                <div
                  style={{ height: "30px", width: "24px", marginRight: "20px" }}
                >
                  <img
                    alt="verified"
                    src={verifiedIcon}
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
              </div>
              <p style={{ margin: "0px", fontSize: "16px", color: "#A5A5A5" }}>
                Section Name
              </p>
            </NameAndSectionWrapper>
          </div>
          <PriceWrapper>
            <ResortPrice>1000 ريال</ResortPrice>
          </PriceWrapper>
        </ResortNameImagePriceWrapper>
        <MiddleDiv>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <InnerMiddleDiv>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
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
                    marginRight: "15px",
                    marginLeft: "15px",
                    color: "black",
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
              <RateResortButton
                // onClick={() => {
                //   setRateResort(!rateResort);
                // }}
                // rateResort={rateResort}
                onClick={Modal.handleOpen}
              >
                <img alt="star" src={Star} />
                <p style={{ margin: "0px", marginLeft: "10px" }}>
                  Rate this Resort
                </p>
              </RateResortButton>
              <CancelBookingButton
                onClick={() => {
                  setCancelBooking(!cancelBooking);
                }}
                cancelBooking={cancelBooking}
              >
                {cancelBooking && (
                  <p style={{ margin: "0px" }}>Booking Cancelled</p>
                )}
                {!cancelBooking && (
                  <p style={{ margin: "0px" }}>Cancel Booking</p>
                )}
              </CancelBookingButton>
            </InnerMiddleDiv>
          </LocalizationProvider>
        </MiddleDiv>
      </MainWrapper>
      <ExpandDivWrapper
        onClick={() => {
          // alert("hi");
          setExpand(!expand);
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ margin: "0px", color: "white" }}> View Booking Details</p>
          <div
            // onClick={() => {
            //   // alert("hi");
            //   setExpand(!expand);
            // }}
            style={{ display: "flex", cursor: "pointer" }}
          >
            <p style={{ margin: "0px", color: "white", marginRight: "10px" }}>
              Expand
            </p>
            <div style={{ width: "13px", height: "13px", margin: "0px" }}>
              <img
                alt="DownArrow"
                style={{ height: "100%", width: "100%" }}
                src={downArrow}
              />
            </div>
          </div>
        </div>
        {expand && <ExpandedComponent></ExpandedComponent>}
      </ExpandDivWrapper>
    </OutsideWrapper>
  );
};

export default MyBookingsComponent;
