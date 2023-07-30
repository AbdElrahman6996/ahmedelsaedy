import React, {useState} from "react";
import '../css/Form.css'
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const sendData = async (email: string, password: string) => {
    await fetch('http://localhost:8000/api/db/login', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            emailAddress: email,
            password: password
        })
    }).then(r => r.json()).then(response => {
        // What will you do with the response
        /*
            {
                reply  : 'جاري تسجيل الدخول الى الحساب...',
                edul   : 1.2.3,
                message: 'The account were found in the mdb',
                code   : 200,
            }
        */

        // Write the logic.
        // You can get the latest 50 videos (yt api max results).
        // edul is the education level of the account, first is 1, second is 2 and third is 3
        localStorage.setItem('edul', response.edul); // Saves the eudl as a localStorage item, Can be used to gain the videos
        // LINK: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDUCz4h_WyzIIsMi6ww6PbRQgd67NnELLo&channelId={CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
        // LINK: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDUCz4h_WyzIIsMi6ww6PbRQgd67NnELLo&channelId={CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
        // LINK: `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDUCz4h_WyzIIsMi6ww6PbRQgd67NnELLo&channelId={CHANNEL_ID}&part=snippet,id&order=date&maxResults=50`
    });
  }
  const handClick = () => {
    sendData(email, password)
  }
  return (
    <main className="form">
      <div className="title">
        <h2>تسجيل الدخول</h2>
      </div>
      <div className="error-div">
        <span>Error Message</span>
      </div>
      <div className="input-div">
        <input type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" minLength={8} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="login-btn">
        <a  onClick={handClick}>تسجيل الدخول</a> {/* خليه button بقاااا*/}
      </div>
    </main>
  );
};

export default Form;
