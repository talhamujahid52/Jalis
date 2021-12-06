import React from "react";
import ManageSectionComponent from "../../components/ManageSection/ManageSection";
import { ManageSectionWrapper } from "./ManageSection.style";

const ManageSection = () => {
  return (
    <ManageSectionWrapper>
      <div
        onClick={() => {
          alert("This is ADD Section");
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
        }}
      >
        Add New Section
      </div>
      <ManageSectionComponent></ManageSectionComponent>
      <ManageSectionComponent></ManageSectionComponent>
      <ManageSectionComponent></ManageSectionComponent>
      <ManageSectionComponent></ManageSectionComponent>
    </ManageSectionWrapper>
  );
};

export default ManageSection;
