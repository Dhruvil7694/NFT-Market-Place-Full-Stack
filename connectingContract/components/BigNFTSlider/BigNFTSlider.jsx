import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import style from "./BigNFtSlider.module.css";
import images from "../../img";
import Button from "../Button/Button";
import { Title } from "../componentIndex";

const BigNFTSlider = () => {
  const [idNumber, setIdNumber] = useState(0);
  const sliderData = [
    {
      title: "Urban Monkey Gap",
      id: 1,
      name: "NFT1",
      collection: "monkeys",
      price: "00000053425 ETH",
      like: 234,
      image: images.user1,
      nftImage: images.nft_image_1,
      dollarRate: " ($21.99)",
      time: {
        days: 27,
        hours: 7,
        minutes: 45,
        seconds: 31,
      },
    },
    {
      title: "Asian Monkey",
      id: 2,
      name: "NFT2",
      collection: "monkeys",
      price: "00000023895 ETH",
      like: 453,
      image: images.user2,
      nftImage: images.nft_image_2,
      dollarRate: " ($11.50)",
      time: {
        days: 22,
        hours: 1,
        minutes: 0,
        seconds: 44,
      },
    },
    {
      title: "Gerry Gap",
      id: 3,
      name: "NFT3",
      collection: "Home",
      price: "0000000325 ETH",
      like: 165,
      image: images.user3,
      nftImage: images.nft_image_3,
      dollarRate: " ($9.99)",
      time: {
        days: 17,
        hours: 6,
        minutes: 35,
        seconds: 3,
      },
    },
    {
      title: "Liberties",
      id: 4,
      name: "NFT4",
      collection: "liberty",
      price: "0000009425 ETH",
      like: 1992,
      image: images.user4,
      nftImage: images.nft_image_4,
      dollarRate: " ($39.89)",
      time: {
        days: 1,
        hours: 3,
        minutes: 25,
        seconds: 3,
      },
    },
    {
      title: "Goodies",
      id: 5,
      name: "Goody",
      collection: "Smile",
      price: "000029115 ETH",
      like: 1902,
      image: images.user5,
      nftImage: images.nft_image_5,
      dollarRate: " ($20.90)",
      time: {
        days: 2,
        hours: 1,
        minutes: 5,
        seconds: 21,
      },
    },
    {
      title: "Goodies",
      id: 6,
      name: "Gustavoe's",
      collection: "Hoodie",
      price: "0000515 ETH",
      like: 190,
      image: images.user6,
      nftImage: images.nft_image_6,
      dollarRate: " ($20.90)",
      time: {
        days: 2,
        hours: 1,
        minutes: 5,
        seconds: 21,
      },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={style.bigNFTSlider}>
      {/* <Title heading="Crafting Crypto: Where Bidding Meets Masterpieces" /> */}
      <div className={style.bigNFTSlider_title}>
        <h1>Crafting Crypto: Where Bidding Meets Masterpieces</h1>
      </div>
      <div className={style.bigNFTSlider_box}>
        <div className={style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={style.bigNFTSlider_box_left_creator}>
            <div className={style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={style.bigNFTSlider_box_left_bidding}>
            <div className={style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price}{" "}
                <span>{sliderData[idNumber].dollarRate}</span>
              </p>
            </div>

            <p className={style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={style.bigNFTSlider_box_left_bidding_box_timer}>
              <div
                className={style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={style.bigNFTSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={style.bigNFTSlider_box_left_button}>
              <Button btnName="Place Your Bid" handleClick={() => {}} />
              <Button btnName="View Your Bid" handleClick={() => {}} />
            </div>
          </div>

          <div className={style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={style.bigNFTSlider_box_right}>
          <div className={style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={style.bigNFTSlider_box_right_box_img}
            />

            <div className={style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart
                className={style.bigNFTSlider_box_right_box_like_icon}
              />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSlider;
