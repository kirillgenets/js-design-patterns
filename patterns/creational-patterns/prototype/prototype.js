// Prototype
class Shape {
	constructor(props) {
		this.width = props.width;
		this.height = props.height;
		this.x = props.x;
		this.y = props.y;
	}

	clone() {
		return new Shape(this);
	}
}

// ConcretePrototype
class Ellipse extends Shape {
	constructor(props) {
		super(props);

		this.radius = props.radius;
	}

	clone() {
		console.log(
			`Ellipse is cloned with width=${this.width} and height=${this.height}!`
		);
		return new Ellipse(this);
	}
}

// ConcretePrototype
class Rectangle extends Shape {
	constructor(props) {
		super(props);

		this.borderRadius = props.borderRadius;
	}

	clone() {
		console.log(
			`Rectangle is cloned with width=${this.width} and height=${this.height}!`
		);
		return new Rectangle(this);
	}
}

// Usage
const rectanglePrototype = new Rectangle({
	width: 100,
	height: 50,
	x: 0,
	y: 0,
});

const square = rectanglePrototype.clone();
square.width = 50; // creating new prototype during the runtime
square.height = 50; // creating new prototype during the runtime

const oneMoreSquare = square.clone();

const ellipsePrototype = new Ellipse({
	width: 100,
	height: 50,
	x: 0,
	y: 0,
});

const circle = ellipsePrototype.clone();
circle.width = 50; // creating new prototype during the runtime
circle.height = 50; // creating new prototype during the runtime

const oneMoreCircle = circle.clone();
