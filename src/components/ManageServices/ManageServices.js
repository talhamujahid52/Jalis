import React, { useState } from "react";
import "./ManageServices.css";
import addresort from "../../assets/addresort.jpg";
import verified from "../../assets/Verified.svg";
import pauseicon from "../../assets/PauseIcon.svg";
import publishIcon from "../../assets/publish-icon.svg";
import archiveicon from "../../assets/ArchiveIcon.svg";
import statsicon from "../../assets/StatsIcon.svg";
import homeicon from "../../assets/HomeIcon.svg";
import editIcon from "../../assets/edit-resource-icon.svg";
// import BlockDates from "../../assets/BlockDatesIcon.svg";
import { useHistory } from "react-router-dom";
// import {
//   ADD_RESORT_PAGE,
//   ADD_SECTION_PAGE,
//   MANAGE_SECTION_PAGE,
// } from "settings/constant";
// import { color } from "styled-system";
import useWindowSize from "../../library/hooks/useWindowSize";

const ManageResort = (props) => {
  const { width } = useWindowSize();
  const history = useHistory();
  const [paused, setPaused] = useState(false);

  return (
    // <div
    //   style={{ height: "100px", width: "100%", border: "1px solid red" }}
    // ></div>
    <div class="manageresort">
      {/* //image */}
      <div style={{ display: "flex" }}>
        <div className="resort-image-services">
          {paused && (
            <div
              style={{
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                right: "15px",
                top: "10px",
                height: width > 800 ? "30px" : "20px",
                width: width > 800 ? "80px" : "50px",
                fontSize: width > 800 ? "14px" : "10px",
                backgroundColor: "#EE1E4F",
                borderRadius: "20px",
                color: "white",
              }}
            >
              Paused
            </div>
          )}

          <img
            src={addresort}
            style={{
              height: "100%",
              width: "100%",
            }}
            alt="logo"
          />
        </div>
        <div className="resort-info">
          <p
            style={{
              color: "#A5A5A5",
              fontSize: "14px",
              // border: "1px solid red",
              margin: "0px",
            }}
          >
            RESORT
          </p>
          <div className="verified">
            <p style={{ fontSize: "20px" }}>Dubai Golden Beach</p>
            <img
              src={verified}
              style={{
                height: "25px",
                width: "25px",
              }}
              alt="logo"
            />
          </div>
          <div
            style={
              {
                //  border: "1px solid red"
              }
            }
          >
            <p style={{ color: "#A5A5A5", fontSize: "14px", margin: "0px" }}>
              Created: 12/09/2020
            </p>
            <p
              style={{
                color: "#A5A5A5",
                fontSize: "14px",
                margin: "0px",
                marginTop: "5px",
              }}
            >
              Last edited: 12/09/2020
            </p>
            <div
              style={{ height: "2px", width: "100%", background: "#f5f5f5" }}
            ></div>
          </div>

          <div className="menu">
            <div
              className="iconHover"
              onClick={() => {
                alert("I am clicked");
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                // alignItems: "center",
                width: "40px",
                // border: "1px solid red",
                paddingTop: "2px",
              }}
            >
              <div style={{ width: "13px", height: "13px" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={editIcon}
                  alt="logo"
                />
              </div>
              <p style={{ fontSize: "14px", margin: "0px", marginTop: "2px" }}>
                Edit
              </p>
            </div>

            <div
              className="iconHover"
              onClick={() => {
                // alert("I am clicked");
                setPaused(!paused);
              }}
              style={{
                display: "flex",
                // justifyContent: "space-between",
                // alignItems: "center",
                width: paused ? "70px" : "50px",
              }}
            >
              {paused && (
                <div
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "5px",
                    marginTop: "3px",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    src={publishIcon}
                    alt="logo"
                  />
                </div>
              )}
              {!paused && (
                <div
                  style={{
                    width: "10px",
                    height: "15px",
                    marginRight: "5px",
                    marginTop: "3px",
                  }}
                >
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={pauseicon}
                    alt="logo"
                  />
                </div>
              )}

              <p style={{ fontSize: "14px", margin: "0px", marginTop: "5px" }}>
                {paused ? "Publish" : "Pause"}
              </p>
            </div>

            <div
              className="iconHover"
              onClick={() => {
                alert("I am clicked");
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "75px",
              }}
            >
              <div style={{ width: "15px", height: "25px" }}>
                <img
                  style={{ height: "100%", width: "100%" }}
                  src={archiveicon}
                  alt="logo"
                />
              </div>
              <p style={{ fontSize: "14px", marginTop: "4px", margin: "0px" }}>
                Archieve
              </p>
            </div>

            <div
              className="iconHover"
              onClick={() => {
                alert("I am clicked");
              }}
              style={{
                display: "flex",
                justifyContent: "space-between",
                // alignItems: "center",
                width: "55px",
              }}
            >
              <div style={{ width: "14px", height: "16px" }}>
                <img src={statsicon} alt="logo" />
              </div>
              <p style={{ fontSize: "14px", marginTop: "4px" }}>Stats</p>
            </div>
          </div>
        </div>
      </div>
      {/* extradiv */}
      {/* <div
        style={{
          width: "300px",
          height: "190px",
          //  border: "1px solid cyan"
        }}
      ></div> */}
      {/* managesection */}
      <div
        onClick={() => {
          props.changeSection();
        }}
        className="managesection iconHover"
      >
        <div
          style={{
            height: "35px",
            width: "35px",
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            background: "white",
            borderRadius: "50px",
            paddingTop: "5px",
          }}
        >
          <div style={{ height: "18px", width: "16px" }}>
            <img
              src={homeicon}
              style={{
                height: "100%",
                width: "100%",
              }}
              alt="logo"
            />
          </div>
        </div>
        <p
          style={{
            color: "#ED702D",
            fontSize: "14px",
            textAlign: "center",
            margin: "0px",
          }}
        >
          Manage Sections
        </p>
      </div>
    </div>
  );
};

export default ManageResort;
