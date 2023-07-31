import { useEffect, useState } from 'react'
import Header from "../components/Video/Header";
import BottomBar from "../components/Video/BottomBar";

const VideoPage = () => {
    const [getVideos, setVideos] = useState([{}]);

    useEffect(( ) => {
        const level = Number(localStorage.getItem('edul') || 1);
        fetch("http://localhost:8000/api/db/get/video?edul=" + (level === 1 ? 'first' : level === 2 ? 'second' : 'third'), {
            method : 'GET',
            mode   : 'cors',
            headers: {
                'Content-Type': 'application/json',
                'EET': 'klm_5dma_shbak_itsal_KEY_CODE_9991110022_SECRET'
            },
        }).then(r => r.json()).then(response => {
            return setVideos(response.data);
        });
    }, []);

    return (
        <>
        <Header />
            <section className="video-container">
                { getVideos ? getVideos.map((video, index) => (
                    <div className='video-ele' key={index} onClick={() => {
                        window.location.href = `/video?id=${(video as unknown as {
                            videoId   : string,
                            videoImage: string,
                            videoTitle: string,
                        }).videoId}`
                    }}>
                        <img src={(video as unknown as {
                            videoId   : string,
                            videoImage: string,
                            videoTitle: string,
                        }).videoImage} alt={(video as unknown as {
                            videoId   : string,
                            videoImage: string,
                            videoTitle: string,
                        }).videoTitle}/>
                        <p>{(video as unknown as {
                            videoId   : string,
                            videoImage: string,
                            videoTitle: string,
                        }).videoTitle}</p>
                    </div>
                )) : <p>Loading ..</p> }
            </section>
        <BottomBar />
        {
            // LINK: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDUCz4h_WyzIIsMi6ww6PbRQgd67NnELLo&channelId={CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
            // LINK: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDUCz4h_WyzIIsMi6ww6PbRQgd67NnELLo&channelId={CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
            // LINK: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDUCz4h_WyzIIsMi6ww6PbRQgd67NnELLo&channelId={CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
        }
        </>
    )
}

export default VideoPage