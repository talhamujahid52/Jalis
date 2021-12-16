import React from "react";
import ManageResortComponent from "../../components/ManageResort/ManageResort";
import { useHistory } from "react-router-dom";
import AddIcon from "../../assets/AddIcon.svg";
import { ADD_RESORT_PAGE } from "settings/constant";
import { ManageResortWrapper } from "./ManageResort.style";
import staticAnimation from "../../assets/FileSearching.svg";
const ManageResort = (props) => {
  console.log("Props are ,", props);
  const changeSection = props.changeSections;
  const history = useHistory();
  const [value, setValue] = React.useState(false);
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
      {value && (
        <div>
          <img
            src={staticAnimation}
            style={{ height: "100%", width: "100%" }}
          ></img>
          <p>You haven’t added any resorts. Add you first resort now!</p>
        </div>
      )}
      {!value && (
        <>
          <ManageResortComponent
            changeSection={changeSection}
          ></ManageResortComponent>
          <ManageResortComponent
            changeSection={changeSection}
          ></ManageResortComponent>
          <ManageResortComponent
            changeSection={changeSection}
          ></ManageResortComponent>
        </>
      )}
    </ManageResortWrapper>
  );
};

export default ManageResort;
