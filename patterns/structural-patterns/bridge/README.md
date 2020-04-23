# Bridge

## Wikipedia definition

The Bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently", introduced by the Gang of Four. The bridge uses encapsulation, aggregation, and can use inheritance to separate responsibilities into different classes.

## Applicability

You should use the Bridge pattern when:

- you want to avoid permanent binding of abstraction to the implementation. So, for example, sometimes you may need to choose the implementation during the runtime;
- both abstractions and implementations must be expanded by new subclasses. In this case, the **Bridge** pattern lets us combine different abstractions and implementations and change them independently;
- changes in the implementation must not affect the client, i.e the client's code mustn't be recompiled;
- you want split one implementation between several objects and you need to hide it from the client;

## Structure

![Structure of the Bridge pattern]https://miro.medium.com/max/1838/1*UmKKDvmeIUGY3gbPLvYYQQ.png)

## Members

- **Abstraction**
  - defines an interface of the abstraction;
  - stores a link to the object of the **Implementor** type;
- **RefinedAbstraction**
  - expands an interface, defined by the **Abstraction**;
- **Implementor**
  - defines an interface for the implementation classes. It doesn't have to match the interface of the **Abstraction** class. Actually, both interfaces can be totally different. Usually, the interface of the **Implementor** has only primitive operations, and the **Abstraction** class defines operations of the higher level, based on this primitives;
- **ConcreteImplementor**
  - contains a concrete implementation of the **Implementor** class interface;

## Relationship

The **Abstraction** object redirects the client's requests to its **Implementor** object.

## Results

These are usage results of the **Bridge** pattern:

- separation of the implementation and interface;
- increase of the extensibility;
- hiding the implementation details from clients;

## Our example

In the file [bridge.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/structural-patterns/bridge/bridge.js) we are implementing a bridge, that we will use to create cars of different types and colors.
