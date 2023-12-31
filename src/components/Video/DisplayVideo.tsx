import { createRef } from "react";
import "../css/DisplayVideo.css";

const DisplayVideo = () => {
    const iframe = createRef<HTMLIFrameElement>();

  return (
    <main className="display-video">
      <div className="right">
        <div className="top">
        </div>
        <div className="main-video">
            <iframe width={720} height={360} ref={iframe} src={`https://www.youtube.com/embed/${new URLSearchParams(window.location.search).get('id')}?enablejsapi=1&origin=http://localhost:3000&rel=0`} title="Learn Bevy 0.10 - EP10 - Bevy UI (User Interface Tutorial)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      </div>
    </main>
  );
};

export default DisplayVideo;
