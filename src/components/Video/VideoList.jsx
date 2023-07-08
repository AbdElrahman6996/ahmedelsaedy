import React from "react";
import VideoIcon from "../../icons/video2.svg";
import '../css/Videolist.css'
const VideoList = ({ VideoName }) => {
  return (
    <a href='/' className="videolist-ele">
      <img src={VideoIcon} alt="" />
      <span>{VideoName}</span>
    </a>
  );
};

export default VideoList;
