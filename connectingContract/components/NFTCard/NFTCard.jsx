import style from "./NFTCard.module.css";
import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import images from "../../img";
const NFTCard = () => {
  const featureArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_4,
    images.nft_image_5,
    images.nft_image_6,
    images.nft_image_7,
    images.nft_image_8,
    images.nft_image_1,
  ];

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };
  const [like, setLike] = useState(true);
  return (
    <div className={style.NFTCard}>
      {featureArray.map((el, i) => (
        <div className={style.NFTCard_box} key={i + 1}>
          <div className={style.NFTCard_box_img}>
            <Image
              src={el}
              alt="NFT image"
              width={300}
              height={300}
              className={style.NFTCard_box_img_img}
            />
          </div>
          <div className={style.NFTCard_box_update}>
            <div className={style.NFTCard_box_update_left}>
              <div
                className={style.NFTCard_box_update_left_like}
                onClick={() => likeNft()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={style.NFTCard_box_update_left_like_icon}
                  />
                )}
                {""} 22
              </div>
            </div>
            <div className={style.NFTCard_box_update_right}>
              <div className={style.NFTCard_box_update_right_info}>
                <small>Remaining Time</small>
                <p>3h : 54m : 3s</p>
              </div>
            </div>
          </div>
          <div className={style.NFTCard_box_update_details}>
            <div className={style.NFTCard_box_update_details_price}>
              <div className={style.NFTCard_box_update_details_price_box}>
                <h4>Clone #83472</h4>
                <div className={style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>0.987 ETH</p>
                  </div>
                  <div
                    className={style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>93 In Stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
