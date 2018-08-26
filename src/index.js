import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CardList from "./CardList";
import registerServiceWorker from "./registerServiceWorker";
import "tachyons";
import { plants } from "./plants";

ReactDOM.render(<CardList plants={plants} />, document.getElementById("root"));
registerServiceWorker();
