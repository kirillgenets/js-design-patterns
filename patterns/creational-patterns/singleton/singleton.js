// Singleton
class Counter {
	constructor() {
		if (Counter.instance) {
			return Counter.instance;
		}

		this.value = 0;
		Counter.instance = this;

		return this;
	}

	getValue() {
		return this.value;
	}

	increaseValue() {
		return this.value++;
	}
}

// Usage

const firstCounter = new Counter();
const secondCounter = new Counter();

firstCounter.increaseValue();
firstCounter.increaseValue();
firstCounter.increaseValue();

secondCounter.increaseValue();
secondCounter.increaseValue();

console.log(
	'First:',
	firstCounter.getValue(),
	'Second:',
	secondCounter.getValue()
); // values ​​are the same!
