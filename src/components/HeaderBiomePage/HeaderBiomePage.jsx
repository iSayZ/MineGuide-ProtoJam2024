import "./HeaderBiomePage.css";
import { useEffect, useRef } from "react";

function HeaderBiomePage({ data }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  return (
    <>
      <div className="video-background-biome">
        <iframe
          src={data.videoSrc}
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default HeaderBiomePage;
