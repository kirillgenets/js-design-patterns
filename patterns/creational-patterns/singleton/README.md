# Singleton

## Wikipedia definition

The Singleton pattern is a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.

## Applicability

You should use the Singleton pattern, when:

- there must be only one instance of a class, easily accessible for all clients;
- a single instance should be extended by generating subclasses, and clients should be able to work with the extended instance without modifications of their own code;

## Structure

![Singleton Structure](https://cdn-images-1.medium.com/max/2224/0*Sh3qaWe7E5IHnKAS.png)

## Members

- **Singleton**
  - defines the `getInstance` static method, which allows clients to get access to a single instance;
  - can be responsible for creating its own unique instance;

## Relationship

Clients get an access to the instance of the **Singleton** class only by its static method `getInstance`.

## Results

By using the Singleton pattern we can see its pros:

- you can be sure that a class has only a single instance.
- you gain a global access point to that instance.
- the singleton object is initialized only when it’s requested for the first time.

And a lot of cons:

- violates the Single Responsibility Principle. The pattern solves two problems at the time;
- the Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other;
- the pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times;
- it may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects;

## [Our example](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/creational-patterns/singleton/singleton.js)
