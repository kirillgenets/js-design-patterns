# Bridge

## Wikipedia definition

The Bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently", introduced by the Gang of Four. The bridge uses encapsulation, aggregation, and can use inheritance to separate responsibilities into different classes.

## Applicability

You should use the Bridge pattern when:

- you want to avoid permanent binding of abstraction to the implementation. So, for example, sometimes you may need to choose the implementation during the runtime;
-

## Structure

![Structure of the Adapter pattern](https://i.stack.imgur.com/1mPAh.gif)

## Members

- **Target**
  - defines a dependent on the subject area interface, which is used by **Client**;
- **Client**
  - enters into a relationship with objects, complying with the **Target** interface;
- **Adaptee**
  - defines an existing interface, which needs to be adapted;
- **Adapter**
  - adapts the **Adaptee** interface to the **Target** interface;

## Relationship

Clients are calling operations of the adapter **Adapter** instance. In its turn, adapter calls methods of the adaptable object or class, which fulfills the request.

## Results

Usage results of objects and classes adapters are different. Class adapter:

- adapts the **Adaptee** to the **Target**, delegating actions to a specific **Adaptee** class. That's why this pattern will not work if we want to adapt class and its subclasses at one time;
- lets the **Adapter** replace several methods of the adaptable **Adaptee** class, because the **Adapter** is the **Adaptee's** subclass;
- introduces only one new object. To reach the adaptable class, there is no need in any extra reference signs.

Object adapter:

- lets one **Adapter** work with lots of adaptable **Adaptee** objects, i.e with **Adaptee** and its subclasses. Adapter can add new functionality right away to all adaptable objects;
- makes it difficult to replace methods of the **Adaptee** class. To do this you will need to create a subclass of the **Adaptee** and make the **Adapter** refer to this class, but not to the **Adaptee**;

## Our example

In the file [adapter.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/structural-patterns/adapter/adapter.js) we are implementing an adapter, that will adapt new engines for old cars.
