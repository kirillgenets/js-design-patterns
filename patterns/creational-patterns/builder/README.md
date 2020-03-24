# Builder

## Wikipedia definition

The builder pattern is a design pattern designed to provide a flexible solution to various object creation problems in object-oriented programming. The intent of the Builder design pattern is to separate the construction of a complex object from its representation. It is one of the Gang of Four design patterns.

## Applicability

You should use Builder pattern when:

- the algorithm of creating complex object shouldn't be dependent of which parts it consists and how they are connected with each other;
- the process of constructing must provide different representations of constructing object;

## Structure

![Structure of Builder pattern](https://kborra.files.wordpress.com/2014/04/1.png)

## Members

- **Builder**
  - declares abstract interface for building parts of Product object;
- **ConcreteBuilder**
  - constructs and combines together parts of product by the implementation of Builder interface, declares creating representation and looks for it, provides an interface for the access to product;
- **Director**
  - constructs an object using the Builder interface;
- **Product**
  - a complex constructed object, includes classes that describe components and also interfaces for building the end result from parts;
