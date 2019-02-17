import { MiniReactDOM } from "./lib/react.js";
import { TickComponent } from "./component/tick-component.js";
import { HeaderComponent } from "./component/header-component.js";
import { PageComponent } from "./component/page-component.js";
import { router } from "./router.js";

// Creation de l'arboresence
MiniReactDOM.render(PageComponent, document.getElementById("root"), {});
MiniReactDOM.render(HeaderComponent, document.getElementById("header"), {
  router
});

console.log(router);

// Récuperation de la route courante
var route = router.routes.filter(function(r) {
  return r.getPath() === window.location.pathname;
})[0];

// Si pas de route trouvé
if (!route)
  console.log(`Error 4O4 : not found (url : ${window.location.pathname}`);

// Affichage
switch (route.getName()) {
  case "Home":
    MiniReactDOM.render(TickComponent, document.getElementById("content"), {
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
