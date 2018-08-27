import React from "react";
import code from "./code.svg";

const Card = ({ name, type, epSiembra, tCosecha }) => {
  return (
    <div className="bg-dark-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="plant" src={code} width="200px" height="200px" />
      <div>
        <h2>{name}</h2>
        <p>
          <span className="b">Epoca de Siembra: </span>
          {epSiembra}
        </p>
        <p>
          <span className="b">Tiempo de Cosecha: </span>
          {tCosecha}
        </p>
      </div>
    </div>
  );
};

export default Card;
