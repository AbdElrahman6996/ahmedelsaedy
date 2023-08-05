import React from "react";
import Hero from "../components/Landing/Hero";
import Header from "../components/Video/Header";
import Photos from "../components/Landing/Photos";
import Him from "../components/Landing/Him";

const Landing = () => {
  let year = new Date().getFullYear();
  return (
    <>
      <Header />
      <Hero />
      <Him />
      <Photos />
      <footer style={{
        textAlign: "center",
        direction: "rtl",
        margin: "50px 0px"
      }}>
        <span>جميع حقوق الطبع والنشر محفوظه {year} &copy;</span>
      </footer>
    </>
  );
};

export default Landing;
