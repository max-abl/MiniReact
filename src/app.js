import { MiniReactDOM } from "./lib/react.js";
import { TickComponent } from "./component/tick-component.js";

MiniReactDOM.render(TickComponent, document.getElementById("horloge"), {
  interval: 1000
});