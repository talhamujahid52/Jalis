import React from "react";
// import { useState } from "react";
import {
  RevenueWrapper,
  RevenueHeadingText,
  StatsWrapper,
  MonthlyAndYearlyRevenueWrapper,
  MonthlyAndYearlyRevenueWrapperRow,
  BookingRow,
  BookingRowHeadingText,
  // BookingRowText,
} from "./Revenue.style";
import BookingRowComponent from "./RevenueComponent";
import AddsPlaceholder from "container/Home/AddsPlaceholder/AddsPlaceholder";
const Revenue = () => {
  // const [paid, setPaid] = useState(false);
  return (
    <RevenueWrapper>
      <RevenueHeadingText>Revenue</RevenueHeadingText>
      <p style={{ color: "#A5A5A5" }}>Check your performance reports</p>
      <StatsWrapper>
        <MonthlyAndYearlyRevenueWrapperRow>
          <MonthlyAndYearlyRevenueWrapper>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  margin: "0px",
                  fontSize: "16px",
                  marginRight: "10px",
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                }}
              >
                ريال
              </p>
              <p
                style={{
                  margin: "0px",
                  fontSize: "40px",
                  fontWeight: "bolder",
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                }}
              >
                50
              </p>
            </div>
            <p style={{ margin: "0px", fontSize: "14px", fontWeight: "bold" }}>
              Monthly Revenue
            </p>
          </MonthlyAndYearlyRevenueWrapper>
          <MonthlyAndYearlyRevenueWrapper>
            <div style={{ display: "flex", alignItems: "center" }}>
              <p
                style={{
                  margin: "0px",
                  fontSize: "16px",
                  marginRight: "10px",
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                }}
              >
                ريال
              </p>
              <p
                style={{
                  margin: "0px",
                  fontSize: "40px",
                  fontWeight: "bolder",
                  fontFamily: "Noto Kufi Arabic, sans-serif",
                }}
              >
                1000
              </p>
            </div>
            <p style={{ margin: "0px", fontSize: "14px", fontWeight: "bold" }}>
              Annual Revenue
            </p>
          </MonthlyAndYearlyRevenueWrapper>
        </MonthlyAndYearlyRevenueWrapperRow>

        <BookingRow style={{ borderBottom: "4px solid #F8F9FA" }}>
          <div
            style={{
              height: "80px",
              width: "5%",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
              backgroundColor: "white",
            }}
          ></div>
          <div
            style={{
              height: "80px",
              width: "95%",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
              backgroundColor: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <BookingRowHeadingText>Booking ID</BookingRowHeadingText>
            <BookingRowHeadingText>Transaction ID</BookingRowHeadingText>
            <BookingRowHeadingText>Paid</BookingRowHeadingText>
            <BookingRowHeadingText>Remaining</BookingRowHeadingText>
            <BookingRowHeadingText>Booking Date</BookingRowHeadingText>
          </div>
        </BookingRow>
        <BookingRowComponent></BookingRowComponent>
        <BookingRowComponent></BookingRowComponent>
        <BookingRowComponent paid={true}></BookingRowComponent>
        <BookingRowComponent></BookingRowComponent>
        <BookingRowComponent></BookingRowComponent>
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              margin: "0px",
              fontSize: "18px",
              color: "#ED702D",
              textDecoration: "underline",
            }}
          >
            LOAD MORE
          </p>
        </div>
      </StatsWrapper>
      <AddsPlaceholder horizontalMargin={true}></AddsPlaceholder>
    </RevenueWrapper>
  );
};

export default Revenue;
