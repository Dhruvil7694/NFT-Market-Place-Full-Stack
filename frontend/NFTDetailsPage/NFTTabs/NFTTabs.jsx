import React from "react";
import style from "./NFTTabs.module.css";
import Image from "next/image";
import images from "../../img";
const NFTTabs = ({ dataTab, icon }) => {
  return (
    <div className={style.NFTTabs}>
      {dataTab.map((el, i) => (
        <div className={style.NFTTabs_box}>
          <Image
            src={el}
            alt="profile image"
            width={40}
            height={40}
            className={style.NFTTabs_box_img}
          />
          <div className={style.NFTTabs_box_info}>
            <span>
              offer by $769.99 by <span>Chulbul Pandey</span> {icon}
            </span>

            <small>Jun 14 - 3.00 PM (IST)</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTTabs;
