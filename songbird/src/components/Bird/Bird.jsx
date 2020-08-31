import React from "react";
import s from "./Bird.module.css";
import BirdData from "../../data";

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
  const level = BirdData[props.level];
  const bird = BirdData[props.level][props.bird];
  return (
    <div className={s.bird}>
      <div className={s.birdInfo}>
        <img
          className={s.birdInfo_img}
          src={bird.image}
          width="200"
          height="150"
        ></img>
        <div className={s.birdInfo_Naming}>
          <p className={s.birdInfo_Name}>{bird.name}</p>
          <p className={s.birdInfo_NameLA}>{bird.species}</p>
          <audio src={bird.audio} controls className={s.audioBird}></audio>
        </div>
      </div>
      <p className={s.birdInfo_text}>{bird.description}</p>
    </div>
  );
};

export { BirdRes, Bird };
