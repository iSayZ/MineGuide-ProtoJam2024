import React from "react";
import BiomeAvatar from "../BiomeAvatar/BiomeAvatar";
import HouseDescription from "../HouseDescription/HouseDescription";
import HeaderBiomePage from "../HeaderBiomePage/HeaderBiomePage";
import BiomePlants from "../BiomePlants/BiomePlants";
import BiomeAnimals from "../BiomeAnimals/BiomeAnimals";
import Footer from "../footer/Footer";

function BiomePage({data}) {

  return (
    <>
      <div>
        <HeaderBiomePage data={data} />
        <BiomeAvatar data={data} />
        <HouseDescription data={data} />
        <BiomePlants data={data} />
        <BiomeAnimals data={data} />
        <Footer />
      </div>
    </>
  );
}

export default BiomePage;
