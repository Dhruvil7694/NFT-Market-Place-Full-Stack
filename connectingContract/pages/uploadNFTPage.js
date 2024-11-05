import React, { useState, useContext, useEffect } from "react";
import style from "../styles/uploadNFT.module.css";
import { UploadNFT } from "@/uploadNFT/uploadNFTIndex";
import { NFTMarketPlaceContext } from "@/Context/NFTMarketPlaceContext";

const uploadNFTPage = () => {
  const { uploadToPinata, createNFT } = useContext(NFTMarketPlaceContext);
  return (
    <div className={style.uploadNFT}>
      <div className={style.uploadNFT_box}>
        <div className={style.uploadNFT_box_heading}>
          <h1>Transform Ideas into NFT Masterpieces</h1>
          <p>
            Discover the thrill of crafting one-of-a-kind NFTs effortlessly.
            Unleash your creativity and share your unique digital art with the
            world.
          </p>
        </div>
        <div className={style.uploadNFT_box_title}>
          <h2>
            Images{" | "}
            Audio{" | "}
            Videos{" | "}
            3D Models{" "}
          </h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>
        <div className={style.uploadNFT_box_form}>
          <UploadNFT uploadToPinata={uploadToPinata} createNFT={createNFT} />
        </div>
      </div>
    </div>
  );
};

export default uploadNFTPage;
