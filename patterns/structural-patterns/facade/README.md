# Facade

## Wikipedia definition

The **Facade** pattern is a software-design pattern commonly used in object-oriented programming. Analogous to a facade in architecture, a facade is an object that serves as a front-facing interface masking more complex underlying or structural code.

## Applicability

You should use the **Facade** pattern when:

- there is a need to provide a simple interface for the complex subsystem;
- there are lots of dependencies between the clients and abstraction implementation classes;
- there is a need to decompose the system into independent layers;

## Structure

![Structure of the Facade pattern](https://www.cs.unc.edu/~stotts/GOF/hires/Pictures/facade.gif)

## Members

- **Facade**
  - "knows", to which classes the request should be addressed;
  - delegates the clients requests to the suitable objects inside the subsystem;
- **Subsystem classes**
  - implement the subsystem functionality;
  - fulfill the tasks received from the **Facade** object;
  - "know" nothing about the **Facade** existence;

## Relationship

Clients are communicating with the subsystem by sending requests to the **Facade**. The **Facade** redirects them to the suitable objects inside the subsystem. Sometimes it may be required for the **Facade** to convert its interface in to the subsystem interfaces.
Clients **don't have direct access to the subsystem objects**.

## Results

The **Facade** pattern has its pros:

- it isolates clients from the subsystem components, reducing by this the count of objects with which clients should deal with, and by this it makes the work with the system simpler;
- it lets us reduce the connectedness between the subsystem and its clients;

And one disadvantage:

- it can become a god object coupled to all classes of the application;

## Our example

In the file [facade.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/structural-patterns/facade/facade.js) we are implementing a facade for the laptops conveyor.
