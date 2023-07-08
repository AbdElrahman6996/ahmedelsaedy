import React from "react";
import "../css/Bottombar.css";
import VideoIcon from "../../icons/video.svg";
import PenIcon from "../../icons/pen.svg";
import PieIcon from "../../icons/pie.svg";
const BottomBar = () => {
  return (
    <div className="bottomnav">
      <a href="/" className="courses active">
        <img src={VideoIcon} alt="" />
        <p>الحصص</p>
      </a>
      <div className="right">
        <a href="/" className="homework">
          <img src={PenIcon} alt="" />
        </a>
        <a href="/" className="progress">
          <img src={PieIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default BottomBar;
