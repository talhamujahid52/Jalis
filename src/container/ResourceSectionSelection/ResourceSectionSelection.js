import React, { useState } from "react";
import SectionComponent from "./SectionComponent/SectionComponent";
import { OuterWrapper } from "./ResourceSectionSelection.style";
import Chip from "@mui/material/Chip";

const ResourceSectionSelection = () => {
  const [additionalFeatures, setAdditionalFeatures] = useState([
    { price: "ريال10", name: "early Checkin", selected: false },
    { price: "ريال10", name: "Heater", selected: false },
    { price: "ريال10", name: "Full bathroom", selected: false },
    { price: "ريال10", name: "Air conditioning", selected: false },
    { price: "ريال10", name: "TV", selected: false },
  ]);
  return (
    <OuterWrapper>
      <h1 style={{ margin: "0px", fontWeight: "bold" }}>Section</h1>
      <p
        style={{
          margin: "0px",
          color: "#A5A5A5",
          fontSize: "16px",
          marginBottom: "20px",
        }}
      >
        Please fill below information to Book Resort.
      </p>
      <SectionComponent></SectionComponent>
      <SectionComponent></SectionComponent>
      <SectionComponent></SectionComponent>
      <div style={{ backgroundColor: "" }}>
        <p
          style={{
            margin: "0px",
            marginBottom: "10px",
            marginTop: "20px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          You can Add Additional Services
        </p>
        {additionalFeatures.map((item, index) => {
          return (
            <Chip
              onClick={() => {
                let newArray = [...additionalFeatures];
                console.log("new Array is", newArray);
                newArray[index].selected = !newArray[index].selected;
                console.log("new Array is", newArray);
                setAdditionalFeatures(newArray);
              }}
              label={item.price + "  " + item.name}
              sx={{
                paddingLeft: "5px",
                marginBottom: "10px",
                marginRight: "10px",
                backgroundColor: item.selected ? "#ED702D28" : "white",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: item.selected ? "#ED702D28" : "#E3E3E3",
              }}
            />
          );
        })}
      </div>
    </OuterWrapper>
  );
};

export default ResourceSectionSelection;
