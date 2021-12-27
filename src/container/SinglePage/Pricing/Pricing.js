import React, { useState } from "react";
import DateRangePickerBox from "../../../components/UI/DatePicker/ReactDates";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";
// const calendarItem = {
//   separator: "-",
//   format: "MM-DD-YYYY",
//   locale: "en",
// };
const Pricing = () => {
  const [value, setValue] = React.useState(new Date());
  const [searchDate, setSearchDate] = useState({
    setStartDate: null,
    setEndDate: null,
  });
  return (
    <>
      <h2 style={{ fontWeight: "bold" }}> Pricing</h2>
      <div
        style={{
          background: "#F8F9FA",
          borderRadius: "20px",
          // height: "200px",
          padding: "20px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "white",
              padding: "40px",
            }}
          >
            <DesktopDatePicker
              label="Check in date"
              value={value}
              minDate={new Date("2017-01-01")}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <p
              style={{ margin: "0px", marginRight: "20px", marginLeft: "20px" }}
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
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
        </LocalizationProvider>
      </div>
    </>
  );
};

export default Pricing;
