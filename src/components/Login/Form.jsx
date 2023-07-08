import React from "react";
import '../css/Form.css'
const Form = () => {
  return (
    <main className="form">
      <div className="title">
        <h2>تسجيل الدخول</h2>
      </div>
      <div className="input-div">
        <input type="email" placeholder="example@gmail.com"/>
        <input type="password" minLength={8} placeholder="Password"/>
      </div>
      <div className="login-btn">
        <a href="/">تسجيل الدخول</a>
      </div>
    </main>
  );
};

export default Form;
