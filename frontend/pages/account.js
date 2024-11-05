import React, { useState, useMemo, useCallback, useContext } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { GrUserSettings } from "react-icons/gr";

import style from "../styles/account.module.css";
import images from "../img";
import Form from "@/accountPage/Form/Form";
const account = () => {
  const [fileURL, setFileURL] = useState(null);

  const onDrop = useCallback(async (acceptedfile) => {
    setFileURL(acceptedfile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "Image/*",
    maxSize: 5000000,
  });
  return (
    <div className={style.account}>
      <div className={style.account_info}>
        <h1>
          <GrUserSettings
            className={style.account_info_icon}
            style={{ marginRight: "1rem" }}
          />
          Profile Setting
        </h1>
        <p>Update your account information and preferences here.</p>
      </div>
      <div className={style.account_box}>
        <div className={style.account_box_img} {...getRootProps()}>
          <input {...getInputProps()} />
          <Image
            src={images.user5}
            alt="profile image"
            width={150}
            height={150}
            className={style.account_box_img_img}
          />
          <p className={style.account_box_img_para}>Change Image</p>
        </div>
        <div className={style.account_box_form}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default account;
