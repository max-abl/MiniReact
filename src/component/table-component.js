import { MiniReact } from "../lib/react.js";
import { Component } from "../lib/react-component.js";

export class TableComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = MiniReact.createElement(
      "table",
      { class: "customers container" },
      MiniReact.createElement(
        "tr",
        null,
        MiniReact.createElement("th", null, "Company"),
        MiniReact.createElement("th", null, "Contact"),
        MiniReact.createElement("th", null, "Country")
      ),
      MiniReact.createElement(
        "tr",
        null,
        MiniReact.createElement("td", null, "Alfreds Futterkiste"),
        MiniReact.createElement("td", null, "Maria Anders"),
        MiniReact.createElement("td", null, "Germany")
      ),
      MiniReact.createElement(
        "tr",
        null,
        MiniReact.createElement("td", null, "Berglunds snabbköp"),
        MiniReact.createElement("td", null, "Christina Berglund"),
        MiniReact.createElement("td", null, "Sweden")
      ),
      MiniReact.createElement(
        "tr",
        null,
        MiniReact.createElement("td", null, "Centro comercial Moctezuma"),
        MiniReact.createElement("td", null, "Francisco Chang"),
        MiniReact.createElement("td", null, "Mexico")
      )
    );
    return result;
  };
}
