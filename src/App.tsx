import "./index.css";
import VideoPage from "./pages/VideosHomePage";
import Video from "./pages/Video";
import Login from "./pages/Login";
import Admin from "./pages/Create";
import Landing from "./pages/Landing";

function App() {
    const ahmedElSaedy_Mail = 'test22@gmail.com';

    const checker = ( ) => {
        fetch('http://localhost:8000/api/db/user/sub/status?email=' + encodeURIComponent(localStorage.getItem('eadd')?.toString() || ''), {
            headers: {
                'EET': 'klm_5dma_shbak_itsal_KEY_CODE_9991110022_SECRET'
            }
        }).then(r => r.json()).then(response => {
            const endp = '/' + window.location.href.split('/')[window.location.href.split('/').length - 1].trim();
            if (response.code === 200) {
                if ( endp == '/admin' && (localStorage.getItem('eadd') as unknown as string) != ahmedElSaedy_Mail ) return window.location.href = '/';
                else return;
            } else {
                if ( endp != '/' && endp != '/login' ) {
                    localStorage.clear();
                    return window.location.href = '/';
                }
                else return;
            }
        });
    }

    let components;
  (async ( ) => {
    switch (window.location.pathname) {
        case "/":
            checker();
            components = <Landing/>
            break;
        case "/videos":
            checker();
            components = <VideoPage/>;
            break;
        case "/video":
            checker();
            components = <Video />;
            break;
        case "/login":
            checker();
            components = <Login />;
            break;
        case "/admin":
            checker();
            components = <Admin />;
            break;
        default:
            checker();
            components = <Landing />;
          break;
      }
    })();
    return <>{components}</>;
}

export default App;
