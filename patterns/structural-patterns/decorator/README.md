# Decorator

## Wikipedia definition

The **Decorator** pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.

## Applicability

You should use the Decorator pattern:

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
