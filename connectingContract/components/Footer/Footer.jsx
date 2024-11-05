import React from "react";
import style from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import images from "../../img";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

import { RiSendPlaneFill } from "react-icons/ri";
import { Discover, HelpCenter } from "../Navbar/index";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footer_box}>
        <div className={style.footer_box_social}>
          <Image src={images.logo} className={style.footer_box_logo} alt="footer logo" width={150} height={150} />
          <p className={style.footer_box_info}>
            Step into the future of digital ownership with our NFT marketplace,
            where art and technology converge. Discover a curated collection of
            unique, blockchain-verified assets that redefine creativity and
            ownership. Join the revolution, own a piece of the digital frontier
            today.
          </p>
          <div className={style.footer_social}>
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
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
          </div>
        </div>
        <div className={style.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>
        <div className={style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        <div className={style.subscribe}>
          <h3>Subscribe</h3>
          <div className={style.subscribe_box}>
            <input type="email" placeholder="Enter Your Email *" />
            <RiSendPlaneFill className={style.subscribe_box_send} />
          </div>
          <div className={style.subscribe_box_info}>
            <p>
              Our NFT marketplace enables seamless buying, selling, and trading
              of unique digital assets, empowering creators and collectors
              alike. Dive into a world where blockchain meets creativity,
              shaping the future of decentralized ownership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
