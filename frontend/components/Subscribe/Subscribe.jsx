import React from "react";
import style from "./Subscribe.module.css";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={style.subscribe}>
      <div className={style.subscribe_box}>
        <div className={style.subscribe_box_left}>
          <h2>Embrace NFT Drops</h2>
          <p>
            Prepare for a symphony of innovation with upcoming drops and updates
            – your backstage pass to the extraordinary awaits!
          </p>
          <div className={style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>
          <div className={style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>
          <div className={style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill className={style.subscribe_box_left_input_icon}/>
          </div>
        </div>

        <div className={style.subscribe_box_right}>
            <Image src={images.update} alt="get update" width={550} height={400}/>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
