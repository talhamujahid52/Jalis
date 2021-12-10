import React from "react";
import ManageSectionComponent from "../../components/ManageSection/ManageSection";
import AddIcon from "../../assets/AddIcon.svg";
import { useHistory } from "react-router-dom";
import { ADD_SECTION_PAGE } from "settings/constant";
import {
  ManageSectionWrapper,
  DisplayManageSectionCenterWrapper,
} from "./ManageSection.style";

const ManageSection = () => {
  const history = useHistory();

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
            <img style={{ height: "100%", width: "100%" }} src={AddIcon}></img>
          </div>
        </div>
        <ManageSectionComponent></ManageSectionComponent>
        <ManageSectionComponent></ManageSectionComponent>
        <ManageSectionComponent></ManageSectionComponent>
        <ManageSectionComponent></ManageSectionComponent>
      </ManageSectionWrapper>
    </DisplayManageSectionCenterWrapper>
  );
};

export default ManageSection;
