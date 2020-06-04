// Subsystem
class LaptopsConveyor {
	getName() {
		console.log('MacBook Pro 16"');
	}
	setComponents() {
		console.log('Components are set!');
	}
	setDisplay() {
		console.log('Display is set!');
	}
	setDesign() {
		console.log('Added beautiful design!');
	}
	setPowerAdapter() {
		console.log('Added the power adapter!');
	}

	paint() {
		console.log('Laptop is painted!');
	}
}

// Facade
class LaptopsConveyorFacade {
	constructor(laptop) {
		this.laptop = laptop;
	}

	assembleLaptop() {
		this.laptop.setComponents();
		this.laptop.setDisplay();
		this.laptop.setDesign();
		this.laptop.setPowerAdapter();
		this.laptop.paint();
	}
}

// Usage
const conveyour = new LaptopsConveyorFacade(new LaptopsConveyor());
const laptop = conveyour.assembleLaptop();
