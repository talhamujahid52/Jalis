import React from "react";
import ManageResortComponent from "../../components/ManageResort/ManageResort";
import { useHistory } from "react-router-dom";
import AddIcon from "../../assets/AddIcon.svg";
import { ADD_RESORT_PAGE } from "settings/constant";
import { ManageResortWrapper } from "./ManageResort.style";
const ManageResort = () => {
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ManageResortWrapper>
      <div
        onClick={() => {
          history.push(ADD_RESORT_PAGE);
          // alert("This is Create New Resort");
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
        }}
      >
        Create New Resort{" "}
        <div style={{ height: "12px", width: "12px", marginLeft: "20px" }}>
          <img style={{ height: "100%", width: "100%" }} src={AddIcon}></img>
        </div>
      </div>

      <ManageResortComponent></ManageResortComponent>
      <ManageResortComponent></ManageResortComponent>
      <ManageResortComponent></ManageResortComponent>
    </ManageResortWrapper>
  );
};

export default ManageResort;
