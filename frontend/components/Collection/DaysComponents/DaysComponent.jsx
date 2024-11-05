import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//INTERNAL IMPORT
import style from "./DaysComponent.module.css";
import images from "../../../img";

const DaysComponent = ({el , i}) => {
  return (
    <div className={style.dayscomponent}>
      <div className={style.dayscomponent_box}>
        <div className={style.dayscomponent_box_img}>
          <Image
            src={el.background}
            className={style.dayscomponent_box_img_img}
            alt="Collection image"
            width={287}
            height={180}
            objectFit="cover"
          />
        </div>
        <div className={style.dayscomponent_box_profile}>
          <Image
            src={images.creatorbackground11}
            alt="collection image 2"
            width={80}
            height={80}
            objectFit="cover"
            className={style.dayscomponent_box_img_1}
          />
          <Image
            src={images.creatorbackground11}
            alt="collection image 2"
            width={80}
            height={80}
            objectFit="cover"
            className={style.dayscomponent_box_img_2}
          />
          <Image
            src={images.creatorbackground11}
            alt="collection image 2"
            width={80}
            height={80}
            objectFit="cover"
            className={style.dayscomponent_box_img_3}
          />
        </div>
        <div className={style.dayscomponent_box_title}>
          <h2>Beyond Ordinary</h2>
          <div className={style.dayscomponent_box_title_info}>
            <div className={style.dayscomponent_box_title_info_profile}>
              <Image
                src={el.user}
                alt="user image"
                width={30}
                height={30}
                objectFit="cover"
                className={style.dayscomponent_box_title_info_profile_img}
              />
              <p>
                Crafted by{""}
                <span>
                  Dhruvil Patel{""}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>
            <div className={style.dayscomponent_box_title_info_price}>
              <small>1.2598 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponent;
