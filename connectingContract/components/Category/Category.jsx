import React from "react";
import style from "./Category.module.css";
import { BsCircleFill } from "react-icons/bs";
import images from "../../img";
import Image from "next/image";

const Category = () => {
  const CategoryArray = [
    images.creatorbackground10,
    images.creatorbackground11,
    images.creatorbackground8,
    images.creatorbackground4,
    images.creatorbackground1,
    images.creatorbackground9,
  ];

  return (
    <div className={style.box_category}>
      <div className={style.category}>
        {CategoryArray.map((el, i) => (
          <div className={style.category_box} key={i + 1}>
            <Image
              src={el}
              className={style.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={style.category_box_title_info}>
                <h4>Enterainment</h4>
                <small>195 NFTs</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
