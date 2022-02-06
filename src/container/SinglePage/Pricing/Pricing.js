import React, { useEffect } from "react";
// import DateRangePickerBox from "../../../components/UI/DatePicker/ReactDates";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
// import DatePicker from "@mui/lab/DatePicker";
// import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import Stack from "@mui/material/Stack";
import { RowWrapper } from "./Pricing.style";
import useWindowSize from "../../../library/hooks/useWindowSize";

// const calendarItem = {
//   separator: "-",
//   format: "MM-DD-YYYY",
//   locale: "en",
// };
const Pricing = (props) => {
  const [checkInDate, setCheckInDate] = React.useState(new Date());
  const [checkOutDate, setCheckOutDate] = React.useState(new Date());
  const { width } = useWindowSize();

  // const [searchDate, setSearchDate] = useState({
  //   setStartDate: null,
  //   setEndDate: null,
  // });
  useEffect(() => {
    // console.log("props in Pricing is ", props);
  }, []);
  return (
    <>
      <h2 style={{ fontWeight: "bold" }}> Pricing</h2>
      <RowWrapper>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "white",
              padding: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: width > 800 ? "row" : "column",
              }}
            >
              <DesktopDatePicker
                label="Check in date"
                value={checkInDate}
                minDate={new Date()}
                onChange={(newValue) => {
                  setCheckInDate(newValue);
                  props.setCheckInDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              <p
                style={{
                  // margin: "0px",
                  // marginRight: "20px",
                  // marginLeft: "20px",
                  margin: "20px 20px",
                }}
              >
                to
              </p>
              <DesktopDatePicker
                label="Check out date"
                value={checkOutDate}
                minDate={new Date()}
                onChange={(newValue) => {
                  setCheckOutDate(newValue);
                  props.setCheckOutDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <div style={{ display: "flex", gap: "50px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",

                  // border: "1px solid red",
                }}
              >
                {/* <DesktopDatePicker
                label="Check in date"
                value={checkInDate}
                minDate={new Date()}
                onChange={(newValue) => {
                  setCheckInDate(newValue);
                  props.setCheckInDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              /> */}
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
                style={{
                  margin: "0px",
                  marginRight: "20px",
                  marginLeft: "50px",
                }}
              ></p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  // width: "50%",
                  // border: "1px solid red",
                }}
              >
                {/* <DesktopDatePicker
                label="Check out date"
                value={checkOutDate}
                minDate={new Date()}
                onChange={(newValue) => {
                  setCheckOutDate(newValue);
                  props.setCheckOutDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              /> */}
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
          </div>
        </LocalizationProvider>
      </RowWrapper>
    </>
  );
};

export default Pricing;
