function extend(Child, Parent) {
	Child.prototype = inherit(Parent.prototype);
	Child.prototype.constructor = Child;
	Child.parent = Parent.prototype;
}

function inherit(proto) {
	function F() {};
	F.prototype = proto;
	return new F;
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
extend(Rabbit, Animal);

// override
Rabbit.prototype.run = function() {
	Rabbit.parent.run.apply(this);
	console.log(this + " bounces high into the sky!");
}