// RealSubject
class CarDoor {
	open() {
		console.log('Car door is opened!');
	}

	close() {
		console.log('Car door is closed!');
	}
}

// Proxy
class CarSecuritySystem {
	constructor(door, password) {
		this.door = door;
		this.password = password;
	}

	open(password) {
		if (this.authenticate(password)) {
			this.door.open();
		} else {
			console.log('Access denied!');
		}
	}

	authenticate(password) {
		return this.password === password;
	}

	close() {
		this.door.close();
	}
}

// Usage

const door = new CarSecuritySystem(new CarDoor(), '123asd');

door.open('123');
door.open('lol');
door.open('123asd');
