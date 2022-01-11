import React from "react";
import {
  BlockDatesHeadingText,
  BlockedDatesWrapper,
  BookSelectedDates,
} from "./BlockedDates.style";
import DatePicker from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const BlockedDateText = () => {
  return <BlockDatesHeadingText> Block Dates</BlockDatesHeadingText>;
};

const BlockedDates = () => {
  return (
    <BlockedDatesWrapper>
      <BlockDatesHeadingText> Block Dates</BlockDatesHeadingText>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ fontWeight: "bold" }}>Section 1</h2>
          <p style={{ color: "#A5A5A5", fontSize: "16px" }}>
            Select any date or range of dates to be blocked
          </p>
        </div>
        <BookSelectedDates>Book Selected Dates</BookSelectedDates>
      </div>

      <Calendar numberOfMonths={2} range plugins={[<DatePanel />]} />
    </BlockedDatesWrapper>
  );
};

export default BlockedDates;
