import React from "react";
import s from "./Topic.module.css";

const Topic = () => {
  return <div className={s.topic}>
    <TopicItem topic='Разминка' />
    <TopicItem topic='Воробьиные' />
    <TopicItem topic='Лесные птицы' />
    <TopicItem topic='Певчие птицы' />
    <TopicItem topic='Хищные птицы' />
    <TopicItem topic='Морские птицы' />
  </div>;
};

const TopicItem = (props) => {
  return (
  <div className={s.topicItem}>
    <p className={s.topicName}>{props.topic}</p>
  </div>)
};

export default Topic;
