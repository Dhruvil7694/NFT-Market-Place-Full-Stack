import React from "react";
import style from "../styles/aboutUs.module.css";
import images from "../img";
import Image from "next/image";

import { Brand } from "@/components/componentIndex";

const aboutUs = () => {
  const founderArray = [
    {
      name: "Gery Rogers",
      position: "Co-founder and Chief Executive",
      image: images.founder1,
    },
    {
      name: "Ethan Webcraft",
      position: "Co-founder and Chief Executive",
      image: images.founder2,
    },
    {
      name: "Nova Flowz",
      position: "Chief Engineer",
      image: images.founder3,
    },
    {
      name: "Quantii Bytes",
      position: "manager",
      image: images.founder4,
    },
  ];
  const factsArray = [
    {
      title: "Worldwide Presence 🌎",
      description:
        "Our NFT marketplace has transcended borders, providing a platform for creators and collectors from over 50 countries. We're not just a marketplace; we're a global community reshaping the future of digital ownership.",
    },
    {
      title: "Thriving Community 🤝",
      description:
        "Join a vibrant ecosystem with a community of over 100,000 creators and collectors. Our active userbase reflects the diverse and dynamic nature of the NFT space, fostering collaboration, discovery, and innovation.",
    },
    {
      title: "Knowledge Hub 💡",
      description:
        "Elevate your understanding of the NFT world with our rich repository of knowledge. We've published over 500 articles, providing insights, guides, and thought leadership to empower our users in navigating the exciting landscape of digital assets.",
    },
  ];
  return (
    <div className={style.aboutUs}>
      <div className={style.aboutUs_box}>
        <div className={style.aboutUs_box_hero}>
          <div className={style.aboutUs_box_hero_left}>
            <h1>About Us</h1>
            <p>
              Step into the beating heart of our NFT marketplace, where dreams
              fuse with pixels, and creativity knows no bounds. This isn't just
              a platform; it's our ode to a world where each digital stroke
              tells a story.
              <br />
              <br />
              Join us in sculpting a future where artists are the architects of
              decentralized ownership. This isn't a journey—it's a symphony of
              innovation, where pixels whisper narratives and blockchain echoes
              endless possibilities. Here, we're not just connecting creators
              and collectors; we're weaving a tapestry of boundless imagination.
              Uncover the human touch behind the pixels, where passion meets the
              blockchain in an exploration of tomorrow's artistic marvels.
              Welcome to our canvas, where every story is a brushstroke, and
              you're part of the masterpiece.{" "}
            </p>
          </div>
          <div className={style.aboutUs_box_hero_right}>
            <Image src={images.hero} width={550} height={400} />
          </div>
        </div>

        <div className={style.aboutUs_box_title}>
          <h1>Founder</h1>
          <p>
            Pioneers of creativity, forging a digital revolution. Join us in
            celebrating visionary innovation.
          </p>
        </div>

        <div className={style.aboutUs_box_founders}>
          <div className={style.aboutUs_box_founders_box}>
            {founderArray.map((el, i) => (
              <div className={style.aboutUs_box_founders_box_img}>
                <Image
                  src={el.image}
                  alt={el.name}
                  width={100}
                  height={100}
                  className={style.aboutUs_box_founders_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.aboutUs_box_title}>
          <h1>Unmasking the Facts</h1>
          <p>
            Peel back the layers of the NFT marketplace as we reveal the
            essential truths—where innovation meets authenticity, and pixels
            tell the story of digital ownership. Dive into the factual tapestry
            of NFTs.
          </p>
        </div>

        <div className={style.aboutUs_box_facts}>
          <div className={style.aboutUs_box_facts_box}>
            <ul className={style.aboutUs_box_facts_list}>
              {factsArray.map((el, i) => (
                <li className={style.aboutUs_box_facts_list_item} key={i}>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Brand/>
    </div>
  );
};

export default aboutUs;
