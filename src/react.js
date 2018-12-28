(() => {

  function anElement(element, properties, children){
    if(isClass(element)){
      const component = new element(properties);
      return component.render();
    }else if(isStateLessComponent(element)){
      return element(properties);
    }else{
      const anElement = document.createElement(element);
      children.forEach(child => {
        if(typeof child === 'object'){
          anElement.appendChild(child);
        }else{
          anElement.innerHTML += child;
        }
      });
      Object.keys(properties).forEach(propertyName => {
        if(/^on.*$/.test(propertyName)){// on check avec une regex si la propriété commence par "on"
          anElement.addEventListener(
            propertyName.substring(2).toLowerCase(),properties[propertyName]
          );
        }else{
          anElement.setAttribute(propertyName, properties[propertyName]);
        }    
      });
      return anElement;
    }
  }

  function createElement(element, properties, ...children) { //Paramètres du reste, permet de représenter un nombre indéfini d'arguments sous forme d'un tableau 
    return anElement(element, properties, children);
  }

  class Component {
    constructor(properties){
      this.properties = properties;
    }

    display(newProps){
      this.newProps = newProps
      this.shouldUpdate();
    }
    
    shouldUpdate(){ 
      if(JSON.stringify(this.properties) != JSON.stringify(this.newProps)){
        this.properties = this.newProps;
        this.render();
      }else{
        // TODO
      }
    }
  }

  window.MiniReact = {
    createElement,
    Component // exposer la classe
  };

  window.MiniReactDOM = {
    render: (element, domElement) => {
      domElement.appendChild(element);
    }
  };

})();