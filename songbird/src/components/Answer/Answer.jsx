import React from "react";
import s from "./Answer.module.css";

const Answer = (props) => {
  return (
    <div className={s.answer}>
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
      <AnswerItem />
    </div>
  );
};

const AnswerItem = (props) => {
  return (
    <div className={s.answerItem}>
      <span className={s.dot} />
      <p className={s.answerItem_word}>{props.bird || "Ivolga"}</p>
    </div>
  );
};

export default Answer;
