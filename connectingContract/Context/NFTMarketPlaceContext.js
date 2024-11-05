import React, { useState, useContext, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import Router, { useRouter } from "next/router";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";

export const NFTMarketPlaceContext = React.createContext();

//fetching contract--------------------------------------------------------------------------------------
const fetchContract = (signerOrProvider) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );

//connecting with smart contract--------------------------------------------------------------------------
const connectingWithSmartcontract = async () => {
  try {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("ERROR:", error);
  }
};

export const NFTMarketPlaceProvider = ({ children }) => {
  const titleData = "Your Gateway to the rarest NFTs";

  const [currentAccount, setCurrentAccount] = useState("");
  const router = useRouter();
  // Function Wallet is connected or to check the user is connected with application or not-------------
  const checkIfWalletIsConnected = async () => {
    try {
      if (!window.ethereum)
        return console.log(
          "To enhance your experience, please install a compatible wallet."
        );

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log(
          "We couldn't find an account with the provided details. Please check your information and try again"
        );
      }
    } catch (error) {
      console.log("Went something wrong while connecting to wallet: ", error);
    }
  };

  useEffect(() => {
    if (currentAccount) {
      console.log(currentAccount);
    }
  }, [currentAccount]); // This effect depends on currentAccount

  // Call your function to check if the wallet is connected
  checkIfWalletIsConnected();

  // connect wallet function------------------------------------------------------------------------------
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return console.log(
          "To enhance your experience, please install a compatible wallet."
        );

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
      // window.location.reload();
    } catch (error) {
      console.log("Went something wrong while connecting to wallet: ", error);
    }
  };

  // upload image to IPFS Function------------------------------------------------------------------------
  const uploadToPinata = async (file) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `3707d3566845da096625`,
            pinata_secret_api_key: `2d69774da69d6ccca59e807c170dde7372b8857fa25b6eadb905afa1f219921a`,

            "Content-Type": `multipart/form-data`,
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        return ImgHash;
      } catch (error) {
        console.log("ERROR: while uploading to pinata", error);
      }
    }
  };

  // Create NFT functions---------------------------------------------------------------------------------
  const createNFT = async (name, price, image, description, router) => {
    if (!name || !description || !price || !image) {
      return console.log("Data is Missing");
    }

    // Ensure the API keys are correctly formatted as strings

    const data = JSON.stringify({ name, description, image });
    try {
      const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: data,
        headers: {
          pinata_api_key: "3707d3566845da096625",
          pinata_secret_api_key:
            "2d69774da69d6ccca59e807c170dde7372b8857fa25b6eadb905afa1f219921a",
          "Content-Type": `application/json`,
        },
      });
      const url = `https://api.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log(url);
      await createSale(url, price);
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };

  // createSale Function ---------------------------------------------------------------------------------
  const createSale = async (url, formInputPrice, isReselling, id) => {
    try {
      const price = ethers.parseUnits(formInputPrice, "ether");
      const contract = await connectingWithSmartcontract();
      const listingPrice = await contract.getListingPrice();

      const transaction = !isReselling
        ? await contract.createToken(url, price, {
            value: listingPrice.toString(),
          })
        : await contract.reSellToken(url, price, {
            value: listingPrice.toString(),
          });

      await transaction.wait();
      router.push("/searchPage");
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch NFTs function ---------------------------------------------------------------------------------
  const fetchNFTs = async () => {
    try {
      const provider = await ethers.providers.JsonRpcProvider();
      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItem();
      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );

            return {
              price,
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              name,
              image,
              description,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.log("ERROR while fetching NFT: ", error);
    }
  };

  //Fetching NFTs of single user or NFTs belong to the user.
  const fetchMyNFTsOrListedNFTs = async (type) => {
    // we have two types of NFTs for single user, first is the NFTs created by userand owns that NFT, and another is Listing, weather user want to sell or don't want to sell.
    try {
      const contract = await connectingWithSmartcontract();

      const data =
        type == "fetchItemslisted"
          ? await contract.fetchItemsListed()
          : await contract.fetchMyNFT();

      const items = await Promise.all(
        data.map(
          async ({ tokenId, seller, owner, price: unformattedPrice }) => {
            const tokenURI = await contract.tokenURI(tokenId);
            const {
              data: { image, name, description },
            } = await axios.get(tokenURI);
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              tokenId: tokenId.toNumber(),
              seller,
              owner,
              image,
              name,
              description,
              price,
              tokenURI,
            };
          }
        )
      );
      return items;
    } catch (error) {
      console.error("ERROR while Fetching your NFTs", error);
    }
  };

  // Buy NFTs function ---------------------------------------------------------------------------------------
  const buyNFTs = async (nft) => {
    try {
      const contract = await connectingWithSmartcontract();
      const price = ethers.parseUnits(nft.price.toString(), "ether");

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });
      await transaction.wait();
    } catch (error) {
      console.log("ERROR: while buying NFTs", error);
    }
  };
  return (
    <NFTMarketPlaceContext.Provider
      value={{
        checkIfWalletIsConnected,
        uploadToPinata,
        connectWallet,
        fetchNFTs,
        createNFT,
        fetchMyNFTsOrListedNFTs,
        buyNFTs,
        currentAccount,
        titleData,
      }}
    >
      {children}
    </NFTMarketPlaceContext.Provider>
  );
};
