# Decorator

## Wikipedia definition

The **Decorator** pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.

## Applicability

You should use the **Decorator** pattern:

- for dynamic, transparent to customers additions of responsibility to objects;
- for the implementation of duties that may be removed from the facility;
- when the expansion through the creation of subclasses is not possible;

## Structure

![Structure of the Decorator pattern](https://www.jyt0532.com/public/decorator7.png)

## Members

- **Component**
  - defines an interface for objects to which additional responsibilities can be added dynamically;
- **ConcreteComponent**
  - defines the object with additional responsibilities;
- **Decorator**
  - keeps a link to the **Component** object and defines an interface appropriate to the **Component** interface;
- **ConcreteDecorator**
  - adds additional responsibilities to the component;

## Relationship

The **Decorator** redirects requests to the **Component** object. Can also perform additional operations after redirection.

## Results

The **Decorator** pattern has at least 2 pros:

- it has more flexibility than with static inheritance;
- it lets us avoid overloaded with methods top levels of the hierarchy;

And 2 cons:

- the decorator and its component are not identic;
- lots of small objects;

## Our example

In the file [decorator.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/structural-patterns/decorator/decorator.js) we are implementing a decorator, that we will use to expand laptops base characteristics.
