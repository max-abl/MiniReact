export class Router {
  constructor(name, routes) {
    this.name = name;
    this.routes = routes;
  }

  getName = () => {
    return this.name;
  };

  getRoutes = () => {
    return this.routes;
  };
}

export class Route {
  constructor(name, path, linkElement) {
    this.name = name;
    this.path = path;
    this.linkElement = linkElement;
  }

  getName = () => {
    return this.name;
  };

  getPath = () => {
    return this.path;
  };

  getLinkElement = () => {
    return this.path;
  };
}
