import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { plants } from "./plants";

ReactDOM.render(
  <div>
    <Card
      id={plants[1].id}
      name={plants[1].name}
      type={plants[1].type}
      germTime={plants[1].germTime}
      harvTime={plants[0].harvTime}
    />
    <Card
      id={plants[2].id}
      name={plants[2].name}
      type={plants[2].type}
      germTime={plants[2].germTime}
      harvTime={plants[1].harvTime}
    />
    <Card
      id={plants[0].id}
      name={plants[0].name}
      type={plants[0].type}
      germTime={plants[0].germTime}
      harvTime={plants[2].harvTime}
    />
  </div>,
  document.getElementById("root")
);
registerServiceWorker();
