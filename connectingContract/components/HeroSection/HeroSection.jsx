import React, { useContext, useEffect, useState } from "react";
import style from "./heroSection.module.css";
import Image from "next/image";
import images from "../../img";
import { Button } from "@/components/componentIndex";

//smart contract import
import { NFTMarketPlaceContext } from "@/Context/NFTMarketPlaceContext";
const HeroSection = () => {
  const { titleData } = useContext(NFTMarketPlaceContext);
  return (
    <div className={style.heroSection}>
      <div className={style.heroSection_box}>
        <div className={style.heroSection_box_left}>
          <h1>{titleData}</h1>
          <p>
            Dive into a symphony of rarity. Crafting Crypto — where each NFT is
            a masterpiece, and your collection is a statement of individuality.
          </p>

          <Button btnName="Explore Now" />
        </div>
        <div className={style.heroSection_box_right}>
          <Image
            src={images.hero2}
            alt="Hero Image"
            width={550}
            height={400}
            className={style.heroSection_box_right_img}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
