import React from "react";
import LandingImg from "../../img/landing-img.png";
import "../css/Hero.css";

const Hero = () => {
  return (
    <main className="hero-container">
      <div className="txt-container">
        <h2>الدكتور احمد الصعيدي</h2>
        <p>
          يقدم لكم موقع متكامل لتعلم اللغة العربيه للصفوف الاول / الثاني /
          الثالث الثانوي<br></br>باسلوب شرح مختلف ومتميز ليلبي احتياجاتكم
          المطلوبه حتى التحضير للامتحانات
        </p>
        <div className="btn">
          <a href="/" className="know">تعرف على المزيد</a>
          <a href="/login" className="start">اشترك الآن</a>
        </div>
      </div>
      <div className="img-container">
        <img src={LandingImg} alt="" />
      </div>
    </main>
  );
};

export default Hero;
