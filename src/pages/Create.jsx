import React from "react";
import "../components/css/Create.css";
const Create = () => {
  return (
    <div className="admin-form">
      <h2>إنشاء حساب</h2>
      <div className="email">
        <label htmlFor="Email">ادخل الايميل</label>
        <input type="email" placeholder="example@gmail.com" />
      </div>
      <div className="password">
        <label htmlFor="password">ادخل الباسورد</label>
        <input type="password" placeholder="باسورد الطالب" />
      </div>
      <div className="year">
        <label htmlFor="year">اختر السنه الدراسيه</label>
        <select name="cars" id="cars">
          <option value="volvo">اختر السنه الدراسيه</option>
          <option value="saab">الاول الثانوي</option>
          <option value="opel">الثاني الثانوي</option>
          <option value="audi">الثالث الثانوي</option>
        </select>
      </div>
      <div className="create-btn">
        <a href="/">انشاء الحساب</a>
      </div>
    </div>
  );
};

export default Create;
