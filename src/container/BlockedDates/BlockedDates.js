import React, { useEffect, useState } from "react";
import {
  BlockDatesHeadingText,
  BlockedDatesWrapper,
  BookSelectedDates,
} from "./BlockedDates.style";
// import DatePicker from "react-multi-date-picker";
// import DatePicker, { DateObject } from "react-multi-date-picker";
import { Calendar } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import useWindowSize from "../../library/hooks/useWindowSize";

const BlockedDates = () => {
  // const Dateobj = new DateObject();
  const { width } = useWindowSize();

  const [date, setDate] = useState();
  // const [weekPicker, setWeekPicker] = useState(false);
  // const [monthPicker, setMonthPicker] = useState(false);

  useEffect(() => {
    console.log("Current date is, ", date);
  }, [date]);

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
      {/* <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div
          style={{
            padding: "10px 20px",
            border: "1px solid #E3E3E3",
            borderRadius: "20px",

            color: weekPicker ? "white" : "#A5A5A5",
            backgroundColor: weekPicker ? " #ED702D" : "white",
          }}
          onClick={() => {
            setWeekPicker(!weekPicker);
            console.log(new DateObject().add(7, "days"));
            // setDate(new DateObject().add(7, "days"));
          }}
        >
          Select this Week
        </div>
        <div
          style={{
            padding: "10px 20px",
            border: "1px solid #E3E3E3",
            borderRadius: "20px",
            color: monthPicker ? "white" : "#A5A5A5",
            backgroundColor: monthPicker ? " #ED702D" : "white",
          }}
          onClick={() => {
            setMonthPicker(!monthPicker);
          }}
        >
          Select this month
        </div>
        <div
          style={{
            padding: "10px 20px",
            border: "1px solid #E3E3E3",
            borderRadius: "20px",
            color: "#A5A5A5",
            backgroundColor: "white",
          }}
        >
          Select next Week
        </div>
      </div> */}

      <Calendar
        value={date}
        onChange={setDate}
        minDate={new Date()}
        numberOfMonths={width > 700 ? 2 : 1}
        // weekPicker={weekPicker}
        // onlyMonthPicker={monthPicker}
        range
        plugins={[<DatePanel />]}
      />
    </BlockedDatesWrapper>
  );
};

export default BlockedDates;
