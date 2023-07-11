import React from "react";
import "./index.css";
import VideoPage from "./pages/VideosHomePage";
import Video from "./pages/Video";
import Login from "./pages/Login";
import Admin from "./pages/Create";
import Landing from "./pages/Landing";

function App() {
  let components;
  switch (window.location.pathname) {
    case "/":
      components = <Landing/>
      break;
    case "/videos":
      components = <VideoPage/>
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
      components = <Landing />;
      break;
  }
  return <>{components}</>;
}

export default App;
