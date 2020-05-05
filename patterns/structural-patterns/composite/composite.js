// Component
class Equipment {
	getPrice() {
		return this.price || 0;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}

	setPrice(price) {
		this.price = price;
	}
}

// Leaf
class Engine extends Equipment {
	constructor() {
		super();
		this.setName('Engine');
		this.setPrice(800);
	}
}

// Leaf
class Body extends Equipment {
	constructor() {
		super();
		this.setName('Body');
		this.setPrice(3000);
	}
}

// Leaf
class Tools extends Equipment {
	constructor() {
		super();
		this.setName('Tools');
		this.setPrice(4000);
	}
}

// Composite
class Composite extends Equipment {
	constructor() {
		super();
		this.equipmentList = [];
	}

	add(equipment) {
		this.equipmentList.push(equipment);
	}

	getPrice() {
		return this.equipmentList
			.map((equipment) => equipment.getPrice())
			.reduce((sum, current) => sum + current, 0);
	}
}

// Client
class Car extends Composite {
	constructor() {
		super();
		this.setName('LADA');
	}
}

// Usage
const car = new Car();

car.add(new Engine());
car.add(new Body());
car.add(new Tools());

console.log(`${car.getName()} price is ${car.getPrice()} dollars`); // LADA price is 7800 dollars
