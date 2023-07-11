import React from "react";
import VideoIcon from "../../icons/video2.svg";
import '../css/Videolist.css'

interface VideoListProps {
    VideoName: string
}
const VideoList: React.FC<VideoListProps> = ({ VideoName }) => {
  return (
    <a href='/' className="videolist-ele">
      <img src={VideoIcon} alt="" />
      <span>{VideoName}</span>
    </a>
  );
};

export default VideoList;
