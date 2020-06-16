# Flyweight

## Wikipedia definition

The **Flyweight** pattern is a software design pattern. A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. Often some parts of the object state can be shared, and it is common practice to hold them in external data structures and pass them to the objects temporarily when they are used.

## Applicability

The effectiveness of the **Flyweight** pattern depends on the way it is used. You should use the **Flyweight** pattern when all the conditions below are fulfilled:

- there are lots of objects in the system;
- overhead storage costs are high;
- it is possible to take out most part of the objects state;
- it is possible to replace lots of groups of objects with a relatively small amount of splittable objects;
- the application is not depending on the object identity;

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
