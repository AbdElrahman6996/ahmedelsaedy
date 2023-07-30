import React, { useEffect, useState, createRef } from "react";
import VideoList from './VideoList'
import "../css/DisplayVideo.css";

const apiLink = 'http://localhost:8000/api';

const DisplayVideo = () => {
    const iframe = createRef<HTMLIFrameElement>();
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
    
    setInterval(( ) => {
        if (document.hasFocus()) {
            navigator.clipboard.writeText('');
        }
    }, 64);
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
            <iframe width={720} height={360} ref={iframe} src={`https://www.youtube.com/embed/${new URLSearchParams(window.location.search).get('id')}?enablejsapi=1&origin=http://localhost:3000&rel=0`} title="Learn Bevy 0.10 - EP10 - Bevy UI (User Interface Tutorial)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </main>
  );
};

export default DisplayVideo;
