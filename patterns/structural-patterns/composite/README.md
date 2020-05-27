# Composite

## Wikipedia definition

The **Composite** pattern describes a group of objects that are treated the same way as a single instance of the same type of object. The intent of a composite is to "compose" objects into tree structures to represent part-whole hierarchies. Implementing the composite pattern lets clients treat individual objects and compositions uniformly.

## Applicability

You should use the **Composite** pattern when:

- you need to implement a hierarchy of nested objects;
- you want your clients to interpret compound and separate objects in the same way;

## Structure

![Structure of the Composite pattern](https://konspekta.net/lektsianew/baza20/6785280435418.files/image021.gif)

The structure of a typical composite object looks like this:

![Structure of the Composite pattern object](https://flylib.com/books/2/505/1/html/2/pictures/compo073.gif)

## Members

- **Сomponent**
  - defines an interface for composite objects;
  - defines an interface for the access to child objects;
  - defines an interface for the access to the parent component;
- **Leaf**
  - represents leaf nodes of the composition, that can not have children;
  - defines the behavior of leaf nodes in the composition;
- **Composite**
  - defines the behavior of components, that can have children;
  - stores child components;
  - implements methods from the **Component** interface, that connected with child components management;
- **Client**
  - manipulates composition objects by the **Component** interface;

## Relationship

Clients use the **Component** interface for the interaction with objects inside a nested structure. If the receiver of the request is a **Leaf** object, then it processes the request. When the receiver of the request is a **Composite** object, than usually it redirects a request to its children (maybe with some operations before and after the redirect).

## Results

The **Composite** pattern:

- defines classes hierarchies, consisting of simple and composite objects;
- simplifies client architecture;
- simplifies the addition of new types of components;

## Our example

In the file [composite.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/structural-patterns/composite/composite.js) we are implementing a composite, that we will use to get the price of the car calculated from components prices.
