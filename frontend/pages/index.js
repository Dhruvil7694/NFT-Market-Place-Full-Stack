import React from "react";
import style from "../styles/index.module.css";
import {
  AudioLive,
  BigNFTSlider,
  Brand,
  Category,
  Collection,
  Filter,
  FollowerTab,
  HeroSection,
  NFTCard,
  Service,
  Slider,
  Subscribe,
  Title,
} from "@/components/componentIndex";


const Home = () => {
  return (
    <div className={style.homepage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <AudioLive />
      <FollowerTab />

      <Slider />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Exploring NFTs reveals a decentralized canvas of digital creativity, where each token and transaction unveils a unique story in innovation."
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Journey Through NFT Genres"
        paragraph="Embark on a crypto adventure through diverse NFT genres. Whether you seek digital art, music, or virtual real estate, our categorized sections guide you to the heart of each genre's vibrant ecosystem"
      />
      <Category />
      <Subscribe />
      <Brand />
    </div>
  );
};

export default Home;
