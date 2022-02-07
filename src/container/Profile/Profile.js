import React from "react";
import {
  ProfileWrapper,
  PersonalInfoWrapper,
  ImageAndNameWrapper,
  ImageWrapper,
  EmailWrapper,
  WhatsappWrapper,
  ReviewsAndRatingWrapper,
  ProceedButton,
  CancelButton,
} from "./Profile.style";
import NotificationsComponent from "./NotificationsComponent/NotificationsComponent";
import BankComponent from "./BankComponent/BankComponent";
import useWindowSize from "../../library/hooks/useWindowSize";
import EditIcon from "../../assets/EditUsername.svg";
import Edit from "../../assets/Edit.svg";
import Email from "../../assets/Email.svg";
import WhatsApp from "../../assets/Whatsapp_2.png";
import BankImage from "../../assets/Bank.svg";
import AccountImage from "../../assets/Account_Number.svg";
import ReviewsAndRatings from "../../assets/Reviews_Rating.svg";
import NotificationsImage from "../../assets/PushNotification.svg";
import SmsImage from "../../assets/SMSNotification.svg";
import { useState } from "react";
import whiteStar from "../../assets/whiteStar.svg";
const avatarImg = `http://s3.amazonaws.com/redqteam.com/isomorphic-reloaded-image/profilepic.png`;

const Profile = () => {
  const { width } = useWindowSize();
  const [name, setName] = useState("Mark Nicholas");
  const [phone, setPhone] = useState("+9665512345678");
  const [password, setPassword] = useState(123456789);
  const [bankName, setBankName] = useState("My Bank International");
  const [accountNumber, setAccountNumber] = useState("SA123455555");

  return (
    <ProfileWrapper>
      <h1 style={{ fontWeight: "bold", color: "#3A3A3A", margin: "0px" }}>
        Settings
      </h1>
      <p
        style={{
          margin: "0px",
          color: "#A5A5A5",
          fontSize: "16px",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        Edit or Change your Profile Settings
      </p>
      <PersonalInfoWrapper>
        <ImageAndNameWrapper>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ImageWrapper>
              <img alt="" src={avatarImg}></img>
            </ImageWrapper>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <input
                  style={{
                    borderRadius: "8px",
                    fontWeight: "bold",
                    fontSize: width > 800 ? "24px" : "16px",
                    marginRight: "10px",
                    border: "2px solid #F5F4F4 ",
                    padding: "0px 10px",
                  }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
                <div
                  style={{ height: "20px", width: "20px", cursor: "pointer" }}
                >
                  <img alt="EditImage" src={EditIcon}></img>
                </div>
              </div>
              <div
                style={{
                  padding: "0px 10px",
                  borderRadius: "20px",
                  width: "60px",
                  height: "25px",
                  backgroundColor: "#F6B504",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    margin: "0px",
                    fontSize: "12px",
                    color: "white",
                    marginRight: "10px",
                    height: "14px",
                    width: "14px",
                    marginBottom: "5px",
                  }}
                >
                  4.4
                </p>
                <div
                  style={{
                    margin: "0px",
                    fontSize: "12px",
                    color: "white",
                    height: "12px",
                    width: "12px",
                    marginBottom: "10px",
                  }}
                >
                  <img
                    alt=""
                    style={{ height: "100%", width: "100%" }}
                    src={whiteStar}
                  ></img>
                </div>
                {/* <div style={{ height: "14px", width: "14px", margin: "0px" }}>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    src={whiteStar}
                  ></img>
                  dead
                </div> */}
              </div>
            </div>
          </div>
          <div style={{ cursor: "pointer" }}>
            <img alt="EditImage" src={Edit}></img>
          </div>
        </ImageAndNameWrapper>
        <EmailWrapper>
          <div style={{ height: "25px", width: "20px" }}>
            <img
              alt="EmailImage"
              style={{ width: "100%", height: "100%" }}
              src={Email}
            ></img>
          </div>
          <p
            style={{
              margin: "0px",
              color: "#A5A5A5",
              fontSize: "14px",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            MarkRobins@gmail.com
          </p>
        </EmailWrapper>
        <hr style={{ color: "#F8F9FA", margin: "10px 0px" }}></hr>
        <WhatsappWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // marginRight: "10px",
              marginRight: width > 900 ? "30px" : "10px",
            }}
          >
            <div
              style={{
                width: width > 900 ? "90px" : "50px",
                height: width > 900 ? "60px" : "40px",
              }}
            >
              <img
                alt="WhatsApp"
                src={WhatsApp}
                style={{ width: "100%", height: "100%" }}
              />
            </div>

            <input
              style={{
                borderRadius: "8px",
                fontWeight: "bold",
                fontSize: width > 800 ? "22px" : "14px",
                color: "#3A3A3A",
                border: "2px solid #F5F4F4 ",
                padding: "0px 10px",
              }}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
            ></input>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <div
              style={{
                height: "20px",
                width: "20px",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                alt="EditIcon"
                src={EditIcon}
              ></img>
            </div>
            <p
              style={{
                margin: "0px",
                color: "#3A3A3A",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Save
            </p>
          </div>
        </WhatsappWrapper>
        <WhatsappWrapper>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: width < 900 ? "20px" : "0px",
              marginRight: width > 900 ? "30px" : "10px",
            }}
          >
            {/* {width > 900 && ( */}
            <div
              style={{
                width: width > 900 ? "90px" : "50px",
                height: width > 900 ? "60px" : "40px",
              }}
            >
              {/* <img src={WhatsApp} style={{ width: "100%", height: "100%" }} /> */}
            </div>
            {/* )} */}

            <input
              type="password"
              style={{
                borderRadius: "8px",
                fontWeight: "bold",
                // fontSize: "22px",
                fontSize: width > 800 ? "22px" : "14px",
                color: "#3A3A3A",
                border: "2px solid #F5F4F4 ",
                padding: "0px 10px",
              }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            ></input>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <div
              style={{
                height: "20px",
                width: "20px",
                marginRight: "5px",
                marginBottom: "5px",
              }}
            >
              <img
                style={{ height: "100%", width: "100%" }}
                alt="EditIcon"
                src={EditIcon}
              ></img>
            </div>
            <p
              style={{
                margin: "0px",
                color: "#3A3A3A",
                fontSize: "18px",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Save
            </p>
          </div>
        </WhatsappWrapper>
      </PersonalInfoWrapper>
      <ReviewsAndRatingWrapper>
        <NotificationsComponent
          heading="My Reviews & Ratings"
          subHeading="List of Reviews and ratings of the user"
          image={ReviewsAndRatings}
          show={true}
        ></NotificationsComponent>
        <BankComponent
          heading="Bank Name"
          subHeading="My Bank International"
          image={BankImage}
          name={bankName}
          setName={setBankName}
        ></BankComponent>
        <BankComponent
          heading="Account number"
          subHeading="SA1234555555"
          image={AccountImage}
          name={accountNumber}
          setName={setAccountNumber}
        ></BankComponent>
      </ReviewsAndRatingWrapper>
      <ReviewsAndRatingWrapper>
        <NotificationsComponent
          heading="Push notifications"
          subHeading="Enable / Disable receiving notification"
          image={NotificationsImage}
        ></NotificationsComponent>
        <NotificationsComponent
          heading="SMS notifications"
          subHeading="Enable / Disable receiving SMS"
          image={SmsImage}
        ></NotificationsComponent>
      </ReviewsAndRatingWrapper>
      <div
        style={{
          margin: "0px",
          marginTop: "50px",
          color: "#3A3A3A",
          fontSize: "22px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Member since January 8' 2020
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "40px",
        }}
      >
        <ProceedButton>Save Profile Changes</ProceedButton>
        <CancelButton>Cancel</CancelButton>
      </div>
    </ProfileWrapper>
  );
};

export default Profile;
