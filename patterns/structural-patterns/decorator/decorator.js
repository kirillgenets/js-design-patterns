// Component
class Laptop {
	constructor() {
		this.name = 'Laptop';
		this.characteristics = {
			keyboardIllumination: false,
			IPS: false,
		};
	}

	getCharacteristics() {
		return this.characteristics;
	}

	getName() {
		return this.name;
	}
}

// ConcreteComponent
class XiaomiLaptop extends Laptop {
	constructor() {
		super();
		this.name = 'Xiaomi';
		this.characteristics = {
			keyboardIllumination: false,
			IPS: false,
		};
	}
}

// Decorator
class LaptopDecorator {
	constructor(laptop) {
		this.name = laptop.getName();
		this.characteristics = laptop.getCharacteristics();
	}

	getCharacteristics() {}

	getName() {}
}

// ConcreteDecorator
class WithKeyboardIllumination extends LaptopDecorator {
	constructor(laptop) {
		super(laptop);
	}

	getCharacteristics() {
		return {
			...this.characteristics,
			keyboardIllumination: true,
		};
	}

	getName() {
		return `${this.name} with keyboard illumination`;
	}
}

// ConcreteDecorator
class WithIPSMatrix extends LaptopDecorator {
	constructor(laptop) {
		super(laptop);
	}

	getCharacteristics() {
		return {
			...this.characteristics,
			IPS: true,
		};
	}

	getName() {
		return `${this.name} with IPS matrix`;
	}
}

// Usage

const xiaomiLaptop = new XiaomiLaptop();
console.log(xiaomiLaptop.getName());
console.log(xiaomiLaptop.getCharacteristics());

const xiaomiLaptopWithKeyboardIllumination = new WithKeyboardIllumination(
	xiaomiLaptop
);
console.log(xiaomiLaptopWithKeyboardIllumination.getName());
console.log(xiaomiLaptopWithKeyboardIllumination.getCharacteristics());

const xiaomiLaptopWithIPSMatrix = new WithIPSMatrix(xiaomiLaptop);
console.log(xiaomiLaptopWithIPSMatrix.getName());
console.log(xiaomiLaptopWithIPSMatrix.getCharacteristics());

const xiaomiLaptopWithFullEquipment = new WithKeyboardIllumination(
	new WithIPSMatrix(xiaomiLaptop)
);
console.log(xiaomiLaptopWithFullEquipment.getName());
console.log(xiaomiLaptopWithFullEquipment.getCharacteristics());
