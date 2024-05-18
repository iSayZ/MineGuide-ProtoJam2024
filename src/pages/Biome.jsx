import BiomePage from "../components/BiomePage/BiomePage"
import { useParams, Link } from "react-router-dom";

import jsonData from "../data.json"

function Biome() {

    const { id } = useParams();
    
  const data = jsonData.filter(section => section.title === id);
       
    return (
        <>
            <BiomePage data={data[0]}/>
        </>
    )
}

export default Biome;