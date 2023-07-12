import React, { useState } from "react";
import "../components/css/Create.css";

const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");

  const sendData = async (email: string, password: string, year: string) => {
    await fetch("http://localhost:3000/api/db/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        year,
        joinedAt: new Date().toUTCString(),
      }),
      headers: { "Content-Type": "application/json" },
    }).then(async (respnse) => {
      const res: {
        sessionToken: string;
      } = (await respnse.json()) as unknown as {
        sessionToken: string;
      };
      localStorage.setItem("private_token", res.sessionToken);
    });
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
        <select value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="zero">اختر السنه الدراسيه</option>
          <option value="first">الاول الثانوي</option>
          <option value="second">الثاني الثانوي</option>
          <option value="third">الثالث الثانوي</option>
        </select>
      </div>
      <div className="create-btn">
        <button onClick={handleClick}>انشاء الحساب</button>
      </div>
      <h2>تجديد اشتراك</h2>
      <div className="renew">
        <label htmlFor="Video Name">ادخل البريد الالكتروني</label>
        <input
           type="email"
           placeholder="example@gmail.com"
        />
      </div>
      <h2>رفع حصة</h2>
      <div className="name-video">
        <label htmlFor="Video Name">اسم الفديو</label>
        <input
          type="email"
          placeholder="الحصة الاولى ( نحو )"
        />
      </div>
      <div className="note-video">
        <label htmlFor="Video note">العنوان الفرعي للحصه</label>
        <input
          type="email"
          placeholder="الفصل الاول من القصة (الايام )"
        />
      </div>
      <div className="picture-video">
        <label htmlFor="pic">اختيار الصوره المصغره</label>
        <input
          type="file"
        />
      </div>
      <div className="main-video">
        <label htmlFor="pic">اختيار مقطع الفديو</label>
        <input
          type="file"
        />
      </div>
      <button>رفع الحصة</button>
    </div>
  );
};

export default Create;
