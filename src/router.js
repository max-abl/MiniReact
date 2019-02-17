import { Router, Route } from "./lib/react-routing.js";

export var router = new Router("mainRouter", [
  new Route("Home", "/", document.getElementById("home")),
  new Route("Tableau", "/tableau", document.getElementById("tableau")),
  new Route("JitterClick", "/jitterclick", document.getElementById("jitterclick")),
]);

