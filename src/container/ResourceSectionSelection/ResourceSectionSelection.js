import React, { useEffect } from "react";
import SectionComponent from "./SectionComponent/SectionComponent";
import {
  OuterWrapper,
  DateSelectionWwrapper,
  NextButton,
} from "./ResourceSectionSelection.style";
// import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import { useHistory } from "react-router-dom";
import { Summary_Detail } from "settings/constant";
import nextArrow from "../../assets/Path208.svg";

const ResourceSectionSelection = (props) => {
  const checkInDate = props.location.state.checkInDate;
  const checkOutDate = props.location.state.checkOutDate;

  const history = useHistory();
  const [value, setValue] = React.useState(new Date());
  const color = "#ffffff";
  // const [additionalFeatures, setAdditionalFeatures] = useState([
  //   { price: "ريال10", name: "early Checkin", selected: false },
  //   { price: "ريال10", name: "Heater", selected: false },
  //   { price: "ريال10", name: "Full bathroom", selected: false },
  //   { price: "ريال10", name: "Air conditioning", selected: false },
  //   { price: "ريال10", name: "TV", selected: false },
  // ]);
  useEffect(() => {
    // console.log(
    //   "checkInDate in Resource Section Selection",
    //   props.location.state.checkInDate
    // );
    // console.log(
    //   "checkOutDate in Resource Section Selection",
    //   props.location.state.checkOutDate
    // );
  }, []);
  return (
    <OuterWrapper>
      <h1 style={{ margin: "0px", fontWeight: "bold" }}>Section</h1>
      <p
        style={{
          margin: "0px",
          color: "#A5A5A5",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        Please fill below information to Book Resort.
      </p>
      <SectionComponent></SectionComponent>
      <SectionComponent></SectionComponent>
      <SectionComponent></SectionComponent>
      {/* <div style={{ backgroundColor: "" }}>
        <p
          style={{
            margin: "0px",
            marginBottom: "10px",
            marginTop: "20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          You can Add Additional Services
        </p>
        {additionalFeatures.map((item, index) => {
          return (
            <Chip
              key={index}
              onClick={() => {
                let newArray = [...additionalFeatures];
                console.log("new Array is", newArray);
                newArray[index].selected = !newArray[index].selected;
                console.log("new Array is", newArray);
                setAdditionalFeatures(newArray);
              }}
              label={item.price + "  " + item.name}
              sx={{
                paddingLeft: "5px",
                marginBottom: "10px",
                marginRight: "10px",
                backgroundColor: item.selected ? "#ED702D28" : "white",
                color: item.selected ? "#ED702D" : "#ADADAD",
                borderWidth: item.selected ? "0px" : "2px",
                fontFamily: "Noto Kufi Arabic, sans-serif",

                // borderWidth: "2px",
                borderStyle: "solid",
                borderColor: item.selected ? "#ED702D28" : "#E3E3E3",
              }}
            />
          );
        })}
      </div> */}
      <div
        style={{
          marginTop: "20px",
          padding: "35px",
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#2F3547",
          width: "85%",
          borderRadius: "20px",
        }}
      >
        <p
          style={{
            margin: "0px",
            fontSize: "14px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "white",
          }}
        >
          You've selected 3 Days for Booking
        </p>
        <DateSelectionWwrapper>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div
              style={{
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                backgroundColor: "#2F3547",
                // padding: "40px",
              }}
            >
              <div>
                <p style={{ color: "white", margin: "0px" }}>Check in Date</p>
                <DesktopDatePicker
                  InputProps={{
                    style: {
                      borderColor: "white",
                      borderStyle: "solid",
                      // borderWidth: borderWidths[1],
                    },
                  }}
                  // label="Check in date"
                  // disabled
                  readOnly
                  value={props.location.state.checkInDate}
                  minDate={new Date("2017-01-01")}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  border="1px solid white"
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...params}
                        sx={{
                          svg: { color },
                          input: { color },
                          label: { color },
                          backgroundColor: { color },
                        }}
                      />
                    );
                  }}
                  // color="white"
                />
              </div>

              <p
                style={{
                  margin: "0px",
                  marginRight: "20px",
                  marginLeft: "20px",
                  color: "white",
                }}
              >
                to
              </p>
              <div>
                <p style={{ color: "white", margin: "0px" }}>Check out Date</p>
                <DesktopDatePicker
                  // label="Check out date"
                  value={props.location.state.checkOutDate}
                  // disabled
                  InputProps={{
                    style: {
                      borderColor: "white",
                      borderStyle: "solid",
                      // borderWidth: borderWidths[1],
                    },
                  }}
                  readOnly
                  // minDate={new Date("2017-01-01")}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => {
                    return (
                      <TextField
                        {...params}
                        sx={{
                          svg: { color },
                          input: { color },
                          label: { color },
                          backgroundColor: { color },
                        }}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </LocalizationProvider>
          <NextButton
            onClick={() => {
              history.push(Summary_Detail, { checkInDate, checkOutDate });
            }}
          >
            <p style={{ margin: "0px" }}>Next</p>
            <div style={{ height: "30px", width: "30px" }}>
              <img
                alt=""
                style={{ width: "100%", height: "100%" }}
                src={nextArrow}
              ></img>
            </div>
          </NextButton>
        </DateSelectionWwrapper>
      </div>
    </OuterWrapper>
  );
};

export default ResourceSectionSelection;
