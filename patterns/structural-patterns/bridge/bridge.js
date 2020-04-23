class Model {
	constructor(color) {
		this.color = color;
	}
}

class Color {
	constructor(type) {
		this.type = type;
	}

	get() {
		return this.type;
	}
}

class BlackColor extends Color {
	constructor() {
		super('black');
	}
}

class WhiteColor extends Color {
	constructor() {
		super('white');
	}
}

class Audi extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Model: Audi, Color: ${this.color.get()}`;
	}
}

class BMW extends Model {
	constructor(color) {
		super(color);
	}

	paint() {
		return `Model: BMW, Color: ${this.color.get()}`;
	}
}

// Usage

const blackBMW = new BMW(new BlackColor());
console.log(blackBMW.paint());

const whiteAudi = new Audi(new WhiteColor());
console.log(whiteAudi.paint());
