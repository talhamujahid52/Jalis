import React from "react";
import MyBookingsComponent from "./MyBookingsComponent/MyBookingsComponent";
import mybooking from "../../assets/MyBooking.svg";
import {
  MyBookingsContainerWrapper,
  TopDivWrapper,
  ImageWrapper,
  TextWrapper,
  ImageAndTextWrapper,
  SearchBarWrapper,
  SearchInput,
  DividerWrapper,
} from "./MyBookings.style";
const MyBookings = () => {
  return (
    <MyBookingsContainerWrapper>
      <TopDivWrapper>
        <ImageAndTextWrapper>
          <ImageWrapper>
            <img src={mybooking} />
          </ImageWrapper>
          <TextWrapper>My Bookings</TextWrapper>
        </ImageAndTextWrapper>

        <SearchBarWrapper>
          <SearchInput placeholder="Search for your Booked Resorts..."></SearchInput>
        </SearchBarWrapper>
      </TopDivWrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{ height: "2px", width: "40%", backgroundColor: "#7070703D" }}
        ></div>
        <DividerWrapper> Your Booked Resort</DividerWrapper>
        <div
          style={{ height: "2px", width: "40%", backgroundColor: "#7070703D" }}
        ></div>
      </div>

      <MyBookingsComponent></MyBookingsComponent>
    </MyBookingsContainerWrapper>
  );
};

export default MyBookings;
