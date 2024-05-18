import ReactSkinview3d from "react-skinview3d";
import { WalkingAnimation } from "skinview3d";
import { useMain } from "../contexts/MainContext";
import { Link } from "react-router-dom";
import "./styles/Team.css";
import jsonData from "../data.json"

function Team() {

  const data = jsonData;

  const { playSound } = useMain();

  return (
    <>
      <div className="homepage_title">
        <img className="title-img team_title" src="../assets/images/title.png" alt="" />
        <p className="title_label team">ProtoJam 2024 !</p>
      </div>
      <Link to="/">
        <div className="btn_small biome_return" onClick={playSound}>
                <img src="../assets/images/icons/return.png" alt="" />
        </div>
        </Link>
      <div className="team_container">
      <h2>TEAM</h2>
        <div className="team_avatar">
          {data.map((user) => 
          <div className="avatar">
          <p>{user.avatarName}</p>
            <ReactSkinview3d
              className="viewer"
              skinUrl={user.skinUrl}
              capeUrl={user.capeUrl}
              height={300}
              width={120}
              onReady={({ viewer }) => {
                viewer.animation = new WalkingAnimation();
                viewer.autoRotate = true;
              }}
            />
          </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Team;
