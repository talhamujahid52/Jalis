import React, { useContext } from "react";
import { TopHotelsGrid, LuxaryHotelsGrid } from "./Grid";
import SearchArea from "../Home/Search/Search";
import AddsPlaceholder from "../Home/AddsPlaceholder/AddsPlaceholder";
import ServicesNearYourLocation from "./ServicesNearYourLocation/ServicesNearYourLocation";

import { LayoutContext } from "context/LayoutProvider";
import { Waypoint } from "react-waypoint";
const HomeServices = () => {
  const [, dispatch] = useContext(LayoutContext);
  return (
    <>
      {/* <SearchArea />
      <Waypoint
        onEnter={() => dispatch({ type: "HIDE_TOP_SEARCHBAR" })}
        onLeave={() => dispatch({ type: "SHOW_TOP_SEARCHBAR" })}
      /> */}

      <TopHotelsGrid />
      <ServicesNearYourLocation></ServicesNearYourLocation>
      <LuxaryHotelsGrid />
      <AddsPlaceholder></AddsPlaceholder>
    </>
  );
};

export default HomeServices;
