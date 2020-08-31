import React from "react";
import s from "./Topic.module.css";

const Topic = (props) => {
  return (
    <div className={s.topic}>
      <TopicItem topic="Разминка" numder={0} current={props.page} />
      <TopicItem topic="Воробьиные" numder={1} current={props.page} />
      <TopicItem topic="Лесные птицы" numder={2} current={props.page} />
      <TopicItem topic="Певчие птицы" numder={3} current={props.page} />
      <TopicItem topic="Хищные птицы" numder={4} current={props.page} />
      <TopicItem topic="Морские птицы" numder={5} current={props.page} />
    </div>
  );
};

const TopicItem = (props) => {
  if (props.numder === props.current) {
    return (
      <div className={s.topicItem +' '+ 'current'}>
        <p className={s.topicName}>{props.topic}</p>
      </div>
    );
  } else {
    return (
      <div className={s.topicItem}>
        <p className={s.topicName}>{props.topic}</p>
      </div>
    );
  }
};

export default Topic;
