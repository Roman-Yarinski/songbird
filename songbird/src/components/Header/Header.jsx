import React from "react";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logo}></div>
      <div className={s.score}>Score: {props.score}</div>
    </header>
  );
};
export default Header;
