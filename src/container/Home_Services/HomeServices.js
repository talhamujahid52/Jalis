import React, { useContext, useState } from "react";
import { TopServicesGrid, LuxaryServicesGrid } from "./Grid";
import SearchArea from "../Home/Search/Search";
import AddsPlaceholder from "../Home/AddsPlaceholder/AddsPlaceholder";
import LocationGrid from "../Home/Location/Location";
import ServicesNearYourLocation from "./ServicesNearYourLocation/ServicesNearYourLocation";
import {
  SearchBarWrapper,
  SearchInput,
  PriceButtons,
  ButtonWrapper,
  FilterImageWrapper,
} from "./HomeServices.style";
import { LayoutContext } from "context/LayoutProvider";
import { Waypoint } from "react-waypoint";
import Container from "components/UI/Container/Container";
import FilterImage from "../../assets/Filter.svg";
const HomeServices = () => {
  const [, dispatch] = useContext(LayoutContext);
  const [cityFilter, setCityFilter] = useState("");

  return (
    <>
      {/* <SearchArea />
      <Waypoint
        onEnter={() => dispatch({ type: "HIDE_TOP_SEARCHBAR" })}
        onLeave={() => dispatch({ type: "SHOW_TOP_SEARCHBAR" })}
      /> */}
      <Container fluid={true}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <SearchBarWrapper>
            <SearchInput placeholder="Search for your Booked Resorts..."></SearchInput>
          </SearchBarWrapper>
          <FilterImageWrapper>
            <img src={FilterImage} />
          </FilterImageWrapper>
        </div>

        <ButtonWrapper>
          <PriceButtons
            onClick={() => {
              setCityFilter("Riyadh");
            }}
            style={{
              backgroundColor:
                cityFilter === "Riyadh" ? "#ED702D" : "#ED702D1A",
              color: cityFilter === "Riyadh" ? "white" : "#ED702D",
              borderWidth: cityFilter ? "0px" : "0px",
            }}
          >
            Riyadh
          </PriceButtons>
          <PriceButtons
            onClick={() => {
              setCityFilter("Makkah");
            }}
            style={{
              backgroundColor:
                cityFilter === "Makkah" ? "#ED702D" : "#ED702D1A",
              color: cityFilter === "Makkah" ? "white" : "#ED702D",
              borderWidth: cityFilter ? "0px" : "0px",
            }}
          >
            Makkah
          </PriceButtons>
          <PriceButtons
            onClick={() => {
              setCityFilter("Madina");
            }}
            style={{
              backgroundColor:
                cityFilter === "Madina" ? "#ED702D" : "#ED702D1A",
              color: cityFilter === "Madina" ? "white" : "#ED702D",
              borderWidth: cityFilter ? "0px" : "0px",
            }}
          >
            Madina
          </PriceButtons>
          <PriceButtons
            onClick={() => {
              setCityFilter("Reset");
            }}
            style={{
              backgroundColor: cityFilter === "Reset" ? "#ED702D" : "#ED702D1A",
              color: cityFilter === "Reset" ? "white" : "#ED702D",
              borderWidth: cityFilter ? "0px" : "0px",
            }}
          >
            Reset
          </PriceButtons>
        </ButtonWrapper>
      </Container>
      <LocationGrid></LocationGrid>
      {/* <LocationGrid></LocationGrid> */}
      <ServicesNearYourLocation></ServicesNearYourLocation>
      <TopServicesGrid />
      <AddsPlaceholder></AddsPlaceholder>
    </>
  );
};

export default HomeServices;
