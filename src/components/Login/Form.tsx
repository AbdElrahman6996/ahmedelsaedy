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
            email,
            password
        })
    }).then(async response => {
        let res: {status: string, code: number, private_token: string} = await response.json() as unknown as {status: string, code: number, private_token: string}
        localStorage.setItem('private_token', res.private_token)
    })
  }
  const handClick = () => {
    sendData(email, password)
  }
  return (
    <main className="form">
      <div className="title">
        <h2>تسجيل الدخول</h2>
      </div>
      <div className="input-div">
        <input type="email" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" minLength={8} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="login-btn">
        <a onClick={handClick}>تسجيل الدخول</a> {/* خليه button بقاااا*/}
      </div>
    </main>
  );
};

export default Form;
