import React from "react";

import Card from "./Card";

const CardList = ({ plants }) => {
  const cardComponent = plants.map((plant, i) => {
    return (
      <Card
        key={i}
        id={plants[i].id}
        name={plants[i].name}
        type={plants[i].type}
        germTime={plants[i].harvSeason}
        harvTime={plants[i].harvTime}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;
