import { Router, Route } from "./lib/react-routing.js";

export var router = new Router("mainRouter", [
  new Route("Home", "home", "/", "link color-red"),
  new Route("Tableau", "tableau", "/tableau", "link color-green"),
  new Route("JitterClick", "jitterclick", "/jitterclick", "link color-yellow")
]);
