import React from "react";
import style from "./HelpCenter.module.css";
import Link from "next/link";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "aboutUs",
    },
    {
      name: "Contact Us",
      link: "contactUs",
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
  return (
    <div className={style.box}>
      {helpCenter.map((el, i) => (
        <div className={style.helpCenter} key={i + 1}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
