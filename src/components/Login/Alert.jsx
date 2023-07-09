import React from "react";
import "../css/Alert.css";
import WhatsApp from '../../img/whatsapp.png'
import FaceBook from '../../img/facebook.png'
import Phone from '../../img/phone.png'
const Alert = () => {
  return (
    <div className="alert-container">
      <div className="title">
        <h2>ملحوظة</h2>
      </div>
      <div className="main-txt">
        <div className="txt">
          <p>
            في حال رغبتك في حضور حصص الدكتور احمد الصعيدي برجاء التواصل معنا عن
            طريق احد مواقع التواصل الاجتماعي المرفقه في الاسفل او قم بالاتصال
            بنا على احدى الارقام التاليه
          </p>
        </div>
        <div className="social-media">
          <div>
            <img src={Phone} alt="" />
            <a href="/">+2012345678</a>
          </div>
          <div>
            <img src={WhatsApp} alt="" />
            <a href="/">+2012345678</a>
          </div>
          <div>
            <img src={FaceBook} alt="" />
            <a href="/">احمد الصعيدي</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
