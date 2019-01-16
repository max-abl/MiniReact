class CareTaker {
  constructor() {
    this.mementos = {};
  }
  add(key, memento) {
    this.mementos[key] = memento;
  }
  get(key) {
    return this.mementos[key];
  }
}

// Composanta Hello
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

    //TODO
    caretaker.add();
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

    //TODO
    caretaker.add();
    return result;
  }
}

class Tick extends MiniReact.Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    const result = MiniReact.createElement(
      "span",
      null,
      `Countup : ${this.properties.ticker} <br />`
    );

    //TODO
    caretaker.add();
    return result;
  }
}

var caretaker = new CareTaker();

//const myBtn = MiniReact.createElement(Button,{onClick:()=>alert('yay it worked !!')},null);
//const helloWorld = MiniReact.createElement(Hello, {name: 'Lolo'}, null);
//const helloWorld2 = MiniReact.createElement(Hello, null, null);
//const regularDiv = MiniReact.createElement('div', null, "I'm just a regular div !");
//const parent = MiniReact.createElement('div', null, helloWorld, helloWorld2, regularDiv, "I'm just a text");
//const helloWorld2 = MiniReact.createElement(Hello, null, null);
//const helloWorld = MiniReact.createElement(Tick, {time: 100}, null);

// 
function tick() {
  // Controller tick
  const time = new Date().toLocaleTimeString();

  // Creation du template de tck
  const clockElement = MiniReact.createElement(Tick, { ticker: time }, null);

  // Rendu de l'element
  MiniReactDOM.render(clockElement, document.getElementById("root"));
}

tick();
setInterval(tick, 1000);

// TODO
// Routing
