# Prototype

## Wikipedia definition

Prototype is used when the type of objects to create is determined by a prototypical instance, which is cloned to produce new objects. This pattern is used to:

- avoid subclasses of an object creator in the client application, like the factory method pattern does;
- avoid the inherent cost of creating a new object in the standard way (e.g., using the 'new' keyword) when it is prohibitively expensive for a given application;

## Applicability

You should use the Prototype pattern when the system must not be dependent on how objects are created, arranged and represented inside it:

- instantiated classes are defined at runtime, for example, using dynamic loading;
- in order to avoid building hierarchies of classes or factories parallel to product class hierarchies;

## Structure

![Prototype Pattern structure](https://miro.medium.com/max/1200/1*k445Y_YUwZ-ZypRZYKnhqw.png);

## Members

- **Prototype**
  - declares an interface for cloning itself;
- **ConcretePrototype**
  - implements the operation of self-cloning;
- **Client**
  - creates a new object, referring to the prototype with a request to clone itself;

## Relationship

The client is referring to the prototype to create his own copy.

## Results

The Prototype has the same results as the [Abstract Factory](https://github.com/kirillgenets/js-design-patterns/tree/master/patterns/creational-patterns/abstract-factory) and [Builder](https://github.com/kirillgenets/js-design-patterns/tree/master/patterns/creational-patterns/builder) patterns: it encapsulates from client concrete classes of products, reducing by this the amount of known names for the client.

Extra pros of the Prototype pattern:

- adding and removing products during the runtime;
- provides the ability to clone objects without coupling to their concrete classes;
- reducing the amount of subclasses;
- dynamic configuration of the application by classes;

And cons:

- cloning complex objects that have circular references might be very tricky;

## Our example
