// Check if element is a class
export function isClass(element) {
  return (
    typeof element === "function" &&
    /^class\s/.test(Function.prototype.toString.call(element))
  );
}

// If element is not a class and is a function it's a stateless component
export function isStateLessComponent(element) {
  return !isClass(element) && typeof element === "function";
}

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
