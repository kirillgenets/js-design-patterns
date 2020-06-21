# Chain of Responsibility

## Wikipedia definition

The **Chain of Responsibility** pattern is a design pattern consisting of a source of command objects and a series of processing objects.[1] Each processing object contains logic that defines the types of command objects that it can handle; the rest are passed to the next processing object in the chain. A mechanism also exists for adding new processing objects to the end of this chain.

## Applicability

You should use the **Chain of Responsibility** pattern when:

- there are more than one object, that can handle the request, but the present handler is unknown and must be found automatically;
- you want to send the request to one from many objects without specifying to which exactly;
- a collection of objects, that can handle the request, must be set dynamically;

## Structure

![Structure of the "Chain of Responsibility" pattern](https://www.cs.uic.edu/~jbell/CourseNotes/OO_SoftwareEngineering/images/designPatterns/chainOfResponsibilityDiagram.jpg)

## Members

- **Handler**
  - defines an interface for requests handling;
  - (not required) implements the connection with successor;
- **ConcreteHandler**
  - handles the request;
  - has access to its successor;
  - if it can not handle the request by itself, it redirects the request to its successor;
- **Client**
  - sends the request to the **ConcreteHandler** inside the chain;

## Relationship

When the **Client** initiates the request, it moves along the chain while some **ConcreteHandler** will not take a responsibility to handle this request.

## Results

The **Chain of Responsibility** pattern has its pros:

- you can control the order of request handling.
- single Responsibility Principle. You can decouple classes that invoke operations from classes that perform operations.
- open/closed principle. You can introduce new handlers into the app without breaking the existing client code.

And one disadvantage:

- some requests may end up unhandled;

## Our example

In the file [chain-of-responsibility.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/behavioral-patterns/chain-of-responsibility/chain-of-responsibility.js) we are implementing a chain of responsibility that will handle bank accounts operations.
