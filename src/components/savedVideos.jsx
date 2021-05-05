import React from "react";
import { useDataContext } from "../contexts/DataContext";
import { SavedCard } from "./savedCard";

export default function SavedVideos() {
  const {
    state: { savedVideos },
  } = useDataContext();
  return (
    <>
      <h1>Saved Videos</h1>

      {savedVideos.length === 0 ? (
        <h3>No saved videos</h3>
      ) : (
        <ul className="grid-4-column-layout padding-around-1rem">
          {savedVideos.map((video) => (
            <li
              style={{
                listStyleType: "none",
              }}
              key={video.id}
            >
              <SavedCard key={video.id} video={video} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
