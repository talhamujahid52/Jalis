import React from "react";
import SectionGrid from "../../components/SectionGrid/SectionGrid";
import { PostPlaceholder } from "../../components/UI/ContentLoader/ContentLoader";
import useDataApi from "../../library/hooks/useDataApi";
import { SINGLE_POST_PAGE } from "settings/constant";
import useWindowSize from "../../library/hooks/useWindowSize";
const AgentFavItemLists = () => {
  const { data, loadMoreData, loading } = useDataApi("/data/agent.json");
  const favourite_post =
    data[0] && data[0].favourite_post ? data[0].favourite_post : [];
  const { width } = useWindowSize();

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
    </div>
  );
};

export default AgentFavItemLists;