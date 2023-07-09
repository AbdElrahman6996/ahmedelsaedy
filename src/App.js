import React from "react";
import "./index.css";
import VideoPage from "./pages/VideosHomePage";
import Video from "./pages/Video";
import Login from "./pages/Login";
import Admin from "./pages/Create";

function App() {
  let components;
  switch (window.location.pathname) {
    case "/":
      components = <VideoPage />;
      break;
    case "/video":
      components = <Video />;
      break;
    case "/login":
      components = <Login />;
      break;
    case "/admin":
      components = <Admin />;
      break;
    default:
      components = <VideoPage />;
      break;
  }
  return <>{components}</>;
}

export default App;
