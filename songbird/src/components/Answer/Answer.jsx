import React from "react";
import s from "./Answer.module.css";


const AnswerItem = (props) => {
  return (
    <button className={s.answerItem} id={props.number} onClick={props.clickHandler} disabled={props.disabled}>
      <span className={s.dot} />
      <p className={s.answerItem_word} id={props.number}>{props.birdName || "BirdName"}</p>
    </button>
  );
};

export default AnswerItem;
