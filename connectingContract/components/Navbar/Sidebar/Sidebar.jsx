import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GrClose } from "react-icons/gr";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";

//INTERNAL IMPORT
import style from "./SideBar.module.css";
import images from "../../../img";
import Button from "../../Button/Button";

const Sidebar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Settings",
      link: "account-settings",
    },
    {
      name: "Connect Wallet",
      link: "collection",
    },
    {
      name: "Blogs",
      link: "blogs",
    },
  ];

  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sign In",
      link: "sign-in",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true);
    } else {
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true);
    } else {
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className={style.sideBar}>
      <GrClose
        className={style.sideBar_closeBtn}
        onClick={() => closeSideBar()}
      />
      <div className={style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>Discover more articles related to NFT he re and share them</p>
        <div className={style.sideBar_social}>
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
      <div className={style.sideBar_menu}>
        <div>
          <div
            className={style.sideBar_menu_box}
            onClick={() => openDiscoverMenu()}
          >
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {openDiscover && (
            <div className={style.sideBar_discover}>
              {discover.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div
            className={style.sideBar_menu_box}
            onClick={() => openHelpMenu()}
          >
            <p>HelpCenter</p>
            <TiArrowSortedDown />
          </div>
          {openHelp && (
            <div className={style.sideBar_discover}>
              {helpCenter.map((el, i) => (
                <p key={i + 1}>
                  <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={style.sideBar_button}>
        {currentAccount == "" ? (
          <Button btnName="Connect" handleClick={() => connectWallet()} />
        ) : (
          <Link href={{ pathname: "/uploadNFTPage" }}>
            <Button btnName="Create" handleClick={() => {}} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
