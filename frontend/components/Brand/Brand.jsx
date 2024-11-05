import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import Button from "../Button/Button";

const Brand = () => {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <h1>Earn free crypto with Crafting Crypto</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button btnName="Create" handleClick={() => {}} />
            <Button btnName="Discover" handleClick={() => {}} />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} alt="brand logo" width={600} height={450} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
