import React from "react";
import code from "./code.svg";

const Card = ({ name, type, germTime, harvTime }) => {
  return (
    <div className="bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="plant" src={code} width="200px" height="200px" />
      <div>
        <h2>{name}</h2>
        <p>
          <span className="b">Harvest Season: </span>
          {germTime}
        </p>
        <p>
          <span className="b">Harvest Time: </span>
          {harvTime}
        </p>
      </div>
    </div>
  );
};

export default Card;
