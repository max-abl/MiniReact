// Check if element is a class
function isClass(element) {
  return (
    typeof element === "function" &&
    /^class\s/.test(Function.prototype.toString.call(element))
  );
}

// If element is not a class and is a function it's a stateless component
function isStateLessComponent(element) {
  return !isClass(element) && typeof element === "function";
}
