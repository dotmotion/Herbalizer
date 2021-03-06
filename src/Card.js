import React from "react";
import leaf from "./leaf.svg";

const Card = ({ name, type, epSiembra, tCosecha }) => {
  return (
    <div className="card dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="plant" src={leaf} width="100px" height="100px" />
      <div>
        <h2>{name}</h2>
        <p>
          <span className="b">Siembra: </span>
          {epSiembra}
        </p>
        <p>
          <span className="b">Cosecha: </span>
          {tCosecha}
        </p>
      </div>
    </div>
  );
};

export default Card;
