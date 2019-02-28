import { MiniReact } from "../lib/react.js";
import { Component } from "../lib/react-component.js";
import { prop_access } from "../lib/react-utils.js";

export class TableComponent extends Component {
  constructor(properties) {
    super(properties);

    // Default scoreboard
    if (localStorage.getItem("scoreboard") == null) {
      this.scoreboard = {
        max: 61,
        kev: 58,
        lolo: 47,
        you: 0
      };
    } else {
      // Récuperation du scoreboard
      this.scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
    }
  }

  render = () => {
    // Affichage sur score
    const result = MiniReact.createElement(
      "div",
      { class: "container" },
      MiniReact.createElement(
        "h1",
        { class: "text-center mb-1" },
        "Leaderboard"
      ),
      MiniReact.createElement(
        "div",
        { class: "container text-center" },
        MiniReact.createElement(
          "h3",
          null,
          `Max : ${prop_access(this.scoreboard, "max")}`
        ),
        MiniReact.createElement(
          "h3",
          null,
          `Kevin : ${prop_access(this.scoreboard, "kev")}`
        ),
        MiniReact.createElement(
          "h3",
          null,
          `Lorenzo : ${prop_access(this.scoreboard, "lolo")}`
        ),
        MiniReact.createElement(
          "h3",
          { class: "color-red" },
          `You : ${prop_access(this.scoreboard, "you")}`
        )
      )
    );
    return result;
  };
}
