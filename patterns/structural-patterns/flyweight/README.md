# Flyweight

## Wikipedia definition

The **Flyweight** pattern is a software design pattern. A flyweight is an object that minimizes memory usage by sharing as much data as possible with other similar objects; it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory. Often some parts of the object state can be shared, and it is common practice to hold them in external data structures and pass them to the objects temporarily when they are used.

## Applicability

The effectiveness of the **Flyweight** pattern depends on the way it is used. You should use the **Flyweight** pattern when all the conditions below are fulfilled:

- there are lots of objects in the system;
- overhead storage costs are high;
- it is possible to take out most part of the objects state;
- it is possible to replace lots of groups of objects with a relatively small amount of shared objects;
- the application is not depending on the object identity;

## Structure

![Structure of the Flyweight  pattern](https://zhaoyan.website/xinzhi/design/html/pics/fly.png)

## Members

- **Flyweight**
  - defines an interface, with the help of which flyweights can get the external state or affect it somehow;
- **ConcreteFlyweight**
  - implements the interface of the **Flyweight** class and adds the internal state if it is needed. The object of this class must be shared. Any of its states must be internal, without external dependencies;
- **UnsharedConcreteFlyweight**
  - an unshared version of the **ConcreteFlyweight**;
- **FlyweightFactory**
  - creates the **Flyweight** objects and manipulates them;
- **Client**
  - keeps the links to the one or many flyweights;
  - calculates or keeps the external state of the flyweights;

## Relationship

- it is possible to characterize the state, that is needed for the flyweight for correct work as internal or external. The first is kept inside the **ConcreteFlyweight**. The external state is kept or calculated by clients. The client shares the state to the flyweight when calling its methods;
- clients should not create the **ConcreteFlyweight** instances directly, but can get the only from the **FlyweightFactory** object;

## Results

When using the flyweights expenses for the transfer, searching or calculation of the external state are not excluded, especially if before it was kept as internal. But such expenses are fully compensated by the economy of the memory due to separation of the flyweights objects.

The **Flyweight** pattern has its main advantage:

- you can save lots of RAM, assuming your program has tons of similar objects;

And some disadvantages:

- you might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method;
- the code becomes much more complicated;

## Our example

In the file [facade.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/structural-patterns/facade/facade.js) we are implementing a facade for the laptops conveyor.
