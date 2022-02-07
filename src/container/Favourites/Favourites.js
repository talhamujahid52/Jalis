import React from "react";
import SectionGrid from "../../components/SectionGrid/SectionGrid";
import { PostPlaceholder } from "../../components/UI/ContentLoader/ContentLoader";
import useDataApi from "../../library/hooks/useDataApi";
import { SINGLE_POST_PAGE } from "settings/constant";
import useWindowSize from "../../library/hooks/useWindowSize";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const AgentFavItemLists = () => {
  const { data, loadMoreData, loading } = useDataApi("/data/agent.json");
  const favourite_post =
    data[0] && data[0].favourite_post ? data[0].favourite_post : [];
  const { width } = useWindowSize();
  const [value, setValue] = React.useState("one");
  const [favouriteType, setFavouriteType] = React.useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let columnWidth;

  if (width > 1150) {
    columnWidth = [1 / 1, 1 / 2, 1 / 3];
  }
  if (width > 750 && width <= 1150) {
    columnWidth = [1 / 1, 1 / 2];
  }
  if (width > 400 && width <= 750) {
    columnWidth = [1 / 1];
  }
  return (
    <div style={{ padding: width > 700 ? "50px" : "0px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          TabIndicatorProps={{
            style: {
              backgroundColor: "#ED702D",
            },
          }}
        >
          <Tab style={{ color: "#ED702D" }} label="All" value="one" />
          <Tab style={{ color: "#ED702D" }} label="Resorts" value="two" />
          <Tab style={{ color: "#ED702D" }} label="Services" value="three" />
        </Tabs>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0px",
        }}
      >
        <button
          style={{
            borderRadius: "30px",
            border:
              favouriteType === "Oldest"
                ? "1px solid #ED702D28"
                : "1px solid #E3E3E3",
            color: favouriteType === "Newest" ? "#ED702D" : "#8A8A8A",
            padding: "10px 20px",
            marginRight: "40px",
            backgroundColor: favouriteType === "Newest" ? "#ED702D28" : "white",
          }}
          onClick={() => {
            setFavouriteType("Newest");
          }}
        >
          Newest
        </button>
        <button
          style={{
            borderRadius: "30px",
            border:
              favouriteType === "Oldest"
                ? "1px solid #ED702D28"
                : "1px solid #E3E3E3",
            color: favouriteType === "Oldest" ? "#ED702D" : "#8A8A8A",
            padding: "10px 20px",
            backgroundColor: favouriteType === "Oldest" ? "#ED702D28" : "white",

            // marginRight: "40px",
          }}
          onClick={() => {
            setFavouriteType("Oldest");
          }}
        >
          Oldest
        </button>
      </div>
      {value === "one" && (
        <>
          <SectionGrid
            link={SINGLE_POST_PAGE}
            data={favourite_post}
            loading={loading}
            limit={6}
            totalItem={favourite_post.length}
            // columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
            columnWidth={columnWidth}
            placeholder={<PostPlaceholder />}
            handleLoadMore={loadMoreData}
          />
        </>
      )}
      {value === "two" && (
        <>
          <SectionGrid
            link={SINGLE_POST_PAGE}
            data={favourite_post}
            loading={loading}
            limit={6}
            totalItem={favourite_post.length}
            // columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
            columnWidth={columnWidth}
            placeholder={<PostPlaceholder />}
            handleLoadMore={loadMoreData}
          />
        </>
      )}
      {value === "three" && (
        <>
          <SectionGrid
            link={SINGLE_POST_PAGE}
            data={favourite_post}
            loading={loading}
            limit={6}
            totalItem={favourite_post.length}
            // columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
            columnWidth={columnWidth}
            placeholder={<PostPlaceholder />}
            handleLoadMore={loadMoreData}
          />
        </>
      )}

      {/* <SectionGrid
        link={SINGLE_POST_PAGE}
        data={favourite_post}
        loading={loading}
        limit={6}
        totalItem={favourite_post.length}
        // columnWidth={[1 / 2, 1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6]}
        columnWidth={columnWidth}
        placeholder={<PostPlaceholder />}
        handleLoadMore={loadMoreData}
      /> */}
    </div>
  );
};

export default AgentFavItemLists;
