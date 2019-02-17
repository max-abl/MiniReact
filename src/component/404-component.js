import { MiniReact } from "../lib/react.js";
import { Component } from "./../lib/react-component.js";

export class ErrorNotFoundComponent extends Component {
  constructor(properties) {
    super(properties);
  }

  render = () => {
    const result = MiniReact.createElement(
      "h2",
      { class: "container text-center" },
      `Error 404 : Not Found (url : ${window.location.pathname})`
    );
    return result;
  };
}
