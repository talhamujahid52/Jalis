import React from "react";
import ManageResortComponent from "../../components/ManageResort/ManageResort";
import { ManageResortWrapper } from "./ManageResort.style";
const ManageResort = () => {
  return (
    <ManageResortWrapper>
      <ManageResortComponent></ManageResortComponent>
      <ManageResortComponent></ManageResortComponent>
      <ManageResortComponent></ManageResortComponent>
    </ManageResortWrapper>
  );
};

export default ManageResort;
