import React from "react";
import style from "./Discover.module.css";
import Link from "next/link";

const Discover = () => {
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "nftDetails",
    },
    {
      name: "Account Settings",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNFTPage",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    {
      name: "Blogs",
      link: "blog",
    },
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
