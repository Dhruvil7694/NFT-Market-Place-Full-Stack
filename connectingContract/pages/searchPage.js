import React from "react";
import style from "../styles/searchPage.module.css";
import { Slider, Brand } from "@/components/componentIndex";
import { Filter } from "@/components/componentIndex";
import { NFTCardTwo } from "@/collectionPages/collectionIndex";
import { SearchBar } from "@/searchPage/SearchBarIndex";
import images from "../img";
const searchPage = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
    images.nft_image_6,
  ];
  return (
    <div className={style.searchPage}>
      <div className={style.searchPage_box}>
        <SearchBar  />
        <Filter />
      </div>

      <NFTCardTwo NFTData={collectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;
