import {
    createContext, useContext, useState
  } from "react";

  const MainContext = createContext();

  export function MainProvider({
    children,
  }) {
      
    let music = new Audio("../assets/sounds/c418-wet_hands.mp3");
    music.loop = true;
      
    const [ muteSound, setMuteSound ] = useState(true)
    const [ volume, setVolume ] = useState(0.1)
    music.volume = volume
     
    const playMusic = () => {
        music.play();
    }

    const stopMusic = () => {
        setVolume(0)
    }

    const playSound = () => {
        if (!muteSound) {
            const audio = new Audio("../assets/sounds/minecraft_click.mp3");
            audio.volume = volume
            audio.play();
        }
      };

     const handleClicSound = () => {
        if (muteSound) {
            playMusic()
            const audio = new Audio("../assets/sounds/minecraft_click.mp3");
            audio.volume = volume
            audio.play();
        } 
            setMuteSound(!muteSound)
            if (!muteSound) {
                stopMusic();
            }
      }

      return (
          <MainContext.Provider value={{ playSound, muteSound, handleClicSound, volume, setVolume  }}>
              {children}
          </MainContext.Provider>
      )
  }

  export const useMain =
    () => useContext(MainContext);