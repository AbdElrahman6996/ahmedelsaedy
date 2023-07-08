import React from "react";
import AccountIcon from "../icons/account.svg";
import HimImg from "../img/him.png";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <div className="left">
        <a href="/">الدكتور احمد الصعيدي</a>
      </div>
      <div className="mid">
        <img src={HimImg} alt="" />
      </div>
      <div className="right">
        <a href="/">
          <img src={AccountIcon} alt="" />
        </a>
      </div>
    </header>
  );
};

export default Header;
