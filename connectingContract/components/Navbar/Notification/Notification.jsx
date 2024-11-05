import React from "react";
import style from "./Notification.module.css";
import Image from "next/image";
import images from "../../../img";

const Notification = () => {
  return (
    <div className={style.notification}>
      <p>Notification</p>
      <div className={style.notification_box}>
        <div className={style.notification_box_img}>
          <Image
            src={images.user1}
            alt="Profile Image"
            width={50}
            height={50}
            className={style.notification_img}
          />
        </div>
        <div className={style.notification_box_info}>
          <h4>Dhruvil Patel</h4>
          <p>This is your address...</p>
          <small>3 minutes ago</small>
        </div>
        <span className={style.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
