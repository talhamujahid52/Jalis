import React from "react";
import { useState } from "react";
import { BookingRow, BookingRowText } from "./Revenue.style";
const RevenueComponent = (props) => {
  return (
    <BookingRow style={{ marginTop: "20px" }}>
      <div
        style={{
          height: "80px",
          width: "7%",
          borderTopLeftRadius: "15px",
          borderBottomLeftRadius: "15px",
          backgroundColor: !props.paid ? "#ED702D" : "#52E199",
        }}
      ></div>
      <div
        style={{
          height: "80px",
          width: "93%",
          borderTopRightRadius: "15px",
          borderBottomRightRadius: "15px",
          backgroundColor: "#F8F9FA",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <BookingRowText>A123456</BookingRowText>
        <BookingRowText>B314561</BookingRowText>
        <BookingRowText style={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}>
          0 ريال
        </BookingRowText>
        <BookingRowText style={{ fontFamily: "Noto Kufi Arabic, sans-serif" }}>
          200 ريال
        </BookingRowText>
        <BookingRowText>07/10/2020</BookingRowText>
      </div>
    </BookingRow>
  );
};

export default RevenueComponent;
