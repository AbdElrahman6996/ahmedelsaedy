import React from "react";
import "../css/Loginheader.css";
import AccountIcon from '../../icons/account.svg'
const Header = () => {
  return (
    <div className="loginheader">
      <div className="left">
        <a href="/">الدكتور احمد الصعيدي</a>
      </div>
      <div className="right">
        <a href="/">
          <img src={AccountIcon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
