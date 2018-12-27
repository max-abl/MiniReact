//const Hello = ({name}) => {
//  return MiniReact.createElement('div', null, `Hello ${name}`);
//};

class Hello extends MiniReact.Component { // Déclaration du Component Hello 
  constructor(properties){
    super(properties);
  }

  render(){ 
      return MiniReact.createElement('div', null, `Hello ${this.properties.name}`);
  }
}

class Button extends MiniReact.Component {
  constructor(properties){
    super(properties);
  }
  render(){
    return MiniReact.createElement('button',{onclick: this.properties.onClick}, `Click me !`);
  }
}

const myBtn = MiniReact.createElement(Button,{onClick:()=>alert('yay it worked !!')},null);

//const helloWorld = MiniReact.createElement(Hello, {name: 'Lolo'}, null);
//const helloWorld2 = MiniReact.createElement(Hello, null, null);
//const regularDiv = MiniReact.createElement('div', null, "I'm just a regular div !");
//const parent = MiniReact.createElement('div', null, helloWorld, helloWorld2, regularDiv, "I'm just a text");
MiniReactDOM.render(myBtn, document.getElementById('root'));