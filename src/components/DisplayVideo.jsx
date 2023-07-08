import React from "react";
import Videos from "../img/movie.mp4";
import './DisplayVideo.css'
const DisplayVideo = () => {
  return (
    <main className="display-video">
      <div className="top">
        <h3>الحصة الاولى</h3>
        <span>د/احمد الصعيدي</span>
      </div>
      <div className="main-video">
        <video controls controlsList="nodownload">
          <source src={Videos} type={"video/mp4"} />
        </video>
      </div>
    </main>
  );
};

export default DisplayVideo;
