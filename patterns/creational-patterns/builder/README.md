# Builder

## Wikipedia definition

The builder pattern is a design pattern designed to provide a flexible solution to various object creation problems in object-oriented programming. The intent of the Builder design pattern is to separate the construction of a complex object from its representation. It is one of the Gang of Four design patterns.

## Applicability

You should use the Builder pattern when:

- the algorithm of creating complex object shouldn't be dependent of which parts it consists and how they are connected with each other;
- the process of constructing must provide different representations of constructing object;

## Structure

![Structure of Builder pattern](https://kborra.files.wordpress.com/2014/04/1.png)

## Members

- **Builder**
  - declares an abstract interface for building parts of Product object;
- **ConcreteBuilder**
  - constructs and combines parts of the product by the implementation of Builder interface, declares creating representation and looks for it, provides an interface for the access to product;
- **Director**
  - constructs an object using the Builder interface;
- **Product**
  - a complex constructed object includes classes that describe components and also interfaces for building the end result from parts;

## Relationship

- the client creates the Director object-manager and configures it using the necessary Builder object builder;
- manager notifies the builder that it is time to build another part of the product;
- builder processes requests of the manager and adds new parts to the product;
- the client takes the product from the builder;

## Results

The Builder pattern has its pros:

- allows changing the internal representation of the product;
- isolates code, that implements the construction and representation;
- gives finer control over the construction process;

And cons:

- ConcreteBuilder and the product it creates are tightly interconnected, so if you make changes to the product class, you will most likely have to change the ConcreteBuilder class too.

## Our example

In the file [builder.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/creational-patterns/builder/builder.js) we are implementing a builder, that will create cars.
