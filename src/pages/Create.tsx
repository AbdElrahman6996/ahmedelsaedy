import React, { useState } from "react";
import "../components/css/Create.css";

const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");
  const [rsEmail, setRSEmail] = useState('');

  const sendData = async (email: string, password: string, year: string) => {
    if ( !email || !password || year === 'zero' || !year ) return alert('تأكد من ملىء معلومات الحساب قبل الإنشاء');
    await fetch("http://localhost:8000/api/db/register", {
      method: "POST",
      body: JSON.stringify({
        emailAddress: email,
        password: password,
        educationLevel: year,
      }),
      headers: { "Content-Type": "application/json" },
    }).then(r => r.json()).then(response => {
        // What will you do with the response
        /*
            {
                reply  : 'تم انشاء الحساب',
                message: 'Created the account',
                code   : 200,
            }
        */

        return alert(response.reply);
    });
  };

  const handleClick = () => {
    sendData(email, password, year);
  };

  const handleResubButtonClick = () => {
    if ( !rsEmail ) return alert('يرجى ادخال البريد الألكتروني لدى الحساب بطريقة صحيحة');
    return fetch("http://localhost:8000/api/db/resub", {
        method : 'POST',
        mode   : 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body   : JSON.stringify({
            emailAddress: rsEmail,
            adminKey    : '9b124je37vtdp',
        }),
    }).then(r => r.json()).then(response => {
        return alert(response.reply);
    });
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
          <option hidden selected value="zero">اختر السنه الدراسيه</option>
          <option value="first">الاول الثانوي</option>
          <option value="second">الثاني الثانوي</option>
          <option value="third">الثالث الثانوي</option>
        </select>
      </div>
      <div className="create-btn">
        <button onClick={() => handleClick()}>انشاء الحساب</button>
      </div>
      <h2>تجديد اشتراك</h2>
      <div className="renew">
        <label htmlFor="Video Name">ادخل البريد الالكتروني</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          onChange={(e) => setRSEmail(e.target.value)}
        />
      </div>
      <button onClick={() => handleResubButtonClick()}>نجديد الاشتراك</button>
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
