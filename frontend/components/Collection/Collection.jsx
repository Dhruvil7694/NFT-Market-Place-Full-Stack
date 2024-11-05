import React, { useState, useEffect } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//INTERNAL IMPORT
import style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponent";
import images from "../../img";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const CardArray = [
    {
      background: images.creatorbackground1,
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
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const FollowingArray = [
    {
      background: images.creatorbackground10,
      user: images.user3,
    },
    {
      background: images.creatorbackground9,
      user: images.user4,
    },
    {
      background: images.creatorbackground8,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
  ];
  const NewsArray = [
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
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setNews(true);
      setFollowing(false);
      setPopular(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setFollowing(true);
      setNews(false);
      setPopular(false);
    }
  };
  return (
    <div className={style.collection}>
      <div className={style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={style.collection_collections}>
          <div className={style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> Last 24 hours
            </button>
            <button onClick={() => openNews()}>
              <BsCalendar3 /> Last 8 days
            </button>
            <button onClick={() => openFollower()}>
              <BsFillCalendarDateFill /> Last 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={style.collection_box}>
          {CardArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}
      {following && (
        <div className={style.collection_box}>
          {FollowingArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}
      {news && (
        <div className={style.collection_box}>
          {NewsArray.map((el, i) => (
            <DaysComponent key={i + 1} i={i} el={el}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
