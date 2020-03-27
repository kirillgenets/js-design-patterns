# Factory Method

## Wikipedia definition

Factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created. This is done by creating objects by calling a factory method—either specified in an interface and implemented by child classes, or implemented in a base class and optionally overridden by derived classes—rather than by calling a constructor.

## Applicability

You should use the Factory Method pattern when:

- the class does not know in advance objects of which classes it needs to create;
- the class is designed so that the objects that it creates were specified by subclasses;
- the class delegates its duties to one of his subclasses and you are planning to localize the knowledge about which class is getting this duties on itself;

## Structure

![Factory Method structure](https://i.stack.imgur.com/B9hpn.png)

## Members

- **Product**
  - declares the interface of objects created by the Factory Method;
- **ConcreteProduct**
  - implements the interface of Product;
- **Creator**
  - declares the Factory Method that is returning the object of type Product. The Creator can also define an implementation by the default of the Factory Method, that is returning the ConcreteProduct object;
- **ConcreteCreator**
  - replaces the Factory Method, that is returning the ConcreteProduct object;

## Relationship

The Creator relies on its subclasses in the definition of the Factory Method, that will return an instance of the suitable ConcreteProduct.

## Results

The Factory Method has its pros:

- you can avoid tight coupling between the creator and the concrete products.
- you can move the product creation code into one place in the program, making the code easier to support.
- you can introduce new types of products into the program without breaking the existing client code.

And cons:

- the code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best-case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.

## Our example

In the file [factory-method.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/creational-patterns/factory-method/factory-method.js) we are implementing a factory method, that will create logistics company.
