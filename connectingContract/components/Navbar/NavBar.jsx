import { React, useState, useEffect, useContext } from "react";
import Image from "next/image";
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuRight } from "react-icons/cg";
import style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, Sidebar } from "./index";
import { Button } from "../componentIndex";
import images from "../../img";
import { useRouter } from "next/router";
import Link from "next/link";

// import from smart contract
import { NFTMarketPlaceContext } from "@/Context/NFTMarketPlaceContext";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const router = useRouter();

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover((prev) => !prev);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setHelp((prev) => !prev);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setHelp(false);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
  };
  useEffect(() => {
    // Reset dropdown state on page change
    setDiscover(false);
    setHelp(false);
    setProfile(false);
    // Reset other dropdown states if needed
  }, [router.pathname]);

  const openNotification = () => {
    if (!notification) {
      setHelp(false);
      setDiscover(false);
      setNotification(true);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setHelp(false);
      setDiscover(false);
      setNotification(false);
      setProfile(true);
    } else {
      setProfile(false);
    }
  };

  const openSidebar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true);
    } else {
      setOpenSideMenu(false);
    }
  };

  const { currentAccount, connectWallet } = useContext(NFTMarketPlaceContext);
  return (
    <div className={style.navbar}>
      <div className={style.navbar_container}>
        {/* -------------------------------------Left navbar container------------------------------------------ */}
        <div className={style.navbar_container_left}>
          <div className={style.logo}>
            <Link href="/">
              <Image
                src={images.logo}
                alt="NFT Market Place"
                width={190}
                height={180}
              />
            </Link>
          </div>
          <div className={style.navbar_container_left_box_input}>
            <div className={style.navbar_container_left_box_input_box}>
              <input type="Text" placeholder="Search NFT" />
              <BsSearch onClick={() => {}} className={style.search_icon} />
            </div>
          </div>
        </div>
        {/* -------------------------------------Right navbar container------------------------------------------ */}
        <div className={style.navbar_container_right}>
          <div className={style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          <div className={style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          <div className={style.navbar_container_right_notify}>
            <MdNotifications
              className={style.notify}
              onClick={() => openNotification()}
            />
            {notification && <Notification />}
          </div>

          <div className={style.navbar_container_right_button}>
            {currentAccount == "" ? (
              <Button btnName="Connect" handleClick={() => connectWallet()} />
            ) : (
              <Link href={{ pathname: "/uploadNFTPage" }}>
                <Button btnName="Create" handleClick={() => {}} />
              </Link>
            )}
          </div>

          <div className={style.navbar_container_right_profile_box}>
            <div className={style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={45}
                height={45}
                onClick={() => openProfile()}
                className={style.navbar_container_right_profile}
              />
              {profile && <Profile />}
            </div>
          </div>
          <div className={style.navbar_container_right_menubtn}>
            <CgMenuRight
              className={style.menuIcon}
              onClick={() => openSidebar()}
            />
          </div>
        </div>
      </div>
      {openSideMenu && (
        <div className={style.sideBar}>
          <Sidebar
            setOpenSideMenu={setOpenSideMenu}
            currentAccount={currentAccount}
            connectWallet={connectWallet}
          />
        </div>
      )}
    </div>
  );
};

export default NavBar;
