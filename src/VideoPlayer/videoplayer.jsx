import React from "react";

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div>
      <video controls style={{ width: "100%" }}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
