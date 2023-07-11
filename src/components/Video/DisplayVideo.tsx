import React, { useEffect, useState } from "react";
import VideoList from './VideoList'
import "../css/DisplayVideo.css";

const apiLink = 'http://localhost:8000/api';

const DisplayVideo = () => {
  const [videoURL, setVideoURL] = useState('');

  useEffect(() => {
    const fetchVideoURL = async () => {
      try {
        const res = await fetch(apiLink + '/db/video', {
          method: 'POST',
          headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        setVideoURL(data.videoURL);
      } catch (error) {
        console.error("Error fetching video URL:", error);
      }
    };

    fetchVideoURL();
  }, []);

  return (
    <main className="display-video">
      <div className="left">
        <h4>فهرس الفديوهات</h4>
        <VideoList VideoName={'الحلقه الاولى'}/>
      </div>
      <div className="right">
        <div className="top">
          <h3>الحصة الاولى</h3>
          <span>د/احمد الصعيدي</span>
        </div>
        <div className="main-video">
          <video controls controlsList="nodownload" autoPlay>
            {videoURL && (
              <source src={videoURL} type="video/mp4" />
            )}
          </video>
        </div>
      </div>
    </main>
  );
};

export default DisplayVideo;
