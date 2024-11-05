import React, { useState, useEffect } from "react";
import images from "../img";
import Style from "../styles/author.module.css";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNFTCardBox,
} from "../authorPage/authorIndex";
import { NFTCardTwo } from "../collectionPages/collectionIndex";
import { Title, Brand } from "@/components/componentIndex";
import FollowerTabCard from "@/components/FollowerTab/FollowerTabCard/FollowerTabCard";

const author = () => {
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

  const [collectiable, setCollectiable] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);
  return (
    <div className={Style.author}>
      <AuthorProfileCard />
      <AuthorTaps
        setCollectiable={setCollectiable}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNFTCardBox
        collectiable={collectiable}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on the music icons and enjoy the music"
        className
      />
      <div className={Style.AuthorNFTCardBox_box}>
        {followerArray.map((el, i) => (
          <FollowerTabCard i={i} el={el} />
        ))}
      </div>
      <Brand />
    </div>
  );
};

export default author;
