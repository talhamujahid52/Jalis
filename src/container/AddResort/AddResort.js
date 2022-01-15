import React, { useState } from "react";
import "./AddResort.css";
import wifi from "../../assets/wifiIcon.svg";
import Kitchen from "../../assets/KitchenIcon.svg";
import AC from "../../assets/ACIcon.svg";
import shower from "../../assets/Shower.svg";
import TV from "../../assets/TVIcon.svg";
import pool from "../../assets/PoolIcon.svg";
import addicon from "../../assets/AddIcon.svg";
import tenticon from "../../assets/TentIcon.svg";
import familyicon from "../../assets/FamilyIcon.svg";
import fireplaceicon from "../../assets/FireplaceIcon.svg";
import cleaningicon from "../../assets/CleaningIcon.svg";
import petfriendlyicon from "../../assets/PetFriendlyIcon.svg";
import singleicon from "../../assets/SingleIcons.svg";
import GoogleMapReact from "google-map-react";
import ImageUploading from "react-images-uploading";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import {
  ADD_RESORT_PAGE,
  ADD_SECTION_PAGE,
  HOME_PAGE,
} from "settings/constant";
import { useHistory } from "react-router-dom";

import AddResortWrapper from "./AddResort.style";
import {
  HeadingWrapper,
  AddPhotoTextAndButtonWrapper,
  AddPhotosText,
  SaveButton,
  CancelButton,
  AdditionalServicesWrapper,
  AdditionalServicesInput,
} from "./AddResort.style";
import { alignItems } from "styled-system";
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const AddResort = () => {
  const history = useHistory();
  const [serviceID, setServiceID] = useState(1);
  const [features, setFeatures] = useState([
    { icon: wifi, name: "wifi", selected: false },
    { icon: Kitchen, name: "kitchen", selected: false },
    { icon: shower, name: "Full bathroom", selected: false },
    { icon: AC, name: "Air conditioning", selected: false },
    { icon: TV, name: "TV", selected: false },
    { icon: pool, name: "Swimming pool", selected: false },
    { icon: tenticon, name: "Tent", selected: false },
    { icon: tenticon, name: "Grill", selected: false },
    { icon: familyicon, name: "Family-friendly", selected: false },
    { icon: fireplaceicon, name: "Fireplace", selected: false },
    { icon: fireplaceicon, name: "Allow smoking", selected: false },
    { icon: cleaningicon, name: "Cleaning service", selected: false },
    { icon: petfriendlyicon, name: "Pet friendly", selected: false },
    { icon: singleicon, name: "Singles-friendly", selected: false },
  ]);
  const [AdditionalFeatures, setAdditionalFeatures] = useState([]);
  const [additionalServices, setAdditionalServices] = useState({
    serviceTitle: "",
    serviceFee: "",
    id: serviceID,
  });
  const handleDeleteService = (chipToDelete) => () => {
    console.log("Deleted Chip is", chipToDelete);
    setAdditionalFeatures((AdditionalFeatures) =>
      AdditionalFeatures.filter((chip) => chip.id !== chipToDelete.id)
    );
    setServiceID(serviceID - 1);
  };
  const onAddService = () => {
    if (
      additionalServices.serviceTitle !== "" &&
      additionalServices.serviceFee !== ""
    ) {
      setAdditionalServices((prevState) => ({
        ...prevState,
        id: serviceID,
      }));
      setAdditionalFeatures((arr) => [...arr, additionalServices]);
      console.log("Newly Added Service is", additionalServices);
      setServiceID(serviceID + 1);
      console.log("Updated Service ID is", serviceID);
      setAdditionalServices((prevState) => ({
        ...prevState,
        serviceFee: "",
        serviceTitle: "",
      }));
    } else {
      alert("please fill the data");
    }
  };

  const handleAdditionalServicesInput = (e) => {
    const { name, value } = e.target;
    setAdditionalServices((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
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
    <form
      id="form1"
      onSubmit={() => {
        history.push(ADD_SECTION_PAGE);
      }}
    >
      <AddResortWrapper>
        <HeadingWrapper>Resort Name</HeadingWrapper>
        <input
          required
          type="text"
          value={resortName}
          onChange={(e) => {
            setReseortName(e.target.value);
          }}
          className="resortNameInput"
        ></input>
        <HeadingWrapper>Description</HeadingWrapper>

        <textarea
          required
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
          required
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
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
        <HeadingWrapper>Resort Features</HeadingWrapper>
        <AdditionalServicesWrapper></AdditionalServicesWrapper>

        {features.map((item, index) => {
          return (
            <Chip
              key={index}
              onClick={() => {
                // let newArray = new Array();
                let newArray = [...features];
                console.log("new Array is", newArray);
                newArray[index].selected = !newArray[index].selected;
                // return newArray;
                console.log("new Array is", newArray);
                setFeatures(newArray);
              }}
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
                backgroundColor: item.selected ? "#ED702D28" : "white",
              }}
            />
          );
        })}
        <hr style={{ marginBottom: "20px" }}></hr>

        {/* Additional Service */}
        {/* Additional Service */}
        {/* Additional Service */}
        {/* Additional Service */}
        {/* Additional Service */}

        {AdditionalFeatures.map((item, index) => {
          return (
            <Chip
              onDelete={handleDeleteService(item)}
              label={item.serviceTitle + " / " + item.serviceFee}
              sx={{
                paddingLeft: "5px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            />
          );
        })}

        <HeadingWrapper>Additional Services</HeadingWrapper>
        <AdditionalServicesWrapper>
          <AdditionalServicesInput
            name="serviceTitle"
            value={additionalServices.serviceTitle}
            onChange={handleAdditionalServicesInput}
            placeholder="Service"
          ></AdditionalServicesInput>
          <AdditionalServicesInput
            name="serviceFee"
            type="number"
            min={0}
            max={10}
            value={additionalServices.serviceFee}
            onChange={handleAdditionalServicesInput}
            placeholder="Service Fee"
          ></AdditionalServicesInput>
          <div
            onClick={onAddService}
            style={{
              height: "50px",
              width: "50px",
              background: "white",
              border: "1px solid #E3E3E3",
              borderRadius: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={addicon}
              style={{
                height: "20px",
                width: "20px",
                alignItems: "center",
              }}
              alt="logo"
            />
          </div>
        </AdditionalServicesWrapper>

        {/* Additional Service */}
        {/* Additional Service */}
        {/* Additional Service */}
        {/* Additional Service */}
        {/* Additional Service */}

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
          <SaveButton
            form="form1"
            type="submit"
            // onClick={() => {
            //   history.push(ADD_SECTION_PAGE);
            // }}
          >
            Save
          </SaveButton>
          <CancelButton
            onClick={() => {
              history.push(HOME_PAGE);
            }}
            type="button"
          >
            Cancel
          </CancelButton>
        </div>
        {/* </div> */}
      </AddResortWrapper>
    </form>
  );
};

export default AddResort;
