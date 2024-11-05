import React, { useState } from "react";

import style from "./AuthorTaps.module.css";
import { TiArrowSortedDown, TiArrowSortedUp, TiTick } from "react-icons/ti";

const AuthorTaps = ({
  setCollectiable,
  setCreated,
  setLike,
  setFollower,
  setFollowing,
}) => {
  const [openList, setOpenList] = useState(false);
  const [activeBtn, setActiveBtn] = useState(1);
  const [selectedMenu, setSelectedMenu] = useState("Most Recent");

  const listArray = [
    "Created by admin",
    "Most Appreciated",
    "Most Discussed",
    "Most Viewed",
  ];

  const openDropDownList = () => {
    if (!openList) {
      setOpenList(true);
    } else {
      setOpenList(false);
    }
  };
  const openTab = (e) => {
    const btnText = e.target.innerText;
    console.log(btnText);
    if (btnText == "Collectiables") {
      setCollectiable(true);
      setCreated(false);
      setLike(false);
      setFollower(false);
      setFollowing(false);
      setActiveBtn(1);
    } else if (btnText == "Created") {
      setCollectiable(false);
      setCreated(true);
      setLike(false);
      setFollower(false);
      setFollowing(false);
      setActiveBtn(2);
    } else if (btnText == "Liked") {
      setCollectiable(false);
      setCreated(false);
      setLike(true);
      setFollower(false);
      setFollowing(false);
      setActiveBtn(3);
    } else if (btnText == "Following") {
      setCollectiable(false);
      setCreated(false);
      setLike(false);
      setFollower(false);
      setFollowing(true);
      setActiveBtn(4);
    } else if (btnText == "Follower") {
      setCollectiable(false);
      setCreated(false);
      setLike(false);
      setFollower(true);
      setFollowing(false);
      setActiveBtn(5);
    }
  };
  return (
    <div className={style.AuthorTaps}>
      <div className={style.AuthorTaps_box}>
        <div className={style.AuthorTaps_box_left}>
          <div className={style.AuthorTaps_box_left_btn}>
            <button
              className={`${activeBtn == 1 ? style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Collectiables
            </button>
            <button
              className={`${activeBtn == 2 ? style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Created{""}
            </button>
            <button
              className={`${activeBtn == 3 ? style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Liked
            </button>
            <button
              className={`${activeBtn == 4 ? style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Following
            </button>
            <button
              className={`${activeBtn == 5 ? style.active : ""}`}
              onClick={(e) => openTab(e)}
            >
              Follower
            </button>
          </div>
        </div>
        <div className={style.AuthorTaps_box_right}>
          <div
            className={style.AuthorTaps_box_right_para}
            onClick={() => openDropDownList()}
          >
            <p>{selectedMenu}</p>
            {openList ? <TiArrowSortedUp /> : <TiArrowSortedDown />}
          </div>
          {openList && (
            <div className={style.AuthorTaps_box_right_list}>
              {listArray.map((el, i) => (
                <div
                  key={i + 1}
                  onClick={() => setSelectedMenu(el)}
                  className={style.AuthorTaps_box_right_list_item}
                >
                  <p>{el}</p>
                  <span>{selectedMenu == el && <TiTick />}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorTaps;
