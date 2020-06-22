# Command

## Wikipedia definition

The **Proxy** pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.

## Applicability

You should use the **Command** pattern when you want to:

- parametrize objects by a performed action;
- determine, queue and perform requests at a different time;
- support cancellation of operations;
- support changes logging so it is possible to perform them again after a system emergency stop;
- structure the system on the basis of the high-level operations, built from primitive operations;

## Structure

![Structure of the Command pattern](https://upload.wikimedia.org/wikipedia/ru/0/0c/Command.gif)

## Members

- **Command**
  - defines an interface for the operation implementation;
- **ConcreteCommand**
  - defines communication between the **Receiver** and action;
  - implements the **execute** method by calling appropriate methods from the **Receiver** object;
- **Client**
  - creates an object of the **ConcreteCommand** class and sets its receiver;
- **Invoker**
  - refers to the command for the request fulfillment;
- **Receiver**
  - "knows" about the ways to perform operations, required for the request fulfillment;

## Relationship

- the client creates a **ConcreteCommand** object and sets a receiver for it;
- **Invoker** saves the **ConcreteCommand** object;
- the initiator sends a request by calling the **execute** method;
- the **ConcreteCommand** object calls the receiver methods for request fulfillment;

## Results

The **Command** pattern has its pros:

- Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform these operations;
- Open/Closed Principle. You can introduce new commands into the app without breaking existing client code;
- you can implement undo/redo;
- you can implement deferred execution of operations;
- you can assemble a set of simple commands into a complex one;

And one disadvantage:

- the code may become more complicated since you’re introducing a whole new layer between senders and receivers;

## Our example

In the file [command.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/behavioral-patterns/command/command.js) we are implementing a proxy for the car access.
