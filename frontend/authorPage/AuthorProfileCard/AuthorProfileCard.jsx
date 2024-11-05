import React, { useState} from "react";
import images from "../../img";

import style from "./AuthorProfileCard.module.css";
import {
  MdVerified,
  MdCloudUpload,
  MdOutlineReportProblem,
} from "react-icons/md";
import { FiCopy } from "react-icons/Fi";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { Button } from "@/components/componentIndex";
import Image from "next/image";

const formatWalletAddress = (
  address,
  firstCharsCount = 5,
  lastCharsCount = 5
) => {
  const prefix = address.substring(0, firstCharsCount);
  const suffix = address.substring(address.length - lastCharsCount);
  return `${prefix}...${suffix}`;
};

const AuthorProfileCard = () => {
  const [share, setShare] = useState(false);
  const [report, setReport] = useState(false);

  const walletAddress = "0x1234567890abcdef1234567890abcdef12345678";
  const formattedAddress = formatWalletAddress(walletAddress);

  const copyAddress = () => {
    const copyText = document.getElementById("myInput");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };
  const openShare = () => {
    if (!share) {
      setShare(true);
      setReport(false);
    } else {
      setShare(false);
    }
  };
  const openReport = () => {
    if (!report) {
      setReport(true);
      setShare(false);
    } else {
      setReport(false);
    }
  };
  return (
    <div className={style.authorProfileCard}>
      <div className={style.AuthorProfileCard_box}>
        <div className={style.AuthorProfileCard_box_img}>
          <Image
            src={images.nft_image_12}
            alt="profile"
            width={230}
            height={230}
            className={style.AuthorProfileCard_box_img_img}
          />
        </div>
        <div className={style.AuthorProfileCard_box_info}>
          <h2>
            Dhruvil Patel{" "}
            <span>
              <MdVerified />
            </span>
          </h2>
          <div className={style.AuthorProfileCard_box_info_address}>
            <input type="text" value={formattedAddress} id="myInput" />
            <FiCopy
              onClick={() => copyAddress()}
              className={style.AuthorProfileCard_box_info_address_icon}
            />
          </div>
          <p>
            As a specialized NFT collector, I've curated over 500 rare digital
            assets within a niche, contributing to the dynamic digital economy
            and fostering innovation in the blockchain space.
          </p>
          <div className={style.AuthorProfileCard_box_info_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className={style.AuthorProfileCard_box_share}>
          <Button btnName="Follow" handleClick={() => {}} />
          <MdCloudUpload
            onClick={() => openShare()}
            className={style.AuthorProfileCard_box_share_icon}
          />
          {share && (
            <div className={style.AuthorProfileCard_box_share_upload}>
              <p>
                <span>
                  <TiSocialFacebook />
                </span>{" "}
                Facebook
              </p>
              <p>
                <span>
                  <TiSocialInstagram />
                </span>{" "}
                Instagram
              </p>
              <p>
                <span>
                  <TiSocialYoutube />
                </span>{" "}
                YouTube
              </p>
              <p>
                <span>
                  <TiSocialLinkedin />
                </span>{" "}
                LinkedIn
              </p>
            </div>
          )}
          <BsThreeDots
            onClick={() => openReport()}
            className={style.AuthorProfileCard_box_share_icon}
          />
          {report && (
            <p className={style.AuthorProfileCard_box_share_report}>
              <span>
                <MdOutlineReportProblem />
              </span>{" "}
              {""}
              Report abuse
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfileCard;
