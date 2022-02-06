import React from "react";
import ManageServicesComponent from "../../components/ManageServices/ManageServices";
import { useHistory } from "react-router-dom";
import AddIcon from "../../assets/AddIcon.svg";
import { AddService } from "settings/constant";
import { ManageResortWrapper } from "./ManageServices.style";
import staticAnimation from "../../assets/FileSearching.svg";
const ManageResort = (props) => {
  console.log("Props are ,", props);
  const changeSection = props.changeSections;
  const history = useHistory();
  const [value, setValue] = React.useState(false);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <ManageResortWrapper>
      <div
        onClick={() => {
          history.push(AddService);
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
        Create New Service{" "}
        <div style={{ height: "12px", width: "12px", marginLeft: "20px" }}>
          <img
            alt=""
            style={{ height: "100%", width: "100%" }}
            src={AddIcon}
          ></img>
        </div>
      </div>
      {value && (
        <div>
          <img
            alt=""
            src={staticAnimation}
            style={{ height: "100%", width: "100%" }}
          ></img>
          <p>You haven’t added any resorts. Add you first resort now!</p>
        </div>
      )}
      {!value && (
        <>
          <ManageServicesComponent
            changeSection={changeSection}
          ></ManageServicesComponent>
          <ManageServicesComponent
            changeSection={changeSection}
          ></ManageServicesComponent>
          <ManageServicesComponent
            changeSection={changeSection}
          ></ManageServicesComponent>
        </>
      )}
    </ManageResortWrapper>
  );
};

export default ManageResort;
