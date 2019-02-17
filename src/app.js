import { MiniReactDOM } from "./lib/react.js";
import { TickComponent } from "./component/tick-component.js";
import { router } from "./router.js";



// Récuperation de la route
var route = router.routes.filter(function(r) {
  return r.getPath() === window.location.pathname;
})[0];

if (!route)
  console.log(`Error 4O4 : not found (url : ${window.location.pathname}`);

route.linkElement.style.textDecoration = "underline";

switch (route.getName()) {
  case "Home":
    MiniReactDOM.render(TickComponent, document.getElementById("horloge"), {
      interval: 1000
    });
    break;

  case "Tableau":
    console.log("Tableau in progess");
    break;

  case "JitterClick":
    console.log("JitterClick in progess");
    break;
}
