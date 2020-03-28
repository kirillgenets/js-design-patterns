// Product
class Car {
	constructor() {
		this.hasAutoPilot = false;
		this.hasParktronic = false;
		this.hasSignaling = false;
		this.engine = '';
	}
}

// Builder
class CarBuilder {
	addAutoPilot() {}
	addParktronic() {}
	addSignaling() {}
	setEngine() {}
	builde() {}
}

// ConcreteBuilder
class LADACarBuilder extends CarBuilder {
	constructor() {
		super();
		this.car = new Car();
	}

	addAutoPilot() {
		this.car.hasAutoPilot = false;
		return this;
	}

	addParktronic() {
		this.car.hasParktronic = false;
		return this;
	}

	addSignaling() {
		this.car.hasSignaling = false;
		return this;
	}

	setEngine() {
		this.car.engine = 'bad engine';
		return this;
	}

	build() {
		return this.car;
	}
}

// ConcreteBuilder
class AudiCarBuilder extends CarBuilder {
	constructor() {
		super();
		this.car = new Car();
	}

	addAutoPilot() {
		this.car.hasAutoPilot = true;
		return this;
	}

	addParktronic() {
		this.car.hasParktronic = true;
		return this;
	}

	addSignaling() {
		this.car.hasSignaling = true;
		return this;
	}

	setEngine() {
		this.car.engine = 'good engine';
		return this;
	}

	build() {
		return this.car;
	}
}

// Director
class CarsDirector {
	constructCar(builder) {
		return builder
			.addAutoPilot()
			.addParktronic()
			.addSignaling()
			.setEngine()
			.build();
	}
}

// Usage

const mechanic = new CarsDirector();
const newCoolAudiQ7 = mechanic.constructCar(new AudiCarBuilder()); // we can use with the help of director
const oldBadLADAPriora = new LADACarBuilder()
	.addAutoPilot()
	.addParktronic()
	.addSignaling()
	.setEngine()
	.build();

console.log('Audi Q7: ', newCoolAudiQ7);
console.log('LADA Priora: ', oldBadLADAPriora);
