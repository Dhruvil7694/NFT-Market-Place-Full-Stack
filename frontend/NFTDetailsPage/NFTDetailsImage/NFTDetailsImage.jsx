import React, { useState, useEffect } from "react";
import Image from "next/image";
import images from "../../img";
import style from "./NFTDetailsImage.module.css";
import { BsImages } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const NFTDetailsImage = () => {
  const [description, setDescription] = useState(true);
  const [details, setDetails] = useState(true);
  const [like, setLike] = useState(false);

  const likeNFT = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const openDescription = () => {
    if (!description) {
      setDescription(true);
    } else {
      setDescription(false);
    }
  };

  const openDetails = () => {
    if (!details) {
      setDetails(true);
    } else {
      setDetails(false);
    }
  };
  return (
    <div className={style.NFTDetailsImage}>
      <div className={style.NFTDetailsImage_box}>
        <div className={style.NFTDetailsImage_box_NFT}>
          <div className={style.NFTDetailsImage_box_NFT_like}>
            <BsImages className={style.NFTDetailsImage_box_NFT_like_icon} />
            <p onClick={() => likeNFT()}>
              {like ? (
                <AiOutlineHeart
                  className={style.NFTDetailsImage_box_NFT_like_icon}
                />
              ) : (
                <AiFillHeart
                  className={style.NFTDetailsImage_box_NFT_like_icon}
                />
              )}
              <span>26</span>
            </p>
          </div>
          <div className={style.NFTDetailsImage_box_NFT_img}>
            <Image
              src={images.nft_image_16}
              alt="NFT IMAGE"
              className={style.NFTDetailsImage_box_NFT_img_img}
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
        </div>
        <div
          className={style.NFTDetailsImage_box_NFT_description}
          onClick={() => openDescription()}
        >
          <p>Description</p>
          {description ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {description && (
          <div className={style.NFTDetailsImage_box_NFT_description_box}>
            <p>
              Own a piece of internet history with Miss ApeThrills, the
              one-of-a-kind NFT sporting a fuchsia fashion statement unlike any
              other. This sassy simian isn't just rocking a banana-emblazoned
              tee, she's rocking a ticket to the exclusive ApeThrills Club, a
              vibrant community of trendsetters and future millionaires. Don't
              miss your chance to ape into the future with Miss ApeThrills - bid
              now before she swings away!
            </p>
          </div>
        )}
        <div
          className={style.NFTDetailsImage_box_NFT_details}
          onClick={() => openDetails()}
        >
          <p>Details</p>
          {details ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
        </div>
        {details && (
          <div className={style.NFTDetailsImage_box_NFT_details_box}>
            <small>2000 x 2000 px.IMAGE(786KB)</small>
            <p>
              Contact Address:{" "}
              <span>0x9f7Sbf6Eb2c4f87O365e785982e1F101e93b90a6</span>
            </p>

            <p>
              Token ID:<span>21SE02IE035</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTDetailsImage;
