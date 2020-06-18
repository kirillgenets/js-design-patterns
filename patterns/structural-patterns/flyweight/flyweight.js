// Flyweight
class Car {
	constructor(model) {
		this.model = model;
	}
}

// FlyweightFactory
class CarFactory {
	constructor() {
		this.models = {};
	}

	create(name) {
		if (this.models[name]) return model;
		console.count('model');

		this.models[name] = new Car(name);
		return this.models[name];
	}

	getModels() {
		console.table(this.models);
	}
}

// Usage

const factory = new CarFactory();

factory.create('BMW');
factory.create('Audi');
factory.create('Volkswagen');

factory.getModels();
