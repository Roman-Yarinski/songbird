import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}></div>
      <div className={s.score}>Score: 0</div>
    </header>
  );
};
export default Header;
