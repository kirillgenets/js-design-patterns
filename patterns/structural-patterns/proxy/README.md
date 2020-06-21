# Proxy

## Wikipedia definition

The **Proxy** pattern is a software design pattern. A **Proxy**, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes.

## Applicability

You should use the **Proxy** pattern when:

- a remote proxy provides a local representative instead of the object, that exists in the other address space;
- a virtual proxy creates "heavy" objects on demand;
- a protecting proxy controls access to the initial object;
- a "smart" link, that provides an ability to do some actions while accessing the object;

## Structure

![Structure of the Proxy pattern](https://www.cs.mcgill.ca/~hv/classes/CS400/01.hchen/doc/proxy/proxy1.gif)

## Members

- **Proxy**
  - keeps the link, that allows the proxy to apply to the real subject;
  - provides an interface identic to the **Subject** interface, so the proxy can be always подставлен вместо реального субъекта;
  - controls access to the real subject and can take responsibility to its creation or deletion;
  - other responsibilities depend on the type of proxy;
- **Subject**
  - defines common for the **Proxy** and **RealSubject** interface, so it is possible to use the **Proxy** class everywhere, where the **RealSubject** expected;
- **RealSubject**
  - defines a real object, submitted by the proxy;

## Relationship

The **Proxy** is readdressing requests to the **RealSubject** object.

## Results

With the help of the **Proxy** pattern an additional level of indirection is introduced while accessing the object. This approach has a lot of varieties depending on the type of proxy:

- a remote proxy can hide the fact, that the object is being in the other address space;
- a virtual proxy can fulfill the optimization;
- a protecting proxy and "smart" link allow us to do extra actions while accessing the object;

And is has some disadvantages:

- the code may become more complicated since you need to introduce a lot of new classes;
- the response from the service might get delayed;

## Our example

In the file [proxy.js](https://github.com/kirillgenets/js-design-patterns/blob/master/patterns/structural-patterns/proxy/proxy.js) we are implementing a proxy for the car access.
