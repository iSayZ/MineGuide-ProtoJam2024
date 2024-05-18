import React from "react";

function HouseDescription({ data }) {
  
  return (
    <div className={`house_container ${data.title}`}>
      <div className="house_main">
        <img className="house_img" src={data.houseImg} alt="" />
        <div className="house_desc">
          <p>{data.houseDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default HouseDescription;
