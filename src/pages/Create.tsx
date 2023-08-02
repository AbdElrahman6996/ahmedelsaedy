import React, { useState } from "react";
import "../components/css/Create.css";

const Create = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [year, setYear] = useState("");
  const [eduyear, setEduyear] = useState("");
  const [rsEmail, setRSEmail] = useState('');
  const [videoUrl, setVideoURL] = useState('');
  const idRegex = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user|shorts)\/))([^\?&\"'>]+)/;

  const sendData = async (email: string, password: string, year: string) => {
    if ( !email || !password || year === 'zero' || !year ) return alert('تأكد من ملىء معلومات الحساب قبل الإنشاء');
    await fetch("http://localhost:8000/api/db/register", {
      method: "POST",
      body: JSON.stringify({
        emailAddress: email,
        password: password,
        educationLevel: year,
      }),
      headers: { "Content-Type": "application/json", 'EET': 'klm_5dma_shbak_itsal_KEY_CODE_9991110022_SECRET' },
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
            'Content-Type': 'application/json',
            'EET': 'klm_5dma_shbak_itsal_KEY_CODE_9991110022_SECRET'
        },
        body   : JSON.stringify({
            emailAddress: rsEmail,
            adminKey    : '9b124je37vtdp',
        }),
    }).then(r => r.json()).then(response => {
        return alert(response.reply);
    });
  };

    const addVideoToDatabase = ( ) => {
        if (/^\s*$/.test(videoUrl) || !videoUrl || !eduyear) return alert('يتطلب وضع رابط المقطع بطريقة صحيحة لرفعه على المنصه و اختيار السنة الدراسية.')
        const videoId = idRegex.exec(videoUrl) as unknown as number[];
        return fetch("http://localhost:8000/api/db/add/video", {
            method : 'POST',
            mode   : 'cors',
            headers: {
                'Content-Type': 'application/json',
                'EET': 'klm_5dma_shbak_itsal_KEY_CODE_9991110022_SECRET'
            },
            body   : JSON.stringify({
                vid : videoId[1],
                edul: eduyear,
            }),
        }).then(r => r.json()).then(response => {
            return alert(response.reply);
        });
    };

  return (
    <div className="admin-form">
      <h2>إنشاء حساب</h2>
      <div className="email">
        <label htmlFor="Email">ادخل كود الطالب/ة</label>
        <input
          type="email"
          placeholder="كود مميز للطالب"
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
        <label htmlFor="Video Name">ادخل كود الطالب/ة</label>
        <input
          type="email"
          placeholder="كود مميز للطالب"
          onChange={(e) => setRSEmail(e.target.value)}
        />
      </div>
      <button onClick={() => handleResubButtonClick()}>نجديد الاشتراك</button>
      <h2>رفع حصة</h2>
      <div className="note-video">
        <label htmlFor="Video note">رابط الفيديو</label>
        <input
          type="email"
          placeholder="https://youtube.com/watch?v=XXXXXX"
         onChange={(e) => setVideoURL(e.target.value)}/>
      </div>
      <div className="year">
        <label htmlFor="year">اختر السنه الدراسيه</label>
        <select value={eduyear} onChange={(e) => setEduyear(e.target.value)}>
          <option hidden selected value="zero">اختر السنه الدراسيه</option>
          <option value="first">الاول الثانوي</option>
          <option value="second">الثاني الثانوي</option>
          <option value="third">الثالث الثانوي</option>
        </select>
      </div>
      <button onClick={() => addVideoToDatabase()}>رفع الحصة</button>
    </div>
  );
};

export default Create;
