import React, { useState } from "react";
import { MdOutlineHttp, MdOutlineAttachFile } from "react-icons/md";
import { AiFillPropertySafety } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import Image from "next/image";
import { FaCrown } from "react-icons/fa";
import { useRouter } from "next/router";
import { Button } from "@/components/componentIndex";
import { DropZone } from "./uploadNFTIndex";
import images from "../img";
import formStyle from "../accountPage/Form/Form.module.css";
import style from "./uploadNFt.module.css";
import { SiEthereum } from "react-icons/si";


const uploadNFT = ({ createNFT, uploadToPinata }) => {
  const [active, setActive] = useState(0);
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [royalities, setRoyalities] = useState("");
  const [filesize, setFilesize] = useState("");
  const [category, setCategory] = useState(0);
  const [properties, setProperties] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const router = useRouter();
  const categoryArray = [
    {
      image: images.nft_image_1,
      category: "sports",
    },
    {
      image: images.nft_image_2,
      category: "art",
    },
    {
      image: images.nft_image_3,
      category: "music",
    },
    {
      image: images.nft_image_4,
      category: "Digital",
    },
    {
      image: images.nft_image_5,
      category: "Photography",
    },
    {
      image: images.nft_image_6,
      category: "Digital",
    },
    {
      image: images.nft_image_7,
      category: "Photography",
    },
  ];
  return (
    <div className={style.upload}>
      <DropZone
        title="JPG, PNG, WEBM, MAX 100MB"
        heading="Drag & drop file"
        subHeading="or browse media on your device"
        name={name}
        website={website}
        description={description}
        royalities={royalities}
        fileSize={filesize}
        category={category}
        properties={properties}
        setImage={setImage}
        uploadToPinata={uploadToPinata}
      />

      <div className={style.upload_box}>
        <div className={formStyle.Form_box_input}>
          <label htmlFor="nft">Item Name</label>
          <input
            type="text"
            placeholder="Enter Item name"
            className={formStyle.Form_box_input_username}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyle.Form_box_input_box}>
            <div className={formStyle.Form_box_input_box_icon}>
              <CgWebsite style={{ fontSize: "1.5rem" }} />
            </div>

            <input
              type="text"
              placeholder="Enter your website"
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <small className={style.upload_box_input_para}>
            Crafting Crypto will include a link to this URL on this item's
            detail page, so that users can click to learn more about it. You are
            welcome to link to your own webpage with more details.
          </small>
        </div>

        <div className={formStyle.Form_box_input}>
          <label htmlFor="description">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="6"
            placeholder="something about yourself in few words"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <small style={{ marginLeft: "1rem" }}>
            The description will be included on the item's detail page
            underneath its image. Markdown syntax is supported.
          </small>
        </div>
        <br />
        <br />

        <div className={formStyle.upload_box_input}>
          <label htmlFor="name" className={style.upload_box_input_label}>
            Choose collection
          </label>
          <p className={style.upload_box_input_para}>
            Choose an exiting collection or create a new one
          </p>

          <div className={style.upload_box_slider_div}>
            {categoryArray.map((el, i) => (
              <div
                className={`${style.upload_box_slider} ${
                  active == i + 1 ? style.active : ""
                }`}
                key={i + 1}
                onClick={() => (setActive(i + 1), setCategory(el.category))}
              >
                <div className={style.upload_box_slider_box}>
                  <div className={style.upload_box_slider_box_img}>
                    <Image
                      src={el.image}
                      alt="nft image"
                      width={80}
                      height={80}
                      className={style.upload_box_slider_box_img_img}
                    />
                  </div>
                  <div className={style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                  <p>Crypto Legend - {el.category} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={formStyle.Form_box_input_social}>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="royalities">Royalities</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <FaCrown />
              </div>
              <input
                type="text"
                placeholder="Enter royalties percentage (e.g., 10)"
                onChange={(e) => setRoyalities(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="size">size</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input
                type="text"
                placeholder="Enter size (<100MB)"
                onChange={(e) => setFilesize(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="properties">Properties</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <AiFillPropertySafety />
              </div>
              <input
                type="text"
                placeholder="Enter Properties (e.g., title, artist, description)"
                onChange={(e) => setProperties(e.target.value)}
              />
            </div>
          </div>
          <div className={formStyle.Form_box_input}>
            <label htmlFor="Price">Price</label>
            <div className={formStyle.Form_box_input_box}>
              <div className={formStyle.Form_box_input_box_icon}>
                <SiEthereum />
              </div>
              <input
                type="text"
                placeholder="Enter price (ETH)"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={style.upload_box_btn}>
          <Button
            btnName="upload"
            handleClick={async () =>
              createNFT(
                name,
                price,
                image,
                description,
                router,
                // website,
                // royalities,
                // filesize,
                // category,
                // properties
              )
            }
            classStyle={style.upload_box_btn_style}
          />
          <Button
            btnName="Preview"
            handleClick={() => {}}
            classStyle={style.upload_box_btn_style}
          />
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;
