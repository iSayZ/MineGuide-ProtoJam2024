import "./HomePage.css";
import { Link } from "react-router-dom";
import jsonData from "../../data.json"
import { useMain } from "../../contexts/MainContext"; 

function HomePage() {

  const { playSound, muteSound, handleClicSound, volume, setVolume } = useMain();

  const data = jsonData;

  const btnMute = muteSound ? "btn_mute" : ""

  return (
      <>
     {/* <input type="range" value={volume} min="0" max="1" step="0.01" onChange={(e) => setVolume(e.target.value)} /> */}
      <section className="homepage">
      <div className="homepage_content">
        <div className="homepage_title">
        <img
        className="title-img"
          src="../assets/images/title.png"
          alt=""
        />
        <p className="title_label">ProtoJam 2024 !</p>
        <p className="edition">REACT EDITION</p>
        </div>
        <div className="btn_container_main">
          {data.map((section) => (
            <Link key={section.title} to={`/biome/${section.title}`}>
              <div className="btn" onClick={playSound}>
                <p>{section.title}</p>
              </div>
            </Link>
          ))}
            <div className="btn_container_second">
            <Link to="/equipe" className="btn btn_medium">
            <div onClick={playSound}>
              <p>L'équipe</p>
            </div>
            </Link>
            <Link to="/contact" className="btn btn_medium">
            <div onClick={playSound}>
              <p>Contact</p>
            </div>
            </Link>
            <div className="btn_small btn_left" onClick={playSound}>
                <img src="../assets/images/icons/language-logo.png" alt="" />
            </div>
            <div className={`btn_small btn_right ${btnMute}`} onClick={handleClicSound}>
                <img src={muteSound ? "../assets/images/icons/sound-off.png" : "../assets/images/icons/sound-on.png"} alt="" />
            </div>
            </div>
        </div>
        <div className="copyright">
          <p>
            © MineGuide - Créé par Alexis, Arnauld, Elias & Morgan
          </p>
        </div>
      </div>
      </section>
    </>
  );
}

export default HomePage;
