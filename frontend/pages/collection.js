import React from "react";
import style from "../styles/collection.module.css";
import images from "../img";
import { CollectionProfile } from "../collectionPages/collectionIndex";
import { Filter } from "../components/componentIndex";
import { NFTCardTwo } from "../collectionPages/collectionIndex";

const collection = () => {
  const collectionArray = [
    images.nft_image_11,
    images.nft_image_12,
    images.nft_image_13,
    images.nft_image_14,
    images.nft_image_15,
    images.nft_image_16,
    images.nft_image_17,
    images.nft_image_18,
    images.nft_image_19,
    images.nft_image_20,
    images.nft_image_21,
    images.nft_image_22,
    images.nft_image_23,
    images.nft_image_24,
    images.nft_image_25,
    images.nft_image_26,
    images.nft_image_27,
  ];
  return (
    <div className={style.collection}>
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray} />
    </div>
  );
};

export default collection;
