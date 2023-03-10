import React from "react";
import locationicon from "../../../assets/location-pin.svg";
import email from "../../../assets/Email.svg";
import edit from "../../../assets/Edit.svg";
import { useHistory } from "react-router-dom";
import "./ProfileCard.css";
import { UserProfile } from "settings/constant";
const avatarImg = `http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png`;

const ProfileCard = ({ userType }) => {
  const history = useHistory();
  // const [userType, setUserType] = useState("serviceProvider");
  return (
    <div className="outerdiv">
      <div
        style={{
          // border: "1px solid red",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="roundedImage" style={{ overflow: "hidden" }}>
          <img alt="" src={avatarImg}></img>
        </div>
        {userType === "notLoggedIn" && (
          <div className="notLoggedInDiv">
            <p
              style={{
                fontSize: "1.5vw",
                color: "#3A3A3A",
                margin: "0px",
                // border: "1px solid red",
              }}
            >
              You're not signed in
            </p>
            <p style={{ color: "#A5A5A5", fontSize: "1.25vw" }}>
              Please Login / Register to access more features
            </p>
            <div
              style={{
                height: "2px",
                background: "#EEEEEE",
              }}
            ></div>
          </div>
        )}
        {(userType === "resortOwner" || userType === "serviceProvider") && (
          <div className="middlediv">
            <div className="middledivchild1">
              <p className="nameText">Marks Robin</p>
              <p className="jobStatusText">
                {userType === "serviceProvider" && "Service Provider"}
                {userType === "resortOwner" && "Resort Owner"}
              </p>
            </div>

            <div className="middledivchild2">
              <div style={{ display: "flex" }}>
                <img
                  src={email}
                  style={{
                    height: "15px",
                    width: "18px",
                    marginTop: "5px",
                    marginRight: "5px",
                  }}
                  alt="logo"
                />
                <p className="addressAndEmailStyles">marksrobin@email.com</p>
              </div>
              <div style={{ display: "flex" }}>
                <img
                  src={locationicon}
                  className="locationIconStyle"
                  alt="logo"
                />
                <p className="addressAndEmailStyles">
                  81PennsylvaniaAvenue, USA
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="emptyDivWidth"></div> */}
      <div
        onClick={() => {
          history.push(UserProfile);
          // alert("hi");
        }}
        // className="editLogo"
      >
        <img className="editLogo" src={edit} alt="logo" />
      </div>
    </div>
  );
};

export default ProfileCard;
