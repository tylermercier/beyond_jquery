// Prototype chaining lookup
function getProperty(obj, prop)
  // Check instance
  if (obj.hasOwnProperty(prop)) {
    return obj[prop];
  }
  // Recurse through prototype chain
  else if (obj.__proto__ !== null) {
    return getProperty(obj.__proto__, prop);
  }
  else {
    return undefined;
  }
}