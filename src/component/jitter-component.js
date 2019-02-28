import { type_check, prop_access } from "../lib/react-utils.js";
import { MiniReact } from "../lib/react.js";
import { Component } from "./../lib/react-component.js";
import { ButtonComponent } from "./button-component.js";

export class JitterComponent extends Component {
  // Définition du scoreboard
  scoreboard = {
    max: 61,
    kev: 58,
    lolo: 47,
    you: 0
  };

  // Boutton composant
  myBtn = new ButtonComponent({
    onClick: () => document.location.reload(true)
  }).render();

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
      "Notre score 61 en 5s, seriez vous capable de nous battre ?",
      MiniReact.createElement(
        "h1",
        { class: "text-center", id: "counter" },
        "SPAM B !"
      ),
      MiniReact.createElement(
        "div",
        { class: "text-center", id: "jitter" },
        "",
        MiniReact.createElement(
          "h1",
          { class: "align-middle" },
          `Your score : ${this.nbr_click}`
        )
      ),
      MiniReact.createElement(
        "h1",
        { class: "text-center" },
        `Counter : ${this.state.time != null ? this.state.time : "READY ?"}`
      ),
      MiniReact.createElement(
        "div",
        { class: "container text-center" },
        this.myBtn
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
    // On retire le listener et on arrete le decomtpe
    window.onkeydown = null;
    clearInterval(this.timer);

    // si null
    if (localStorage.getItem("scoreboard") == null)
      localStorage.setItem("scoreboard", JSON.stringify(this.scoreboard));

    // Sauvegarde du score
    if (
      prop_access(JSON.parse(localStorage.getItem("scoreboard")), "you") <
      this.nbr_click
    ) {
      this.scoreboard.you = this.nbr_click;
      localStorage.setItem("scoreboard", JSON.stringify(this.scoreboard));
    }

    // alert
    if (this.nbr_click < 61) alert("C'EST PAS TERRIBLE :/");
    else if (this.nbr_click == 61) alert("Impresionnant :o");
    else alert("Bien joué ! Ca mérite bien un 20/20 non ? ;)");
  };

  // On click
  setListener = () => {
    var element = document.getElementById("jitter");
    element.onclick = this.counter;
    window.onkeydown = this.counter;
  };

  // Compteur de click
  counter = e => {
    if (e.key === "b") {
      this.nbr_click++;
      this.setState({ time: this.temps, count: this.nbr_click.createScore(1) });
    }
  };

  // Modèle des propriété
  specs = {
    properties: {
      interval: { type: "number" }
    }
  };
}
