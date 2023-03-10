import React, { useState, Fragment } from "react";
import Sticky from "react-stickynode";
import Toolbar from "components/UI/Toolbar/Toolbar";
// import { Checkbox } from "antd";
import CategorySearch from "components/Search/CategorySearch/CategotySearch";
import { PostPlaceholder } from "components/UI/ContentLoader/ContentLoader";
import SectionGrid from "components/SectionGrid/SectionGrid";
import ListingMap from "./ListingMap";
import FilterDrawer from "components/Search/MobileSearchView";
import useWindowSize from "library/hooks/useWindowSize";
import useDataApi from "library/hooks/useDataApi";
import { SINGLE_POST_PAGE } from "settings/constant";
import ListingWrapper, { PostsWrapper } from "./Listing.style";

export default function Listing({ location, history, title }) {
  let url = "/data/hotel.json";
  const { width } = useWindowSize();
  const [showMap, setShowMap] = useState(false);
  const { data, loading, loadMoreData, total, limit } = useDataApi(url);
  // let columnWidth = [1 / 1, 1 / 2, 1 / 3, 1 / 4, 1 / 5];
  let columnWidth = [1 / 1, 1 / 2, 1 / 3];
  if (width > 1150) {
    columnWidth = [1 / 1, 1 / 2, 1 / 3];
  }
  if (width > 750 && width <= 1150) {
    columnWidth = [1 / 1, 1 / 2];
  }
  if (width > 400 && width <= 750) {
    columnWidth = [1 / 1];
  }
  if (location.search) {
    url += location.search;
  }
  if (showMap) {
    // columnWidth = [1 / 1, 1 / 2, 1 / 2, 1 / 2, 1 / 3];
    columnWidth = [1 / 1, 1 / 2];
  }
  // const handleMapToggle = () => {
  //   setShowMap((showMap) => !showMap);
  // };

  return (
    <ListingWrapper>
      <Sticky top={82} innerZ={999} activeClass="isHeaderSticky">
        <Toolbar
          left={
            width > 991 ? (
              <CategorySearch history={history} location={location} />
            ) : (
              <FilterDrawer history={history} location={location} />
            )
          }
          // right={
          //   <ShowMapCheckbox>
          //     <Checkbox defaultChecked={false} onChange={handleMapToggle}>
          //       Show map
          //     </Checkbox>
          //   </ShowMapCheckbox>
          // }
        />
      </Sticky>
      {/* <p>{title}</p> */}
      <p
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          margin: "0px",
          marginLeft: "30px",
          marginTop: "30px",
        }}
      >
        Featured Resorts
      </p>

      <Fragment>
        <PostsWrapper className={width > 767 && showMap ? "col-12" : "col-24"}>
          <SectionGrid
            link={SINGLE_POST_PAGE}
            columnWidth={columnWidth}
            data={data}
            totalItem={total.length}
            loading={loading}
            limit={limit}
            handleLoadMore={loadMoreData}
            placeholder={<PostPlaceholder />}
          />
        </PostsWrapper>

        {showMap && <ListingMap />}
      </Fragment>
    </ListingWrapper>
  );
}
