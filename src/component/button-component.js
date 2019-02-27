import { MiniReact } from "../lib/react.js";
import { Component } from "../lib/react-component.js";

export class ButtonComponent extends Component {
  constructor(properties) {
    super(properties);
  }
  render() {
    const result = MiniReact.createElement('button',{onclick: this.properties.onClick}, `Reset`);
    return result;
  };
   //const myBtn = MiniReact.createElement(Button,{onClick:()=>alert('yay it worked !!')},null);
}
