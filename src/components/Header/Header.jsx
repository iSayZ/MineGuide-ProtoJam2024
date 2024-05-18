import "./Header.css";

function Header() {

  return (
    <>
      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/EjBdURAwJHI?autoplay=1&mute=1&loop=1&playlist=EjBdURAwJHI&controls=0&showinfo=0&rel=0&modestbranding=1&vq=hd1080"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default Header;
