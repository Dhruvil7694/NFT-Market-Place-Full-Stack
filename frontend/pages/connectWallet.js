import React, { useState, useEffect } from "react";
import style from "../styles/connectWallet.module.css";
import Image from "next/image";
import images from "../img";
const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const providerArray = [
    {
      provider: images.provider1,
      name: "Metamask",
    },
    {
      provider: images.provider2,
      name: "Coinbase",
    },
    {
      provider: images.provider3,
      name: "Rainbow",
    },
    {
      provider: images.provider4,
      name: "Wallet Connect",
    },
    {
      provider: images.provider5,
      name: "Crypto Defi",
    },
    {
      provider: images.provider6,
      name: "OKX Wallet",
    },
    {
      provider: images.provider7,
      name: "Safe Wallet",
    },
  ];
  return (
    <div className={style.connectWallet}>
      <div className={style.connectWallet_box}>
        <h1>Connect Your Wallet</h1>
        <p className={style.connectWallet_box_para}>
          Connect with the wallect to process further and if you don't have your
          wallet the create one.
        </p>

        <div className={style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${style.connectWallet_box_provider_item} ${
                activeBtn == i + 1 ? style.active : ""
              }`}
              key={i + 1}
              onClick={() => setActiveBtn(i + 1)}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.light_border}></div>
    </div>
  );
};

export default connectWallet;
