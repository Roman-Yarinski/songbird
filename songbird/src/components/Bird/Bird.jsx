import React from "react";
import s from "./Bird.module.css";

const Bird = () => {
  return (
    <div className={s.bird}>
      <p className={s.birdInfo_text}>
        Послушайте плеер.
        <br />
        Выберите птицу из списка
      </p>
    </div>
  );
};

const BirdRes = (props) => {
  return (
    <>
      <div className={s.birdInfo}>
        <img className={s.birdInfo_img} src={props.img}></img>
        <div className={s.birdInfo_Naming}>
          <p className={s.birdInfo_Name}></p>
          <p className={s.birdInfo_NameLA}></p>
          <audio src="/"></audio>
        </div>
      </div>
      <p className={s.birdInfo_text}></p>
    </>
  );
};

export default Bird;
