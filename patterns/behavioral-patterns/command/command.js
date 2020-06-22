// Invoker
class Driver {
	constructor(command) {
		this.command = command;
	}

	execute() {
		this.command.execute();
	}
}

// Receiver
class Engine {
	constructor() {
		this.state = false;
	}

	on() {
		this.state = true;
	}

	off() {
		this.state = false;
	}
}

// ConcreteCommand
class OnSwitchOnCommand {
	constructor(engine) {
		this.engine = engine;
	}

	execute() {
		this.engine.on();
	}
}

// ConcreteCommand
class OnSwitchOffCommand {
	constructor(engine) {
		this.engine = engine;
	}

	execute() {
		this.engine.off();
	}
}

// Usage
const engine = new Engine();
console.log(engine.state);

const onSwitchOn = new OnSwitchOnCommand(engine);
const driver = new Driver(onSwitchOn);

driver.execute();

console.log(engine.state);
