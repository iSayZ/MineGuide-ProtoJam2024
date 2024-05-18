import React from "react";
import "./BiomeAnimals.css";
import Popup from "../Popup/Popup";
import biome from "../../biome.json";
import { useState } from "react";
import { useMain } from "../../contexts/MainContext";

function BiomeAnimals({ data }) {
  const { playSound } = useMain();

  const [ indexSelect, setIndexSelect ] = useState(0)
  const [ finalIndex, setFinalIndex ] = useState("")
  const [ showPopup, setShowPopup ] = useState(false)

  const biomeSelect = biome.filter(section => section.section === data.title);
  console.log('biomeselect',biomeSelect[0].arrayAnimals)

  const handleShowPopup = (index) => {
    playSound()
    setFinalIndex(`id${index}`)
    setIndexSelect(index)
    setShowPopup(true)
  } 

  const closePopup = () => {
    playSound()
    setShowPopup(false)
  }

  return (
    <div className={`animals_container ${data.title}`}>
      {showPopup && <Popup info={biomeSelect[0].arrayAnimals[indexSelect][finalIndex]} toggle={() => closePopup()} />}
      <div className="animals">
        <h3>CREATURES:</h3>
        <div className="card_container">
        {data.arrayAnimals.map((animal, index) => (
          <div key={index} className="card_plants" onClick={() => handleShowPopup(index)}>
          <img src={animal} alt="Animal" />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default BiomeAnimals;
