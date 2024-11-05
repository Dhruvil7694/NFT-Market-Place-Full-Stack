import React from "react";
import style from "../styles/uploadNFT.module.css";
import { DropZone, UploadNFT } from "@/uploadNFT/uploadNFTIndex";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
const uploadNFTPage = () => {
  return (
    <div className={style.uploadNFT}>
      <div className={style.uploadNFT_box}>
        <div className={style.uploadNFT_box_heading}>
          <h1>Transform Ideas into NFT Masterpieces</h1>
          <p>
            Discover the thrill of crafting one-of-a-kind NFTs effortlessly.
            Unleash your creativity and share your unique digital art with the
            world.
          </p>
        </div>
        <div className={style.uploadNFT_box_title}>
          <h2>
            <InsertPhotoIcon className={style.uploadNFT_box_title_icon} />
            Images{" , "}
            <AudioFileIcon className={style.uploadNFT_box_title_icon} />
            Audio{" , "}
            <VideoFileIcon className={style.uploadNFT_box_title_icon} />
            Videos{" , "}
            <ViewInArIcon className={style.uploadNFT_box_title_icon} />
            3D Models{" "}
          </h2>
          <p>
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </p>
        </div>
        <div className={style.uploadNFT_box_form}>
          <UploadNFT />
        </div>
      </div>
    </div>
  );
};

export default uploadNFTPage;
