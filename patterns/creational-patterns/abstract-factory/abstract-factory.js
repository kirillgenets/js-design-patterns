// Abstract products
class TouchscreenPhone {}

class PushButtonPhone {}

// Abstract factory
class MobilePhonesFactory {
	createTouchscreenPhone() {}

	createPushButtonPhone() {}
}

// Concrete products
class SamsungTouchscreenPhone extends TouchscreenPhone {
	constructor() {
		super();
		console.log('Samsung Touchscreen Phone');
	}
}

class SamsungPushButtonPhone extends PushButtonPhone {
	constructor() {
		super();
		console.log('Samsung Push-button Phone');
	}
}

class XiaomiTouchscreenPhone extends TouchscreenPhone {
	constructor() {
		super();
		console.log('Xiaomi Touchscreen Phone');
	}
}

class XiaomiPushButtonPhone extends PushButtonPhone {
	constructor() {
		super();
		console.log('Xiaomi Push-button Phone');
	}
}

// Concrete factories
class SamsungFactory extends MobilePhonesFactory {
	constructor() {
		super();
	}

	createTouchscreenPhone() {
		return new SamsungTouchscreenPhone();
	}

	createPushButtonPhone() {
		return new SamsungPushButtonPhone();
	}
}

class XiaomiFactory extends MobilePhonesFactory {
	constructor() {
		super();
	}

	createTouchscreenPhone() {
		return new XiaomiTouchscreenPhone();
	}

	createPushButtonPhone() {
		return new XiaomiPushButtonPhone();
	}
}

// Usage
const xiaomiPhonesFactory = new XiaomiFactory();
xiaomiPhonesFactory.createTouchscreenPhone(); // creating Xiaomi touchscreen phone

const samsungPhonesFactory = new SamsungFactory();
samsungPhonesFactory.createPushButtonPhone(); // creating Samsung push-button phone
