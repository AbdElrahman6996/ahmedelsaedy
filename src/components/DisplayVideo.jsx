import React from "react";
import Videos from "../img/movie.mp4";
import VideoList from './VideoList'
import "./DisplayVideo.css";
const DisplayVideo = () => {
  return (
    <main className="display-video">
      <div className="left">
        <h4>فهرس الفديوهات</h4>
        <VideoList VideoName={'الحلقه الاولى'}/>
        <VideoList VideoName={'الحلقه الثانيه'}/>
        <VideoList VideoName={'الحلقه الثالثه'}/>
        <VideoList VideoName={'الحلقه الرابعه'}/>
        <VideoList VideoName={'الحلقه الاولى'}/>
        <VideoList VideoName={'الحلقه الثانيه'}/>
        <VideoList VideoName={'الحلقه الثالثه'}/>
        <VideoList VideoName={'الحلقه الرابعه'}/>
        <VideoList VideoName={'الحلقه الاولى'}/>
        <VideoList VideoName={'الحلقه الثانيه'}/>
        <VideoList VideoName={'الحلقه الثالثه'}/>
        <VideoList VideoName={'الحلقه الرابعه'}/>
        <VideoList VideoName={'الحلقه الاولى'}/>
        <VideoList VideoName={'الحلقه الثانيه'}/>
        <VideoList VideoName={'الحلقه الثالثه'}/>
        <VideoList VideoName={'الحلقه الرابعه'}/>
        <VideoList VideoName={'الحلقه الاولى'}/>
        <VideoList VideoName={'الحلقه الثانيه'}/>
        <VideoList VideoName={'الحلقه الثالثه'}/>
        <VideoList VideoName={'الحلقه الرابعه'}/>
        <VideoList VideoName={'الحلقه الاولى'}/>
        <VideoList VideoName={'الحلقه الثانيه'}/>
        <VideoList VideoName={'الحلقه الثالثه'}/>
        <VideoList VideoName={'الحلقه الرابعه'}/>
        <VideoList VideoName={'الحلقه الاولى'}/>
        <VideoList VideoName={'الحلقه الثانيه'}/>
        <VideoList VideoName={'الحلقه الثالثه'}/>
        <VideoList VideoName={'الحلقه الرابعه'}/>
        <VideoList VideoName={'الحلقه الاولى'}/>
        <VideoList VideoName={'الحلقه الثانيه'}/>
        <VideoList VideoName={'الحلقه الثالثه'}/>
        <VideoList VideoName={'الحلقه الرابعه'}/>
      </div>
      <div className="right">
        <div className="top">
          <h3>الحصة الاولى</h3>
          <span>د/احمد الصعيدي</span>
        </div>
        <div className="main-video">
          <video controls controlsList="nodownload">
            <source src={Videos} type={"video/mp4"} />
          </video>
        </div>
      </div>
    </main>
  );
};

export default DisplayVideo;
