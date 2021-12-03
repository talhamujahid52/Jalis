import React, { useState } from "react";
import "./AccountSettings.css";
import { useHistory } from "react-router-dom";
import resort from "../../assets/ResortBooking.svg";
import manageresort from "../../assets/ManageResorts.svg";
import blockdates from "../../assets/BlockDates.svg";
import messages from "../../assets/Messages.svg";
import reports from "../../assets/ReportResortOwner.svg";
import contactadmin from "../../assets/ContactSiteAdmin.svg";
import ServicesCard from "../../components/Settings/ServicesCard/ServicesCard";
import ProfileCard from "../../components/Settings/ProfileCard/ProfileCard";
import { MANAGE_RESORT_PAGE } from "../../settings/constant";

const AccountSettings = () => {
  const [userType, setUserType] = useState("notLoggedIn");
  const history = useHistory();
  const handleClick = () => history.push(MANAGE_RESORT_PAGE);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "10px",
        // borderRadius: "1px solid red",
      }}
    >
      <div class="main">
        <div className="innerMainDiv">
          <h4 style={{ color: "#3a3a3a", fontWeight: "bold" }}>Settings</h4>
          <p
            style={{ color: "#A5A5A5", fontSize: "14px", marginBottom: "50px" }}
          >
            Edit or change settings.
          </p>
          <ProfileCard userType={userType}></ProfileCard>
          <h4
            style={{
              color: "#3a3a3a",
              fontWeight: "normal",
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            Other Settings
          </h4>

          <div
            style={{
              width: "90%",
              display: "inline-flex",
              flexWrap: "wrap",
              gap: "60px",
              // border: "1px solid green",
              // display: "grid",
              // flexDirection: "column",
              // // justifyContent: "space-around",
              // gridTemplateColumns: "auto auto auto",
            }}
          >
            {userType === "resortOwner" && (
              <>
                <ServicesCard></ServicesCard>
                <ServicesCard
                  picture={resort}
                  name="Resort Bookings"
                  description="See a list of all resorts bookings"
                ></ServicesCard>
                <ServicesCard
                  picture={manageresort}
                  name="Manage resorts"
                  description="Add and remove resorts and resources"
                  onClick={handleClick}
                ></ServicesCard>

                <ServicesCard
                  picture={blockdates}
                  name="Block Dates"
                  description="Block dates from the calender"
                ></ServicesCard>
                <ServicesCard
                  picture={messages}
                  name="Messages"
                  description="Connect With your Clients"
                ></ServicesCard>

                <ServicesCard
                  picture={reports}
                  name="Reports"
                  description="Check your performence reports"
                ></ServicesCard>

                <ServicesCard
                  picture={contactadmin}
                  name="Contact Site Admin"
                  description="+97174741234"
                ></ServicesCard>
              </>
            )}
            {userType === "notLoggedIn" && (
              <>
                <ServicesCard></ServicesCard>

                <ServicesCard
                  picture={messages}
                  name="Messages"
                  description="Connect With your Clients"
                ></ServicesCard>
                <ServicesCard
                  picture={contactadmin}
                  name="Contact Site Admin"
                  description="+97174741234"
                ></ServicesCard>
              </>
            )}
            {userType === "serviceProvider" && (
              <>
                <ServicesCard></ServicesCard>
                <ServicesCard
                  picture={contactadmin}
                  name="Add Services"
                  description="see a list of all resort bookings"
                ></ServicesCard>
                <ServicesCard
                  picture={contactadmin}
                  name="Memberships"
                  description="see membership plans and subscribe"
                ></ServicesCard>
                <ServicesCard
                  picture={contactadmin}
                  name="Contact Site Admin"
                  description="+97174741234"
                ></ServicesCard>
                <ServicesCard
                  picture={messages}
                  name="Messages"
                  description="Connect With your Clients"
                ></ServicesCard>
                <ServicesCard
                  picture={contactadmin}
                  name="Reports"
                  description="check your Performance reports"
                ></ServicesCard>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
