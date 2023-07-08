import React from "react";
import Header from "./components/Header";
import "./index.css";
import BottomBar from "./components/BottomBar";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    <>
      <Header />
      <section className="video-container">
        <VideoCard
        lecNo="الحصة الاولى"
        />
        <VideoCard
        lecNo="الحصة الاولى"
        />
        <VideoCard
        lecNo="الحصة الاولى"
        />
        <VideoCard
        lecNo="الحصة الاولى"
        />
      </section>
        <BottomBar/>
    </>
  );
}

export default App;
