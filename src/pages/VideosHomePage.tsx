import React from 'react'
import Header from "../components/Video/Header";
import BottomBar from "../components/Video/BottomBar";
import VideoCard from "../components/Video/VideoCard";

const VideoPage = () => {
  return (
    <>
     <Header />
      <section className="video-container">
        <VideoCard lecNo="الحصة الاولى" />
        <VideoCard lecNo="الحصة الاولى" />
        <VideoCard lecNo="الحصة الاولى" />
        <VideoCard lecNo="الحصة الاولى" />
      </section>
      <BottomBar />
    </>
  )
}

export default VideoPage