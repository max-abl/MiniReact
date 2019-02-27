import { type_check } from "../lib/react-utils.js";
import { MiniReact } from "../lib/react.js";
import { Component } from "./../lib/react-component.js";

export class JitterComponent extends Component {
  constructor(properties) {
    super(properties);

    // Vérification des proprietes du composant
    if (this.specs) type_check(properties, this.specs);

    // Mise en place du decompte
    this.timer = setInterval(this.tick, 1000);
    this.temps_total = properties.interval;
    this.temps = 0;

    // Compteur de click
    this.nbr_click = 0;
  }

  // Affichage
  render = () => {
    const result = MiniReact.createElement(
      "div",
      { class: "container text-center" },
      MiniReact.createElement(
        "h3",
        { class: "text-center", id: "counter" },
        "SPAM PRESS B"
      ),
      MiniReact.createElement(
        "div",
        { class: "text-center", id: "jitter" },
        "",
        MiniReact.createElement(
          "h1",
          { class: "align-middle" },
          `Your score : ${(this.nbr_click).createScore()}`
        )
      ),
      MiniReact.createElement(
        "h1",
        { class: "text-center" },
        `Counter : ${this.state.time != null ? this.state.time : "READY ?"}`
      )
    );
    return result;
  };

  // Decompteur
  tick = () => {
    if (this.state.time == null) this.setListener();
    if (this.state.time >= this.temps_total) this.stopCount();
    else this.setState({ time: this.temps++ });
  };

  // On stop le compteur de click
  stopCount = () => {
    window.onkeydown = null;
    clearInterval(this.timer);
    alert("Your score : " + (this.nbr_click).createScore());
  };

  // On click
  setListener = () => {
    var element = document.getElementById("jitter");
    element.onclick = this.counter;
    window.onkeydown = this.counter;
  };

  // Compteur de click
  counter = () => {
    this.nbr_click++;
    console.log(this.nbr_click);
    this.setState({ time: this.temps, count: this.nbr_click });
  };

  // Modèle des propriété
  specs = {
    properties: {
      interval: { type: "number" }
    }
  };
}
