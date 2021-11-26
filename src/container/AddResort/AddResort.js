import React, { useState } from "react";
import "./AddResort.css";
import wifi from "../../assetts/wifiIcon.svg";
import Kitchen from "../../assetts/KitchenIcon.svg";
import AC from "../../assetts/ACIcon.svg";
import shower from "../../assetts/Shower.svg";
import TV from "../../assetts/TVIcon.svg";
import pool from "../../assetts/PoolIcon.svg";
import addicon from "../../assetts/AddIcon.svg";
import tenticon from "../../assetts/TentIcon.svg";
import familyicon from "../../assetts/FamilyIcon.svg";
import fireplaceicon from "../../assetts/FireplaceIcon.svg";
import cleaningicon from "../../assetts/CleaningIcon.svg";
import petfriendlyicon from "../../assetts/PetFriendlyIcon.svg";
import singleicon from "../../assetts/SingleIcons.svg";
import GoogleMapReact from "google-map-react";
import ImageUploading from "react-images-uploading";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import AddResortWrapper from "./AddResort.style";
import {
  HeadingWrapper,
  AddPhotoTextAndButtonWrapper,
  AddPhotosText,
  SaveButton,
  CancelButton,
} from "./AddResort.style";
import { alignItems } from "styled-system";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const AddResort = () => {
  const [AdditionalFeatures, setAdditionalFeatures] = useState([
    { title: "service", fee: "123" },
  ]);
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
    //
    <AddResortWrapper>
      <HeadingWrapper>Resort Name</HeadingWrapper>
      <input
        type="text"
        value={resortName}
        onChange={(e) => {
          setReseortName(e.target.value);
        }}
        className="resortNameInput"
      ></input>
      <HeadingWrapper>Description</HeadingWrapper>

      <textarea
        name="description"
        className="resortDescriptionInput"
        maxLength="1200"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></textarea>
      <p style={{ textAlign: "end", color: "#ADADAD", margin: "0px" }}>
        {description.length}/1200
      </p>
      <HeadingWrapper>Type</HeadingWrapper>

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
      <HeadingWrapper>Address</HeadingWrapper>

      <input
        type="text"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        className="resortNameInput"
      ></input>

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
      <HeadingWrapper>Resort Features</HeadingWrapper>

      {features.map((item, index) => {
        return (
          <Chip
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
      <hr></hr>
      {AdditionalFeatures.map((item, index) => {
        return (
          <Chip
            // avatar={
            //   <img
            //     src={item.icon}
            //     style={{ height: "15px", width: "15px", color: "blue" }}
            //   />
            // }
            label={item.title + " / " + item.fee}
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
                  height: "50px",
                  // border: "1px solid blue",
                }}
              >
                <HeadingWrapper>Add Photos</HeadingWrapper>

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
                  <AddPhotoTextAndButtonWrapper>
                    <AddPhotosText>Add Photos</AddPhotosText>
                    <div
                      style={{
                        height: "30px",
                        width: "30px",
                        background: "#fdeee5",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
                  </AddPhotoTextAndButtonWrapper>
                </button>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
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
                          height: "25px",
                          width: "25px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "none",
                        }}
                        onClick={() => onImageRemove(index)}
                      >
                        <p style={{ margin: "0px" }}> x</p>
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
        <SaveButton>Save</SaveButton>
        <CancelButton>Cancel</CancelButton>
      </div>
      {/* </div> */}
    </AddResortWrapper>
  );
};

export default AddResort;
