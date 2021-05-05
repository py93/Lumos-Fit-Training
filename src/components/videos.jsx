import React from "react";
import { useDataContext } from "../contexts/DataContext";
import { getSortedData, getFilteredData } from "../utils/utilFunctions";
import { VideoCard } from "./videoCard.jsx";
import { Filter } from "./filter.jsx";

export default function Videos() {
  const { state } = useDataContext();
  const sortedData = getSortedData(state, state.videos);
  const filteredData = getFilteredData(state, sortedData);

  return (
    <>
      <h5>Strength Training - {filteredData.length} videos</h5>
      <div className="display-flex-filter">
        <div className="grid-left-filter">
          <Filter />
        </div>
        <div className="grid-4-column-layout grid-right-of-filter padding-around-1rem">
          {filteredData.map((video) => {
            return <VideoCard key={video.id} video={video} />;
          })}
        </div>
      </div>
    </>
  );
}
