import React from "react";
import logo from "../imgs/logo.png";

const Header = () => {
  return (
    <div style={{ display: 'block', verticalAlign:"middle", }}>
      <a href="/" style={{ display :'flex', justifyContent : 'center'}}>
        <img
          style={{
            width: '10rem',
            height: '10rem',
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
