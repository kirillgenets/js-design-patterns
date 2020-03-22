# Abstract Factory

## Wikipedia definition

The abstract factory pattern provides a way to encapsulate a group of individual factories that have a common theme without specifying their concrete classes.

## Applicability

You should use Abstract Factory pattern when:

- the system should not depend on how the objects included in it are created, compiled, and presented;
- interconnected objects belonging to the family must be used together and you need to ensure that this restriction is met;
- the system must be configured by one of the families of its constituent objects;
- you want to provide the library of objects, revealing only their interfaces, but not implementation;

## Structure

![Structure of Abstract Factory pattern](https://web.tecnico.ulisboa.pt/~david.matos/w/pt/images/thumb/a/a6/Abstract-factory-dpcd.png/1050px-Abstract-factory-dpcd.png)

## Members

- **AbstractFactory**:
  - declares an interface for operations, that are creating abstract product objects;
- **ConcreteFactory**
  - implements operations, that are creating concrete objects-products;
- **AbstractProduct**
  - declares an interface for a product object type;
- **ConcreteProduct**
  - declares product object created by appropriate concrete factory;
  - implements the interface of AbstractProduct;
- **Client**
  - uses only interfaces that are declared in AbstractFactory and AbstractFactory classes;

## Relationship

- Usually during the runtime only class instance of ConcreteFactory is being created. This concrete factory creates product objects. To create other types of objects client must use other concrete factory.
- AbstractFactory trusts creation of product objects to its ConcreteFactory;

## Results

The Abstract Factory pattern has its pros:

- it isolates concrete classes;
- simplifies replacement product families;
- guaranties compatibility of products;

And cons:

- difficult to support new types of products;

## Our example

In the file [abstract-factory.js](https://github.com/kirillgenets/js-design-patterns/patterns/creational-patterns/abstract-factory/abstract-factory.js) we are implementing an abstract factory, that will create mobile phones.
