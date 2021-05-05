import React from "react";
import { useDataContext } from "../contexts/DataContext";
import { VideoCard } from "./videoCard";

export default function LikedVideos() {
  const {
    state: { likedVideos },
  } = useDataContext();
  return (
    <>
      <h1>Liked Videos</h1>

      {likedVideos.length === 0 ? (
        <h3>No liked videos</h3>
      ) : (
        <ul className="grid-4-column-layout padding-around-1rem">
          {likedVideos.map((video) => (
            <li
              style={{
                listStyleType: "none",
              }}
              key={video.id}
            >
              <VideoCard key={video.id} video={video} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
