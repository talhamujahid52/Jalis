import React from "react";
import ManageResortComponent from "../../components/ManageResort/ManageResort";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ManageResortWrapper } from "./ManageResort.style";
const ManageResort = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ManageResortWrapper>
      <ManageResortComponent></ManageResortComponent>
      <ManageResortComponent></ManageResortComponent>
      <ManageResortComponent></ManageResortComponent>
    </ManageResortWrapper>
  );
};

export default ManageResort;
