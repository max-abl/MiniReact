import { prop_access } from "../lib/react-utils.js";
import { MiniReact } from "../lib/react.js";
import { Component } from "./../lib/react-component.js";

export class HeaderComponent extends Component {
  constructor(properties) {
    super(properties);
    this.headerTitle = " - REACT FAIT MAISON - ";
    this.routes = prop_access(properties.router, "routes");
    this.selectedLink = window.location.pathname;
  }

  // Fonction de rendu
  render = () => {

    // Recup
    console.log(this.selectedLink)

    // Construction des liens
    var routeHome = this.routes.filter(function(r) {
      return r.getId() === "home";
    })[0];
    var routeTableau = this.routes.filter(function(r) {
      return r.getId() === "tableau";
    })[0];
    var routeJitter = this.routes.filter(function(r) {
      return r.getId() === "jitterclick";
    })[0];

    // Creation de l'arboresence
    const result = MiniReact.createElement(
      "header",
      { class: "container text-center color-blue mb-5" },
      MiniReact.createElement("h2", null, `${this.headerTitle}`),
      MiniReact.createElement(
        "nav",
        null,
        MiniReact.createElement(
          "a",
          {
            class: routeHome.getClassName(),
            id: routeHome.getId(),
            href: "." + routeHome.getPath(),
            style:
              this.selectedLink === routeHome.getPath()
                ? "text-decoration: underline"
                : ""
          },
          routeHome.getName()
        ),
        MiniReact.createElement(
          "a",
          {
            class: routeTableau.getClassName(),
            id: routeTableau.getId(),
            href: "." + routeTableau.getPath(),
            style:
              this.selectedLink === routeTableau.getPath()
                ? "text-decoration: underline"
                : ""
          },
          routeTableau.getName()
        ),
        MiniReact.createElement(
          "a",
          {
            class: routeJitter.getClassName(),
            id: routeJitter.getId(),
            href: "." + routeJitter.getPath(),
            style:
              this.selectedLink === routeJitter.getPath()
                ? "text-decoration: underline"
                : ""
          },
          routeJitter.getName()
        )
      )
    );

    return result;
  };
}
