import React from "react";
import "./Footer.css";
import Wave from "../../assets/img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>charismunandar29@gmail.com</span>
        <div className="f-icons">
          <a href="https://github.com/harismunandarr" target="_blank"><Github color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/haris-munandar-32a192216/" target="_blank"><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://www.instagram.com/harissmunandarr/?hl=id" target="_blank"><Insta color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
