// Target
class OldEngine {
	simpleInterface() {
		console.log('Old engine is on!');
	}
}

// Adaptee
class NewEngine {
	complexInterface() {
		console.log('New engine is on!');
	}
}

// Adapter
class NewEngineAdapter {
	constructor(engine) {
		this.engine = engine;
	}

	simpleInterface() {
		this.engine.complexInterface();
	}
}

// Client
class OldCar {
	startEngine(engine) {
		engine.simpleInterface();
	}
}

// Usage
const oldCar = new OldCar();
const oldEngine = new OldEngine();

oldCar.startEngine(oldEngine); // everything is fine in the console

const newEngine = new NewEngine();
const adaptedNewEngine = new NewEngineAdapter(newEngine);

oldCar.startEngine(adaptedNewEngine); // everything is fine in the console

// Usage without adapter
oldCar.startEngine(newEngine); // ERROR!
