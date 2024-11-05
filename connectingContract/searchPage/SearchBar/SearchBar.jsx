import React from "react";
import style from "./SearchBar.module.css";
import { BsSearch, BsArrowRight } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className={style.SearchBar}>
      <div className={style.SearchBar_box}>
        <BsSearch className={style.SearchBar_box_icon} />
        <input type="text" placeholder="Search Here..." />
        <BsArrowRight className={style.SearchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;
