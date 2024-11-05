import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Service.module.css";
import images from "../../img";
const Service = () => {
  return (
    <>
      <div className={Style.service}>
        <div className={Style.service_title}>
          <h1>Your Gateway to NFT Ownership</h1>
        </div>
        <div className={Style.service_box}>
          <div className={Style.service_box_item}>
            <Image
              src={images.service1}
              alt="Filter & Discover"
              width={200}
              height={200}
              className={Style.service_box_item_img}
            />
            <h3>Decentralized Exchanges (DEX)</h3>
            <p>
              In addition to centralized NFT marketplaces, decentralized
              exchanges (DEX) on blockchain networks like Ethereum enable
              peer-to-peer trading of NFTs.
            </p>
          </div>
          <div className={Style.service_box_item}>
            <Image
              src={images.service2}
              alt="Filter & Discover"
              width={200}
              height={200}
              className={Style.service_box_item_img}
            />
            {/* <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p> */}
            <h3>Smart Contracts and Automation</h3>
            <p>
              Embedded blockchain smart contracts automate NFT processes,
              executing transactions, distributing royalties, and enforcing
              resale rights seamlessly.
            </p>
          </div>
          <div className={Style.service_box_item}>
            <Image
              src={images.service3}
              alt="Connect Wallet"
              width={200}
              height={200}
              className={Style.service_box_item_img}
            />
            {/* <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p> */}
            <h3>Listing and Trading NFT</h3>
            <p>
              NFT marketplaces serve as platforms for creators to list their
              digital assets as NFTs, making them available for purchase by
              collectors.
            </p>
          </div>
          <div className={Style.service_box_item}>
            <Image
              src={images.service4}
              alt="Filter & Discover"
              width={200}
              height={200}
              className={Style.service_box_item_img}
            />
            {/* <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p> */}
            <h3>Ownership Verification and Provenance</h3>
            <p>
              NFTs, through blockchain, assure transparent and secure ownership
              validation for distinct digital assets, ensuring trust and
              authenticity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
