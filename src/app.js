import { MiniReactDOM } from "./lib/react.js";
import { router, route } from "./router.js";
import { TickComponent } from "./component/tick-component.js";
import { HeaderComponent } from "./component/header-component.js";
import { PageComponent } from "./component/page-component.js";
import { ErrorNotFoundComponent } from "./component/404-component.js";

// Creation de l'arboresence
MiniReactDOM.render(PageComponent, document.getElementById("root"), {});
MiniReactDOM.render(HeaderComponent, document.getElementById("header"), {
  router // Je me sers du routeur pour crée mon composant
});

var contentElement = document.getElementById("content");

// Affichage en fonction de la route
switch (!route ? null : route.getId()) {
  case "home":
    // Si on est sur la route home
    MiniReactDOM.render(TickComponent, contentElement, {
      interval: 1000
    });
    break;

  case "tableau":
    // Si on est sur la route tableau
    console.log("Tableau in progess");
    break;

  case "jitterclick":
    // Si on est sur la route jitterclick
    console.log("JitterClick in progess");
    break;

  default:
    console.log("oui");
    // Not found
    MiniReactDOM.render(ErrorNotFoundComponent, contentElement, {});
    break;
}
