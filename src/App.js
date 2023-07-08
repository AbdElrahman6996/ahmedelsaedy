import React from "react";
import "./index.css";
import VideoPage from "./pages/VideosHomePage";
import Video from "./pages/Video";


function App() {
  let components;
  switch (window.location.pathname) {
    case "/":
      components = <VideoPage/>
      break;
    case "/video":
      components = <Video/>;
      break;
    default:
      components = <VideoPage/>
      break;
  }
  return (
    <>
     {components}
    </>
  );
}

export default App;
