import { useDataContext } from "../contexts/DataContext";
import React from "react";

export function LikeButton({ video }) {
  const {dispatch } = useDataContext();
  function likeHandler() {
    try {
      dispatch({
        type: "ADD_REMOVE_VIDEO_FROM_LIKED",
        payload: video,
      });
    } catch {
      console.error("Could not update liked video list");
    }
  }
  return (
    <>
      <div>
        <button
          className={
            video.liked
              ? "badge-container inline like-button button-active"
              : "badge-container inline like-button"
          }
          onClick={likeHandler}
        >
          <span>
            <span className="badge-container">
              <i className="fa fa-lg fa-thumbs-up"></i>
            </span>
          </span>
        </button>
        {video.likes}
      </div>
    </>
  );
}
