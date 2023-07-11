import React from "react";
import "../css/Videocard.css";
// import ThumbNail from '../img/Screenshot_1.png'

interface VideoCardProps {
    lecNo: string
;}

const VideoCard: React.FC<VideoCardProps> = ({ lecNo }) => {
  return (
    <div className="videocard">
      <div className="header">
        <div className="left">
          <h4>{lecNo}</h4>
        </div>
        <div className="right">
          <a href="/video">مشاهدة الآن</a>
        </div>
      </div>
      <div className="thumbnail">
        {/* <img src={ThumbNail} alt="" /> */}
      </div>
    </div>
  );
};

export default VideoCard;
