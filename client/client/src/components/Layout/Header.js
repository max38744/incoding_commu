import React from "react";
import logo from "../imgs/logo.png";

const Header = () => {
  return (
    <div style={{ display: 'inline-block', width: '7.6rem', height: '7.6rem' }}>
      <a href="/">
        <img
          style={{
            position: 'absolute',
            width: '7.6rem',
            height: '7.6rem',
            left: '4.7rem',
            top: '2rem',
          }}
          src={logo}
          alt="로고"
        ></img>
      </a>
    </div>
  );
};

export default Header;
