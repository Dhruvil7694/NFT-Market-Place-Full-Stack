import React from "react";
import styles from "../styles/nftDetails.module.css";
import {
  NFTDescription,
  NFTDetailsImage,
  NFTTabs,
} from "@/NFTDetailsPage/NFTDetailsPage";
import NFTDetailsPage from "@/NFTDetailsPage/NFTDetailsPage";
import { Button, Category, Brand } from "@/components/componentIndex";

const nftDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default nftDetails;
