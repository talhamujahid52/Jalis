import React, { useState } from "react";
import "./AddResort.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import wifi from "../../../assets/wifiIcon.svg";
import Kitchen from "../../../assets/KitchenIcon.svg";
import AC from "../../../assets/ACIcon.svg";
import shower from "../../../assets/Shower.svg";
import TV from "../../../assets/TVIcon.svg";
import pool from "../../../assets/PoolIcon.svg";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ImageUploading from "react-images-uploading";
import Avatar from "@mui/material/Avatar";
import { border, color } from "@mui/system";
import addicon from "../../../assets/AddIcon.svg";
import tenticon from "../../../assets/TentIcon.svg";
import familyicon from "../../../assets/FamilyIcon.svg";
import fireplaceicon from "../../../assets/FireplaceIcon.svg";
import cleaningicon from "../../../assets/CleaningIcon.svg";
import petfriendlyicon from "../../../assets/PetFriendlyIcon.svg";
import singleicon from "../../../assets/SingleIcons.svg";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AddResort = () => {
  const features = [
    { icon: wifi, name: "wifi" },
    { icon: Kitchen, name: "kitchen" },
    { icon: shower, name: "Full bathroom" },
    { icon: AC, name: "Air conditioning" },
    { icon: TV, name: "TV" },
    { icon: pool, name: "Swimming pool" },
    { icon: tenticon, name: "Tent" },
    { icon: tenticon, name: "Grill" },
    { icon: familyicon, name: "Family-friendly" },
    { icon: fireplaceicon, name: "Fireplace" },
    { icon: fireplaceicon, name: "Allow smoking" },
    { icon: cleaningicon, name: "Cleaning service" },
    { icon: petfriendlyicon, name: "Pet friendly" },
    { icon: singleicon, name: "Singles-friendly" },
  ];

  const [images, setImages] = React.useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState("");
  const [resortName, setReseortName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [camp, setCamp] = useState(false);
  const [chalet, setChalet] = useState(false);
  const [resort, setResort] = useState(false);

  const handleCampClick = () => {
    setCamp(!camp);
    setChalet(false);
    setResort(false);
    setType("Camp");
  };
  const handleChaletClick = () => {
    setCamp(false);
    setChalet(!chalet);
    setResort(false);
    setType("Chalet");
  };
  const handleResortClick = () => {
    setCamp(false);
    setChalet(false);
    setResort(!resort);
    setType("Resort");
  };
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        borderRadius: "20px",
        // border: "1px solid red",
        background: "#F8F9FA",
      }}
    >
      <p
        style={{
          margin: "0px",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Resort Name
      </p>
      <input
        type="text"
        value={resortName}
        onChange={(e) => {
          setReseortName(e.target.value);
        }}
        className="resortNameInput"
      ></input>
      <p
        style={{
          margin: "0px",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Description
      </p>
      <textarea
        name="description"
        className="resortDescriptionInput"
        maxLength="1200"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <p style={{ textAlign: "end", color: "#ADADAD" }}>
        {" "}
        {description.length}/1200{" "}
      </p>

      <p
        style={{
          margin: "0px",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Type
      </p>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Camp"
          onClick={handleCampClick}
          sx={{
            color: camp ? "#ED702D" : "grey",
            background: camp ? "#ED702D1A" : "white",
          }}
        />
        <Chip
          label="Chalet"
          onClick={handleChaletClick}
          sx={{
            color: chalet ? "#ED702D" : "grey",
            background: chalet ? "#ED702D1A" : "white",
          }}
        />

        <Chip
          label="Resort"
          onClick={handleResortClick}
          sx={{
            color: resort ? "#ED702D" : "grey",
            background: resort ? "#ED702D1A" : "white",
          }}
        />
      </Stack>
      <p
        style={{
          margin: "0px",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Address
      </p>
      <input
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        className="resortNameInput"
      ></input>
      <p
        style={{
          margin: "0px",
          fontSize: "12px",
          fontWeight: "bold",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Resort Features
      </p>
      {features.map((item, index) => {
        return (
          <Chip
            key={index}
            avatar={
              <img
                src={item.icon}
                style={{ height: "15px", width: "15px", color: "blue" }}
              />
            }
            label={item.name}
            sx={{
              paddingLeft: "5px",
              marginBottom: "10px",
              marginRight: "10px",
            }}
          />
        );
      })}
      <div
        style={{
          height: "300px",
          width: "100%",
          marginTop: "20px",
          marginBottom: "20px",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
      <div
        style={{
          background: "#FFF",
          marginTop: "20px",
          padding: "20px",
          borderRadius: "20px",
        }}
      >
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          // maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  width: "100%",
                  justifyContent: "space-between",
                  height: "250px",
                }}
              >
                <p
                  style={{
                    margin: "0px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    // marginTop: "10px",
                  }}
                >
                  Add Photos
                </p>
                <button
                  style={
                    (isDragging ? { color: "red" } : null,
                    {
                      color: "#ED702D",
                      background: "white",
                      outline: "none",
                      border: "none",
                    })
                  }
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "120px",
                      // border: "1px solid red",
                    }}
                  >
                    <div
                      style={{
                        padding: "3px",
                      }}
                    >
                      add Photos
                    </div>
                    <div
                      style={{
                        height: "30px",
                        width: "30px",
                        background: "#fdeee5",
                        borderRadius: "20px",
                      }}
                    >
                      <img
                        src={addicon}
                        style={{
                          height: "15px",
                          width: "15px",
                          alignItems: "center",
                        }}
                        alt="logo"
                      />
                    </div>
                  </div>
                </button>
              </div>
              <div style={{ display: "flex" }}>
                {imageList.map((image, index) => (
                  <div key={index}>
                    <div
                      style={{
                        position: "relative",
                        // border: "1px solid red",
                        width: "250px",
                        marginRight: "20px",
                      }}
                    >
                      <img
                        src={image.data_url}
                        alt=""
                        width="250px"
                        style={{ borderRadius: "10px" }}
                      />
                      <button
                        style={{
                          borderRadius: "100px",
                          background: "white",
                          // margin: "0px",
                          position: "absolute",
                          top: "10px",
                          right: "20px",
                        }}
                        onClick={() => onImageRemove(index)}
                      >
                        Re
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </ImageUploading>
      </div>

      <div
        style={{
          marginTop: "70px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            width: "250px",
            height: "50px",
            borderRadius: "30px",
            background: "#ED702D",
            color: "white",
            border: "0px",
          }}
        >
          Save
        </button>
        <button
          style={{
            width: "200px",
            height: "50px",
            borderRadius: "30px",
            background: "white",
            color: "#A5A5A5",
            border: "1px solid #E3E3E3",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddResort;
