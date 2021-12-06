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
      <div
        onClick={() => {
          alert("This is Create New Resort");
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
        Create New Resort
      </div>
      <ManageResortComponent></ManageResortComponent>
      <ManageResortComponent></ManageResortComponent>
      <ManageResortComponent></ManageResortComponent>
    </ManageResortWrapper>
  );
};

export default ManageResort;
