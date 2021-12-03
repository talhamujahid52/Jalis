import React, { useContext } from "react";
import { TopHotelsGrid, LuxaryHotelsGrid } from "./Grid";
import SearchArea from "./Search/Search";
import LocationGrid from "./Location/Location";
import FeaturedResort from "./FeaturedResorts/FeaturedResorts";
import AddsPlaceholder from "./AddsPlaceholder/AddsPlaceholder";
import ResortNearYourLocation from "./ResortNearYourLocation/ResortNearYourLocation";
// import Container from "../../components/UI/Container/Container";

import { LayoutContext } from "context/LayoutProvider";
import { Waypoint } from "react-waypoint";

const Home = () => {
  const [, dispatch] = useContext(LayoutContext);
  return (
    <>
      <SearchArea />
      <Waypoint
        onEnter={() => dispatch({ type: "HIDE_TOP_SEARCHBAR" })}
        onLeave={() => dispatch({ type: "SHOW_TOP_SEARCHBAR" })}
      />
      {/* <LocationGrid /> */}
      <FeaturedResort></FeaturedResort>
      <LocationGrid />
      <ResortNearYourLocation></ResortNearYourLocation>
      <TopHotelsGrid />
      <AddsPlaceholder></AddsPlaceholder>
      <LuxaryHotelsGrid />
      <AddsPlaceholder></AddsPlaceholder>
    </>
  );
};

export default Home;
