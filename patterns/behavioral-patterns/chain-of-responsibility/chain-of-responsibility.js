// Handler
class Account {
	pay(orderPrice) {
		if (this.canPay(orderPrice)) {
			console.log(`Paid ${orderPrice} using ${this.name}`);
		} else if (this.incomer) {
			console.log(`Cannot pay using ${this.name}`);
			this.incomer.pay(orderPrice);
		} else {
			console.log('Unfortunately, not enough money');
		}
	}

	canPay(amount) {
		return this.balance >= amount;
	}

	setNext(account) {
		this.incomer = account;
	}
}

// ConcreteHandler
class Master extends Account {
	constructor(balance) {
		super();
		this.name = 'Master Card';
		this.balance = balance;
	}
}

// ConcreteHandler
class PayPal extends Account {
	constructor(balance) {
		super();
		this.name = 'Paypal';
		this.balance = balance;
	}
}

// ConcreteHandler
class Qiwi extends Account {
	constructor(balance) {
		super();
		this.name = 'Qiwi';
		this.balance = balance;
	}
}

// Usage

const masterCard = new Master(1000);
const payPal = new PayPal(2000);
const qiwi = new Qiwi(5000);

masterCard.setNext(payPal);
payPal.setNext(qiwi);

masterCard.pay(3000);
