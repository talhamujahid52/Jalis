import React, { useState } from "react";
import DateRangePickerBox from "../../../components/UI/DatePicker/ReactDates";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Stack from "@mui/material/Stack";
import { RowWrapper } from "./Pricing.style";
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
      <RowWrapper>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
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
                style={{
                  margin: "0px",
                  marginTop: "20px",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                Regular Pricing
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Weekdays 1000
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Thursdays 1210
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Fridays 1200
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Satuardays 1150
              </p>
            </div>

            <p
              style={{ margin: "0px", marginRight: "20px", marginLeft: "20px" }}
            >
              to
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <DesktopDatePicker
                label="Check out date"
                value={value}
                minDate={new Date("2017-01-01")}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <p
                style={{
                  margin: "0px",
                  marginTop: "20px",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                Eid Pricing
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Day1 1000
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Day2 1210
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Day3 1200
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Day4 1150
              </p>
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Day5 1150
              </p>{" "}
              <p
                style={{
                  margin: "0px",
                  marginTop: "5px",
                  fontSize: "14px",
                  color: "#707070",
                  fontWeight: "bold",
                }}
              >
                Day6 1150
              </p>
            </div>
          </div>
        </LocalizationProvider>
      </RowWrapper>
    </>
  );
};

export default Pricing;
