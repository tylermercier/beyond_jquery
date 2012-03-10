function extendEx(Child, Parent) {
	Child.prototype = inheritEx(Parent.prototype);
	Child.prototype.constructor = Child;
	Child.parent = Parent.prototype;
}

function inheritEx(proto) {
	function F() {};
	F.prototype = proto;
	return new F;
}

if(typeof Object.create !== "function") {
  Object.create = function (o) {
    function F() {}
    F.prototype = o;
    return new F();
  };
}

function extend(obj, props) {
  for(prop in props) {
    if(props.hasOwnProperty(prop)) {
      obj[prop] = props[prop];
    }
  }
}

function New (f) {
	// Create the instance of the class.
	var n = { '__proto__': f.prototype };
	return function () {
		// Initialize the instance.
		f.apply(n, arguments);
		// Return the instance
		return n;
	};
}

function getProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    return obj[prop];
  }
  else if (obj.__proto__ !== null) {
    return getProperty(obj.__proto__, prop);
  }
  else {
    return undefined;
  }
}

// Animal class
function Animal(name) {
	this.name = name;
}
Animal.prototype.run = function() {
	console.log(this + " is running!");
}
Animal.prototype.toString = function() {
	return this.name;
}

// Rabbit class
function Rabbit(name) {
	Rabbit.parent.constructor.apply(this, arguments);
}

// inherit
extendEx(Rabbit, Animal);

// override
Rabbit.prototype.run = function() {
	Rabbit.parent.run.apply(this);
	console.log(this + " bounces high into the sky!");
}