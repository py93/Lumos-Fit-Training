import React from "react";
import { SaveButton } from "./saveButton";
import { LikeButton } from "./likeButton";

function YoutubeEmbed({ id }) {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        className="img-responsive card-img"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}

export function VideoCard({ video }) {
  return (
    <div className="card-vertical">
      <YoutubeEmbed id={video.id} />

      <div className="text-container">
        <div>
          <h6>{video.name}</h6>
          <p>{video.category}</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <LikeButton video={video} />
          <SaveButton video={video} />
        </div>
      </div>
    </div>
  );
}
