import React from "react";
import "./index.css";
import VideoPage from "./pages/VideosHomePage";


function App() {
  let components;
  switch (window.location.pathname) {
    case "/":
      components = <VideoPage/>
      break;
    // case "/video":
    //   components = <Product />;
    //   break;
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
