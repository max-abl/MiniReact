// Snake case ;)
String.prototype.snake_case = function() {
  var input = this;
  return input
    .toLowerCase()
    .split(" ")
    .join("_");
};

// Prototype pour compter le score parce que en vrai on a pas trop d'idée
Number.prototype.createScore = function(nbr) {
  if (type_check(nbr, 'number')) return this + nbr;
  else return this + 1;
};


// Prototype check if class
Object.prototype.isClass = () => {
  return (
    typeof this === "function" &&
    /^class\s/.test(Function.prototype.toString.call(this))
  );
};

// Si c'est pas une class ou une fonction
export function isStateLessComponent(element) {
  return !element.isClass() && typeof element === "function";
}

// TypeCheck v1
function type_check_v1(data, type) {
  switch (typeof data) {
    case "number":
    case "string":
    case "boolean":
    case "undefined":
    case "function":
      return type === typeof data;
    case "object":
      switch (type) {
        case "null":
          return data === null;
        case "array":
          return Array.isArray(data);
        default:
          return data !== null && !Array.isArray(data);
      }
  }

  return false;
}

// TypeCheck v2
function type_check_v2(data, conf) {
  for (let key of Object.keys(conf)) {
    switch (key) {
      case "type":
        if (!type_check_v1(data, conf[key])) return false;
        break;
      case "value":
        if (JSON.stringify(data) !== JSON.stringify(conf[key])) return false;
        break;
      case "enum":
        let valid = false;
        for (let value of conf[key]) {
          valid = type_check_v2(data, { value });
          if (valid) break;
        }
        if (!valid) return false;
    }
  }

  return true;
}

// TypeCheck final version
export function type_check(data, conf) {
  for (let key of Object.keys(conf)) {
    switch (key) {
      case "type":
      case "value":
      case "enum":
        let newConf = {};
        newConf[key] = conf[key];
        if (!type_check_v2(data, newConf))
          throw new Error("Type properties error");
        break;
      case "properties":
        for (let prop of Object.keys(conf[key])) {
          if (data[prop] === undefined)
            throw new Error("Type properties error");
          if (!type_check(data[prop], conf[key][prop]))
            throw new Error("Type properties error");
        }
        break;
    }
  }

  return true;
}

// PropAccess
export function prop_access(object, path) {
  object = object || {};
  if (!path) return object;
  const pathArray = path.split(".");

  for (let i = 0; i < pathArray.length; i++) {
    object = object[pathArray[i]];
    if (object === undefined) {
      console.log(pathArray.slice(0, i + 1).join(".") + " not exist");
      return null;
    }
  }

  return object;
}
