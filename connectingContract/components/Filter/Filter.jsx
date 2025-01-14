import React, { useState } from "react";
import {
  FaFilter,
  FaAngleDown,
  FaAngleUp,
  FaWallet,
  FaMusic,
  FaVideo,
  FaImages,
  FaUserAlt,
} from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import style from "./Filter.module.css";

const Filter = () => {
  const [filter, setFilter] = useState(false);
  const [image, setImage] = useState(true);
  const [video, setVideo] = useState(true);
  const [music, setMusic] = useState(true);

  const openFilter = () => {
    if (!filter) {
      setFilter(true);
    } else {
      setFilter(false);
    }
  };
  const openImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  const openVideo = () => {
    if (!video) {
      setVideo(true);
    } else {
      setVideo(false);
    }
  };
  const openMusic = () => {
    if (!music) {
      setMusic(true);
    } else {
      setMusic(false);
    }
  };
  return (
    <div className={style.filter}>
      <div className={style.filter_box}>
        <div className={style.filter_box_left}>
          <button onClick={() => {}}>NFTs</button>
          <button onClick={() => {}}>Art</button>
          <button onClick={() => {}}>Music</button>
          <button onClick={() => {}}>Sports</button>
          <button onClick={() => {}}>Photography</button>
        </div>
        <div className={style.filter_box_right}>
          <div
            className={style.filter_box_right_box}
            onClick={() => openFilter()}
          >
            <FaFilter />
            <span>Filter</span>
            {Filter ? <FaAngleDown /> : <FaAngleUp />}
          </div>
        </div>
      </div>
      {filter && (
        <div className={style.filter_box_items}>
          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item}>
              <FaWallet /> 
              <span>10ETH</span>
              <AiFillCloseCircle />
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={() => openImage()}
            >
              <FaImages /> <small>Images</small>
              {image ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={() => openVideo()}
            >
              <FaVideo /> <small>Videos</small>
              {video ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div
              className={style.filter_box_items_box_item_trans}
              onClick={() => openMusic()}
            >
              <FaMusic /> <small>Music</small>
              {music ? <AiFillCloseCircle /> : <TiTick />}
            </div>
          </div>
          <div className={style.filter_box_items_box}>
            <div className={style.filter_box_items_box_item}>
              <FaUserAlt /> <small>Verified</small>
              <MdVerified />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
