import React, {useState} from "react";
import '../css/Form.css'
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emsg, setEmsg] = useState('');

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

        setEmsg(response.reply);
        setTimeout(( ) => setEmsg(''), 6 * 1024)

        if ( response.code === 200 )
        {
            localStorage.setItem('edul', response.edul);
            localStorage.setItem('eadd', email);
            setTimeout(( ) => window.location.href = '/videos', 2 * 1024)
        }

        return;
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
        <span>{emsg}</span>
      </div>
      <div className="input-div">
        <input type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" minLength={8} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="login-btn">
        <a href="#" style={{
            cursor: 'pointer',
            userSelect: 'none',
        }} onClick={handClick}>تسجيل الدخول</a> {/* خليه button بقاااا*/}
      </div>
    </main>
  );
};

export default Form;
