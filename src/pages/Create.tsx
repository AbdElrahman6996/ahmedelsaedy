import React, { useState } from "react";
import "../components/css/Create.css";

const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");

  const sendData = async (email: string, password: string, year: string) => {
    await fetch("http://localhost:8000/api/db/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        year,
        joinedAt: new Date().toUTCString()
      }),
      headers: {"Content-Type": 'application/json'}
    }).then(async respnse => {
        const res: {
            sessionToken: string
        } = await respnse.json() as unknown as {
            sessionToken: string
        };
        localStorage.setItem('private_token', res.sessionToken)
    })
  };

  const handleClick = () => {
    sendData(email, password, year);
  };

  return (
    <div className="admin-form">
      <h2>إنشاء حساب</h2>
      <div className="email">
        <label htmlFor="Email">ادخل الايميل</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="password">
        <label htmlFor="password">ادخل الباسورد</label>
        <input
          type="password"
          placeholder="باسورد الطالب"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="year">
        <label htmlFor="year">اختر السنه الدراسيه</label>
        <select
          name="cars"
          id="cars"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="zero">اختر السنه الدراسيه</option>
          <option value="first">الاول الثانوي</option>
          <option value="second">الثاني الثانوي</option>
          <option value="third">الثالث الثانوي</option>
        </select>
      </div>
      <div className="create-btn">
        <button onClick={handleClick}>انشاء الحساب</button>
      </div>
    </div>
  );
};

export default Create;
