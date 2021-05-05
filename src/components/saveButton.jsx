import { useDataContext } from "../contexts/DataContext";
import React from "react";

export function SaveButton({ video }) {
  const { dispatch } = useDataContext();

  function onSave() {
    try {
      dispatch({
        type: "ADD_REMOVE_VIDEO_FROM_SAVED",
        payload: video,
      });
    } catch {
      console.error("Could not update saved list");
    }
  }
  return (
    <button
      className={
        video.saved
          ? "badge-container inline like-button button-active"
          : "badge-container inline like-button"
      }
      onClick={onSave}
    >
      <span>
        <span className="badge-container">
          <i className="fa fa-lg fa-clock"></i>
        </span>
      </span>
    </button>
  );
}
