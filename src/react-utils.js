function isClass(element) {
  return typeof element === 'function' && /^class\s/.test(Function.prototype.toString.call(element));
}

function isStateLessComponent(element){
  return !isClass(element) && typeof element === 'function' // if element is not a class and is a function it's a stateless component
}