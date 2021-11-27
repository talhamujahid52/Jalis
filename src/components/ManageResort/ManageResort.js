import React from "react";
import "./ManageResort.css";
import addresort from "../../assetts/addresort.jpg";
import verified from "../../assetts/Verified.svg";
import pauseicon from "../../assetts/PauseIcon.svg";
import archiveicon from "../../assetts/ArchiveIcon.svg";
import statsicon from "../../assetts/StatsIcon.svg";
import homeicon from "../../assetts/HomeIcon.svg";

const ManageResort = () => {
  return (
    <div class="manageresort">
      {/* //image */}
      <div className="resort-image">
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
            style={{
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
              width: "40px",
            }}
          >
            <div style={{ width: "10px", height: "14px" }}>
              <img src={pauseicon} alt="logo" />
            </div>
            <p style={{ fontSize: "14px", marginTop: "4px" }}>Edit</p>
          </div>

          <div
            onClick={() => {
              console.log("I am Clicked");
            }}
            style={{
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
              width: "65px",
            }}
          >
            <div style={{ width: "10px", height: "14px" }}>
              <img src={archiveicon} alt="logo" />
            </div>
            <p style={{ fontSize: "14px", marginTop: "4px" }}>Pause</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
              width: "80px",
            }}
          >
            <div style={{ width: "10px", height: "14px" }}>
              <img src={archiveicon} alt="logo" />
            </div>
            <p style={{ fontSize: "14px", marginTop: "4px" }}>Archieve</p>
          </div>

          <div
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
      {/* extradiv */}
      <div
        style={{
          width: "300px",
          height: "190px",
          //  border: "1px solid cyan"
        }}
      ></div>
      {/* managesection */}
      <div className="managesection">
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
        <p style={{ color: "#ED702D", fontSize: "14px", textAlign: "center" }}>
          Manage Sections
        </p>
      </div>
    </div>
  );
};

export default ManageResort;
