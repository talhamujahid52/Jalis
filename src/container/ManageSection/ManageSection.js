import React from "react";
import ManageSectionComponent from "../../components/ManageSection/ManageSection";
import { ManageSectionWrapper } from "./ManageSection.style";

const ManageSection = () => {
  return (
    <ManageSectionWrapper>
      <ManageSectionComponent></ManageSectionComponent>
      <ManageSectionComponent></ManageSectionComponent>
      <ManageSectionComponent></ManageSectionComponent>
      <ManageSectionComponent></ManageSectionComponent>
    </ManageSectionWrapper>
  );
};

export default ManageSection;
