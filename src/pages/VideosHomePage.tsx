import React, { useEffect, useState } from 'react'
import Header from "../components/Video/Header";
import BottomBar from "../components/Video/BottomBar";
import VideoCard from "../components/Video/VideoCard";

const VideoPage = () => {
    const [getVideos, setVideos] = useState([{}]);

    useEffect(( ) => {
        const level = Number(localStorage.getItem('edul') || 1);
        fetch(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDUCz4h_WyzIIsMi6ww6PbRQgd67NnELLo&channelId=${ level == 1 ? 'UCA6aBGk_216jny3vhyJl8sQ' : level == 2 ? 'UCA6aBGk_216jny3vhyJl8sQ' : 'UCA6aBGk_216jny3vhyJl8sQ' }&part=snippet,id&order=date&maxResults=50`, {
            cache: 'reload'
        }).then(r=>r.json()).then(res => {
            const newList = (res as unknown as {
                items: [{
                    id: {
                        videoId: string
                    },
                    snippet: {
                        title     : string,
                        thumbnails: {
                            high: {
                                url: string
                            }
                        }
                    }
                }]
            });

            const nl = newList.items.map(i => {
                if ( i.id.videoId != undefined )
                {
                    return {
                        vid   : i.id.videoId,
                        title : i.snippet.title,
                        img   : i.snippet.thumbnails.high.url,
                    }
                }
                else 
                {
                    return;
                }
            }).filter(i => i != undefined);

            return setVideos(nl as unknown as {}[]);
        });
    }, []);

    return (
        <>
        <Header />
            <section className="video-container">
                { getVideos ? getVideos.map((video, index) => (
                    <div className='video-ele' key={index} onClick={() => {
                        window.location.href = `/video?id=${(video as unknown as {
                            vid  : string,
                            title: string,
                            img  : string,
                        }).vid}`
                    }}>
                        <img src={(video as unknown as {
                            vid  : string,
                            title: string,
                            img  : string,
                        }).img}/>
                        <p>{(video as unknown as {
                            vid  : string,
                            title: string,
                            img  : string,
                        }).title}</p>
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