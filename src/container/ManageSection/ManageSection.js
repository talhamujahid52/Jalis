import React from "react";
import ManageSectionComponent from "../../components/ManageSection/ManageSection";
import AddIcon from "../../assets/AddIcon.svg";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import { ADD_SECTION_PAGE } from "settings/constant";
import staticAnimation from "../../assets/FileSearching.svg";
import {
  ManageSectionWrapper,
  DisplayManageSectionCenterWrapper,
  // TabNavigationWrapper,
  // TabNavigationComponentWrapper,
} from "./ManageSection.style";

const ManageSection = () => {
  const history = useHistory();
  // const [value, setValue] = React.useState("one");
  const [empty, setEmpty] = React.useState(true);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <DisplayManageSectionCenterWrapper>
      <ManageSectionWrapper>
        <div
          onClick={() => {
            history.push(ADD_SECTION_PAGE);
            // alert("This is ADD Section");
          }}
          style={{
            alignSelf: "end",
            paddingTop: "10px",
            paddingBottom: "10px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "20px",
            backgroundColor: "#FCE8DE",
            color: "#ED702D",
            marginBottom: "40px",
            display: "flex",
            // justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          Add New Section
          <div style={{ height: "12px", width: "12px", marginLeft: "20px" }}>
            <img
              alt=""
              style={{ height: "100%", width: "100%" }}
              src={AddIcon}
            ></img>
          </div>
        </div>
        {empty && (
          <>
            <ManageSectionComponent></ManageSectionComponent>
            <ManageSectionComponent></ManageSectionComponent>
            <ManageSectionComponent></ManageSectionComponent>
            <ManageSectionComponent></ManageSectionComponent>
          </>
        )}
        {!empty && (
          <div>
            <img
              alt=""
              src={staticAnimation}
              style={{ height: "100%", width: "100%" }}
            ></img>
            <p>You haven’t added any resorts. Add you first resort now!</p>
          </div>
        )}
      </ManageSectionWrapper>
    </DisplayManageSectionCenterWrapper>
  );
};

export default ManageSection;
