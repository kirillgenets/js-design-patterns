// Product
class Transport {
	deliver() {}
}

// ConcreteProduct
class Ship extends Transport {
	deliver() {
		console.log('delivery by the ship');
	}
}

// ConcreteProduct
class Truck extends Transport {
	deliver() {
		console.log('delivery by the truck');
	}
}

// Creator
class Logistics {
	planDelivery() {}
	createTransport() {}
}

// ConcreteCreator
class RoadLogistics extends Logistics {
	createTransport() {
		return new Truck();
	}
}

// ConcreteCreator
class SeaLogistics extends Logistics {
	createTransport() {
		return new Ship();
	}
}

// Usage
new SeaLogistics().createTransport().deliver(); // delivering products by ship
new RoadLogistics().createTransport().deliver(); // delivering products by car
