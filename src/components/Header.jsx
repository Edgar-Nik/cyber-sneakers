import React, { useState } from "react";
// import logo from "../assets/imgs/logo.svg";
// import logoText from "../assets/imgs/logo-text.svg";
import logo from "../assets/imgs/logo/LOGO_Transparent_Background.png";
import logoText from "../assets/imgs/logo/cyber_snakers_only-01.png";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  const handleClick = () => {
    setMenuActive(false);
  };
  return (
    <header className="header">
      <div className="container">
        <a href="/" className="logo-wrapper">
          <img src={logo} alt="" className="logo" />
          <img src={logoText} alt="logo" className="logo-text" />
        </a>
        <div
          onClick={() => {
            setMenuActive(!menuActive);
          }}
          className={menuActive ? "menu-btn menu-active" : "menu-btn"}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul
          className={menuActive ? "header-nav header-nav-active" : "header-nav"}
        >
          <li onClick={handleClick}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleClick}>
            <a href="#roadmap">Roadmap</a>
          </li>
          <li onClick={handleClick}>
            <a href="#features">Features</a>
          </li>
          <li onClick={handleClick}>
            <a href="#team">Teams</a>
          </li>
          <li onClick={handleClick}>
            <a href="#faq">FAQs</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
