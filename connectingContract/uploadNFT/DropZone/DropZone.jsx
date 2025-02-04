import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import style from "./DropZone.module.css";
import images from "../../img";
const DropZone = ({
  title,
  heading,
  subHeading,
  name,
  website,
  description,
  royalities,
  fileSize,
  category,
  properties,
  uploadToPinata,
  setImage,
}) => {
  const [fileUrl, setFileUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFile) => {
    const url = await uploadToPinata(acceptedFile[0]);
    setFileUrl(url);
    setImage(url);
    console.log(url);
  });

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: 5000000,
  });
  return (
    <div className={style.dropZone}>
      <div className={style.dropZone_box} {...getRootProps()}>
        <input {...getInputProps()} />
        <div className={style.dropZone_box_input}>
          <p>{title}</p>
          <div className={style.dropZone_box_input_img}>
            <Image
              src={images.upload}
              alt="upload"
              width={100}
              height={100}
              objectFit="contain"
              className={style.dropZone_box_input_img_img}
            />
          </div>
          <p>{heading}</p>
          <p>{subHeading}</p>
        </div>
      </div>
      {fileUrl && (
        <aside className={style.dropZone_box_aside}>
          <div className={style.dropZone_box_aside_box}>
            <Image
              src={fileUrl}
              alt="nft Image"
              width={300}
              height={300}
              className={style.dropZone_box_aside_box_img}
            />

            <div className={style.dropZone_box_aside_box_preview}>
              <div className={style.dropZone_box_aside_box_preview_one}>
                <p>
                  <span>NFT Name:</span>
                  {name || ""}
                </p>
                <p>
                  <span>Website:</span>
                  {website || ""}
                </p>
              </div>
              <div className={style.dropZone_box_aside_box_preview_two}>
                <p className={style.dropZone_box_aside_box_preview_two_desc}>
                  <span>Description:</span>
                  {description || ""}
                </p>
              </div>
              <div className={style.dropZone_box_aside_box_preview_three}>
                <p>
                  <span>Royalities:</span>
                  {royalities || ""}
                </p>
                <p>
                  <span>FileSize:</span>
                  {fileSize || ""}
                </p>
                <p>
                  <span>Properties:</span>
                  {properties || ""}
                </p>
                <p>
                  <span>Category:</span>
                  {category || ""}
                </p>
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DropZone;
