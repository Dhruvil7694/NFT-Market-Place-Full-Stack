import React from "react";
import style from "./NFTDetailsPage.module.css";
import { NFTDescription, NFTDetailsImage, NFTTabs } from "./NFTDetailsIndex";

const NFTDetailsPage = () => {
  return (
    <div className={style.NFTDetailsPage}>
      <div className={style.NFTDetailsPage_box}>
        <NFTDetailsImage/>
        <NFTDescription/>
      </div>
    </div>
  );
};

export default NFTDetailsPage;
