import React, { useState } from "react";
import style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "@/collectionPages/collectionIndex";
import Image from "next/image";
import FollowerTabCard from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";
const AuthorNFTCardBox = ({
  collectiable,
  created,
  like,
  follower,
  following,
}) => {
  const collectiablesArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
    images.nft_image_6,
    images.nft_image_7,
    images.nft_image_8,
    images.nft_image_9,
    images.nft_image_11,
    images.nft_image_12,
    images.nft_image_13,
    images.nft_image_14,
    images.nft_image_15,
    images.nft_image_16,
    images.nft_image_17,
  ];

  const createdArray = [
    images.nft_image_9,
    images.nft_image_13,
    images.nft_image_11,
    images.nft_image_12,
  ];

  const likeArray = [
    images.nft_image_14,
    images.nft_image_15,
    images.nft_image_16,
    images.nft_image_17,
    images.nft_image_18,
    images.nft_image_19,
    images.nft_image_20,
  ];
  const followerArray = [
    {
      background: images.creatorbackground11,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];

  const followingArray = [
    {
      background: images.creatorbackground7,
      user: images.user3,
    },
    {
      background: images.creatorbackground8,
      user: images.user4,
    },
    {
      background: images.creatorbackground9,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground5,
      user: images.user1,
    },
  ];
  return (
    <div className={style.AuthorNFTCardBox}>
      {collectiable && <NFTCardTwo NFTData={collectiablesArray} />}
      {created && <NFTCardTwo NFTData={createdArray} />}
      {like && <NFTCardTwo NFTData={likeArray} />}
      {follower && (
        <div className={style.AuthorNFTCardBox_box}>
          {followerArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
      {following && (
        <div className={style.AuthorNFTCardBox_box}>
          {followingArray.map((el, i) => (
            <FollowerTabCard i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;
