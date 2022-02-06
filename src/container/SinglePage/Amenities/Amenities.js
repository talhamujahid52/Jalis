import React from "react";
import PropTypes from "prop-types";
import Heading from "components/UI/Heading/Heading";
// import TextLink from "components/UI/TextLink/TextLink";
// import { FaWifi, FaCarAlt, FaSwimmer, FaAirFreshener } from "react-icons/fa";
// import IconCard from "components/IconCard/IconCard";
import AmenitiesWrapper, { AmenitiesArea } from "./Amenities.style";
// import { TextButton } from "../SinglePageView.style";
// import { Element } from "react-scroll";
import WifiIcon from "../../../assets/Wifi.svg";
import SwimIcon from "../../../assets/Swim.svg";
import GymIcon from "../../../assets/Gym.svg";
import DiningIcon from "../../../assets/Dining.svg";
// import { fontSize } from "styled-system";
import AmenetiesComponent from "./AmenetiesComponent";
const Amenities = ({ titleStyle, linkStyle }) => {
  return (
    // <Element name="amenities" className="Amenities">
    <>
      {/* <Heading as="h2" content="Resort Features" {...titleStyle} /> */}

      <AmenitiesWrapper>
        {/* <Heading as="h2" content="Amenities" {...titleStyle} /> */}
        <Heading as="h2" content="Resort Features" {...titleStyle} />

        <AmenitiesArea>
          <AmenetiesComponent
            title="Wifi"
            image={WifiIcon}
          ></AmenetiesComponent>
          <AmenetiesComponent
            title="Swim"
            image={SwimIcon}
          ></AmenetiesComponent>{" "}
          <AmenetiesComponent title="Gym" image={GymIcon}></AmenetiesComponent>{" "}
          <AmenetiesComponent
            title="Dining"
            image={DiningIcon}
          ></AmenetiesComponent>
          <AmenetiesComponent
            title="Wifi"
            image={WifiIcon}
          ></AmenetiesComponent>
          <AmenetiesComponent
            title="Swim"
            image={SwimIcon}
          ></AmenetiesComponent>{" "}
          <AmenetiesComponent title="Gym" image={GymIcon}></AmenetiesComponent>{" "}
          <AmenetiesComponent
            title="Dining"
            image={DiningIcon}
          ></AmenetiesComponent>
          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100px", height: "100px" }}>
              <img style={{ height: "100%", width: "100%" }} src={WifiIcon} />
            </div>
            <p
              style={{ color: "#2D3447", fontSize: "14px", fontWeight: "bold" }}
            >
              Wifi
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100px", height: "100px" }}>
              <img style={{ height: "100%", width: "100%" }} src={SwimIcon} />
            </div>
            <p
              style={{ color: "#2D3447", fontSize: "14px", fontWeight: "bold" }}
            >
              Swim
            </p>
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100px", height: "100px" }}>
              <img style={{ height: "100%", width: "100%" }} src={GymIcon} />
            </div>
            <p
              style={{ color: "#2D3447", fontSize: "14px", fontWeight: "bold" }}
            >
              Gym
            </p>
          </div>{" "}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100px", height: "100px" }}>
              <img style={{ height: "100%", width: "100%" }} src={DiningIcon} />
            </div>
            <p
              style={{ color: "#2D3447", fontSize: "14px", fontWeight: "bold" }}
            >
              Dining
            </p>
          </div> */}
          {/* <IconCard icon={<FaWifi />} title="Free wifi" />
          <IconCard icon={<FaCarAlt />} title="Free parking" />
          <IconCard icon={<FaSwimmer />} title="Free pool" />
          <IconCard icon={<FaAirFreshener />} title="Air Freshener" />
          <IconCard icon={<FaWifi />} title="Free wifi" />
          <IconCard icon={<FaCarAlt />} title="Free parking" />
          <IconCard icon={<FaSwimmer />} title="Free pool" />
          <IconCard icon={<FaAirFreshener />} title="Air Freshener" /> */}
        </AmenitiesArea>
        {/* <TextButton>
          <TextLink link="#1" content="Show all amenities" {...linkStyle} />
        </TextButton> */}
      </AmenitiesWrapper>
    </>
    // </Element>
  );
};

Amenities.propTypes = {
  titleStyle: PropTypes.object,
  linkStyle: PropTypes.object,
};

Amenities.defaultProps = {
  titleStyle: {
    color: "#2C2C2C",
    fontSize: ["17px", "20px", "25px"],
    lineHeight: ["1.15", "1.2", "1.36"],
    mb: ["14px", "20px", "30px"],
  },
  linkStyle: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#008489",
  },
};

export default Amenities;
