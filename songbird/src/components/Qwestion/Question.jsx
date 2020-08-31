import React from "react";
import s from "./Question.module.css";
import Bird from "./bird.jpg";

const Question = (props) => {
  return (
    <div className={s.question}>
      <img
        src={props.birdImg || Bird}
        alt="bird"
        width="200px"
        height="150px"
        className={s.birdImg}
      />
      <div className={s.birdInfo}>
        <h3 className={s.birdName}>{props.birdName || "******"}</h3>
        <hr className={s.line} width="80%" align="center" size="1px" />
        <div className={s.audioPlayer}>
          <audio src={props.birdAudio} controls className={s.audio}></audio>
        </div>
      </div>
    </div>
  );
};

export default Question;
