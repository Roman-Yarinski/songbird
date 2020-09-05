import React from "react";
import s from "./ButtonNext.module.css";


const ButtonNext = (props) => {
  return (
    <button className={s.buttonNext} onClick={() => {props.clickHandler()}} disabled={props.disabled}>Next</button>
  )
} 

export default ButtonNext;
