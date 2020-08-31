import React from "react";
import s from "./End.module.css";

const End = (props) => {
  if (props.score === 30) {
    return (
      <div className={s.contener}>
        <h1 className={s.mainText}>
          Поздравляю вы ответили на все вопросы без ошибок!
        </h1>
        <h2 className={s.text}>Вы лучший, если речь идёт о звуках птиц.</h2>
        <h6>(Не представляю как это тебе пригодится в жизни)</h6>
      </div>
    );
  } else {
    return (
      <div className={s.contener}>
        <h1 className={s.mainText}>
          Поздравляю вы ответили на все, но вы не угадали голоса всех птиц с
          первой попытки!
        </h1>
        <h2 className={s.text}>
          Вы далеко не лучший, если речь идёт о звуках птиц.
        </h2>
        <h3>Перезарузи сраницу и попробуй ещё раз! </h3>
        <h6>(не представляю как это тебе пригодится в жизни)</h6>
        {/* <button onClick={window.location.reload}>Пройти ещё раз</button> */}
      </div>
    );
  }
};

export default End;
