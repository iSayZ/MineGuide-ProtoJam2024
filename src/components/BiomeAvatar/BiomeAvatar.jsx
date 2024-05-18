import "./BiomeAvatar.css";
import React from "react";
import ReactSkinview3d from "react-skinview3d";
import { WalkingAnimation } from "skinview3d";
import { Link } from "react-router-dom";
import { useMain } from "../../contexts/MainContext"; 


function BiomeAvatar({ data }) {
  const { playSound } = useMain();


  const artique = data.title === "Artique" ? "artique" : ""
  const marecage = data.title === "Marecage" ? "marecage" : ""


  return ( 
    <div className="avatar_container">
        <div className="avatar_title">
          <img src={data.titleImg} className={`avatar_title_img ${artique} ${marecage}`} alt="Titre de l'image" />
          <Link to="/">
        <div className="btn_small biome_return" onClick={playSound}>
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link>
        </div>
      <div className={`avatar_description ${data.title}`}>
        <div className="avatar_card">
          <div className="avatar_card_skin">
            <p className="avatar_skin_title">{data.avatarName}</p>
            <ReactSkinview3d
              className="viewer"
              skinUrl={data.skinUrl}
              capeUrl={data.capeUrl}
              height={300}
              width={150}
              onReady={({ viewer }) => {
                viewer.animation = new WalkingAnimation();
                viewer.autoRotate = true;
              }}
            />
          </div>
          <p className="avatar_card_desc">{data.avatarText}</p>
        </div>
      </div>
    </div>
  );
}

export default BiomeAvatar;
