import React from "react";
import "./Videocard.css";
// import ThumbNail from '../img/Screenshot_1.png'
const VideoCard = ({ lecNo }) => {
  return (
    <div className="videocard">
      <div className="header">
        <div className="left">
          <h4>{lecNo}</h4>
        </div>
        <div className="right">
          <a href="/">مشاهدة الآن</a>
        </div>
      </div>
      <div className="thumbnail">
        {/* <img src={ThumbNail} alt="" /> */}
      </div>
    </div>
  );
};

export default VideoCard;
