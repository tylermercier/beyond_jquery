function inherit(Child, Parent) {
	Child.prototype = createInstance(Parent.prototype);
	Child.prototype.constructor = Child;
	Child.parent = Parent.prototype;
}

function createInstance(proto) {
	function F() {};
	F.prototype = proto;
	return new F;
}

// Animal class
function Animal(name) {
	this.name = name;
}
Animal.prototype.run = function() {
	return this + " is running!<br/>";
}
Animal.prototype.toString = function() {
	return this.name;
}

// Rabbit class
function Rabbit(name) {
	Rabbit.parent.constructor.apply(this, arguments);
}

// inherit
inherit(Rabbit, Animal);

// override
Rabbit.prototype.run = function() {
	var result = Rabbit.parent.run.apply(this);
	return result + this + " bounces high into the sky!<br/>";
}