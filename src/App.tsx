import "./index.css";
import VideoPage from "./pages/VideosHomePage";
import Video from "./pages/Video";
import Login from "./pages/Login";
import Admin from "./pages/Create";
import Landing from "./pages/Landing";

function App() {
    const ahmedElSaedy_Mail = 'tests22@gmail.com';

    const check = ( ) => {
        if ( localStorage.getItem('eadd') !== null && localStorage.getItem('eadd') !== ahmedElSaedy_Mail )
        {
            return (async () => {
                return await fetch('http://localhost:8000/api/db/user/sub/status?email=' + encodeURIComponent(localStorage.getItem('eadd')?.toString() || ''), {
                }).then(r => r.json()).then(response => {
                    if (response.code === 200) {
                        return 'NA_S';
                    }
                    else {
                        return 'NA_B';
                    };
                });
            })() as unknown as 'NA_S' | 'NA_B';
        }
        
        if ( localStorage.getItem('eadd') === ahmedElSaedy_Mail )
        {
            return 'NA_SB';
        }
    };

    let components;
  (async ( ) => {
    switch (window.location.pathname) {
        case "/":
            components = <Landing/>
            break;
        case "/videos":
            components = <VideoPage/>;
            break;
        case "/video":
            components = <Video />;
            break;
        case "/login":
            components = <Login />;
            break;
        case "/admin":
            const e = check();

            if (e === 'NA_SB') components = <Admin />;
            else if(e === 'NA_B') window.location.href = '/';

            break;
        default:
          components = <Landing />;
          break;
      }
    })();
    return <>{components}</>;
}

export default App;
