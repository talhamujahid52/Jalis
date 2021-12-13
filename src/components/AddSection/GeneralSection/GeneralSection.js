import React, { useState } from "react";
import "./GeneralSection.css";

import noOfPeople from "../../../assets/NumPeopleIcon.svg";
import livingroomicon from "../../../assets/LivingroomIcon.svg";
import checkinicon from "../../../assets/CheckinIcon.svg";
import checkouticon from "../../../assets/CheckoutIcon.svg";
import areaicon from "../../../assets/AreaIcon.svg";
import bedicon from "../../../assets/BedIcon.svg";

const AddSection = (props) => {
  const [sectionName, setSectionName] = useState("");
  const [description, setDescription] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [livingRooms, setLivingRooms] = useState("");
  const [bedRooms, setBedRooms] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [area, setArea] = useState("");

  return (
    <form id="generalForm" onSubmit={props.handleNext}>
      <div
        style={{
          padding: "20px",
          borderRadius: "20px",
          // border: "1px solid red",
          background: "#F8F9FA",
          width: "100%",
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
          Section Name
        </p>
        <input
          required
          type="text"
          value={sectionName}
          onChange={(e) => {
            setSectionName(e.target.value);
          }}
          className="sectionNameInput"
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
          required
          name="description"
          className="sectionDescriptionInput"
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
          Description
        </p>
        <div className="moreDescription">
          <div className="moreDescription1">
            <div class="addSectionText">
              <img
                src={noOfPeople}
                style={{
                  height: "20px",
                  marginRight: "10px",
                }}
                alt="logo"
              />
              <p style={{ height: "20px" }}>Maximum people</p>
            </div>
            <div>
              <input
                required
                type="number"
                min={0}
                max={6}
                placeholder="People count"
                value={peopleCount}
                onChange={(e) => {
                  setPeopleCount(e.target.value);
                }}
                className="DescriptionTextField"
              ></input>
            </div>
            {/* 2 */}
            <div class="addSectionText">
              <img
                src={livingroomicon}
                style={{
                  height: "20px",
                  marginRight: "10px",
                }}
                alt="logo"
              />
              <p style={{ height: "20px" }}>Living rooms</p>
            </div>
            <div>
              <input
                required
                type="number"
                min={0}
                max={6}
                placeholder="01"
                value={livingRooms}
                onChange={(e) => {
                  setLivingRooms(e.target.value);
                }}
                className="DescriptionTextField"
              ></input>
            </div>
            {/* 3 */}
            <div class="addSectionText">
              <img
                src={checkouticon}
                style={{
                  height: "20px",
                  marginRight: "10px",
                }}
                alt="logo"
              />
              <p style={{ height: "20px" }}>Check-out time</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="01-05-2021"
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                }}
                className="DescriptionTextField"
              ></input>
            </div>
          </div>
          <div className="moreDescription2">
            <div class="addSectionText">
              <img
                src={areaicon}
                style={{
                  height: "20px",
                  marginRight: "10px",
                }}
                alt="logo"
              />
              <p style={{ height: "20px" }}>Area</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
                className="DescriptionTextField"
              ></input>
            </div>
            {/* 2 */}
            <div class="addSectionText">
              <img
                src={bedicon}
                style={{
                  height: "20px",
                  marginRight: "10px",
                }}
                alt="logo"
              />
              <p style={{ height: "20px" }}>Bedrooms</p>
            </div>
            <div>
              <input
                required
                type="number"
                min={0}
                max={6}
                placeholder="01"
                value={bedRooms}
                onChange={(e) => {
                  setBedRooms(e.target.value);
                }}
                className="DescriptionTextField"
              ></input>
            </div>
            {/* 3 */}
            <div class="addSectionText">
              <img
                src={checkinicon}
                style={{
                  height: "20px",
                  marginRight: "10px",
                }}
                alt="logo"
              />
              <p
                style={{
                  // marginTop: "15px",
                  height: "20px",
                  // marginLeft: "0px",
                  // border: "1px solid red",
                }}
              >
                check-in time
              </p>
            </div>
            <div>
              <input
                required
                type="text"
                placeholder="01-05-2021"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
                className="DescriptionTextField"
              ></input>
            </div>
          </div>
        </div>
        <div className="addSectionButon"></div>
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          style={{
            height: "50px",
            width: "120px",
            border: "1px solid #E3E3E3",
            color: "#6F6E71",
            borderRadius: "40px",
          }}
          disabled
          // onClick={props.handleBack}
        >
          Cancel
        </button>
        <button
          style={{
            height: "50px",
            width: "170px",
            backgroundColor: "#ED702D",
            border: "0px",
            color: "white",
            borderRadius: "40px",
          }}
          type="submit"
          form="generalForm"
        >
          NEXT
        </button>
      </div>
    </form>
  );
};

export default AddSection;
