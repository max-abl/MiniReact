import { type_check } from "../lib/react-utils.js";
import { MiniReact } from "../lib/react.js";
import { Component } from "./../lib/react-component.js";

export class TickComponent extends Component {
  constructor(properties) {
    super(properties);
    setInterval(this.tick, properties.interval);
    if (this.specs) type_check(properties, this.specs);
  }

  render = () => {
    // TODO : interpolate
    const result = MiniReact.createElement("h1", null, `${this.state.ticker}`);
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
