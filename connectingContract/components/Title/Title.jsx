import React from "react";
import style from "./Title.module.css";

const Title = ({heading, paragraph}) => {
  return (
    <div className={style.title}>
        <div className={style.title_box}>
            <h2>{heading}</h2>
            <p>{paragraph}</p>
        </div>
    </div>
  );
};

export default Title;
