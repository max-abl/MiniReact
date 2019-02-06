(() => {
  function anElement(element, properties, children) {
    if (isClass(element)) {
      const component = new element(properties);
      return component.render();
    } else if (isStateLessComponent(element)) {
      return element(properties);
    } else {
      const anElement = document.createElement(element);
      children.forEach(child => {
        if (typeof child === "object") {
          anElement.appendChild(child);
        } else {
          anElement.innerHTML += child;
        }
      });
      if (properties != null) {
        Object.keys(properties).forEach(propertyName => {
          // On check avec une regex si la propriété commence par "on"
          if (/^on.*$/.test(propertyName)) {
            anElement.addEventListener(
              propertyName.substring(2).toLowerCase(),
              properties[propertyName]
            );
          } else {
            anElement.setAttribute(propertyName, properties[propertyName]);
          }
        });
      }
      return anElement;
    }
  }

  //Paramètres du reste, permet de représenter un nombre indéfini d'arguments sous forme d'un tableau
  function createElement(element, properties, ...children) {
    return anElement(element, properties, children);
  }

  // Définition de la class Component
  class Component {
    constructor(properties) {
      this.properties = properties;
    }

    display(newProps) {
      this.newProps = newProps;
      this.shouldUpdate();
    }

    // --- TODO ---
    shouldUpdate() {
      if (JSON.stringify(this.properties) != JSON.stringify(this.newProps)) {
        this.properties = this.newProps;
        this.render();
      } else {
        // Todo
      }
    }
  }

  // Permet d'exposer la classe
  window.MiniReact = {
    createElement,
    Component
  };

  // Expose la méthode render
  window.MiniReactDOM = {
    render: (element, domElement) => {
      domElement.appendChild(element);
    }
  };
})();
