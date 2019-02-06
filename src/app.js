import { type_check } from "./react-utils.js";
import { MiniReact, MiniReactDOM } from "./react.js";

// Composant Hello
class Hello extends MiniReact.Component {
  constructor(properties) {
    super(properties);
  }
  render() {
    const result = MiniReact.createElement(
      "div",
      null,
      `Hello ${this.properties.name}`
    );

    return result;
  }
}

class Button extends MiniReact.Component {
  constructor(properties) {
    super(properties);
  }
  render() {
    const result = MiniReact.createElement(
      "button",
      { onclick: this.properties.onClick },
      `Click me !`
    );

    return result;
  }
}

class Tick extends MiniReact.Component {
  constructor(properties) {
    super(properties);
    setInterval(this.tick, properties.interval);
    if (this.specs) type_check(properties, this.specs);
  }

  render = () => {
    // TODO : interpolate
    const result = MiniReact.createElement(
      "span",
      null,
      `Countup : ${this.state.ticker} <br />`
    );
    return result;
  };

  tick = () => {
    const time = new Date().toLocaleTimeString();
    this.setState({ ticker: time });
  };

  specs = {
    properties: {
      interval: { type: "number" }
    }
  };
}

MiniReactDOM.render(Tick, document.getElementById("root"), { interval: 1000 });

// TODO
// Routing
