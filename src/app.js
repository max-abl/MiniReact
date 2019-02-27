import { MiniReactDOM } from "./lib/react.js";
import { router, route } from "./router.js";
import { TickComponent } from "./component/tick-component.js";
import { TableComponent } from "./component/table-component.js";
import { HeaderComponent } from "./component/header-component.js";
import { PageComponent } from "./component/page-component.js";
import { ErrorNotFoundComponent } from "./component/404-component.js";
import { JitterComponent } from "./component/jitter-component.js";
import { ButtonComponent } from "./component/button-component.js";

// Initialisation de l'arboresence
MiniReactDOM.render(PageComponent, document.getElementById("root"), {});
MiniReactDOM.render(HeaderComponent, document.getElementById("header"), {
  router // Je me sers du routeur pour crée mon composant
});

// Detecte si l'initialisation de l'arboresence c'est bien effectué
var promise = new Promise(function(resolve, reject) {
  // Récuperation du content
  var contentElement = document.getElementById("content");

  // On vérifie qu'on a bien un content dans le DOM pour permettre au MiniReact de fonctionner
  if (contentElement)
    resolve("Content element found !  MiniReact can work ! Yay !");
  else
    reject(
      Error(
        "No  ontent element found... MiniReact won't work :( Please use Google Chrome !"
      )
    );
});

promise.then(
  function(result) {
    var contentElement = document.getElementById("content");
    console.log(result);
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
        MiniReactDOM.render(TableComponent, contentElement, {});
        break;

      case "jitterclick":
        // Si on est sur la route jitterclick
        MiniReactDOM.render(JitterComponent, contentElement, {
          interval: 5
        });
        break;

      default:
        console.log("oui");
        // Not found
        MiniReactDOM.render(ErrorNotFoundComponent, contentElement, {});
        break;
    }
  },
  function(err) {
    console.log(err);
  }
);
