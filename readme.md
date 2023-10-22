**Typescript: The Complete Developer's Guide**

YY's Journey to start learning, familiarising and experimenting with Typescript for self-improvement and upgrading.

# Section 3 : Type Annotations in Action

- Covered type annotations

## Function Literals:

Think about

- What arguments go into the function?
- What different types of values we expect the function to return?

Type Inference:

- Use it as much as possible

Type Annotations:

- When declaring a var on 1 line, then initialising it later
- Want a var to have a type that can't be inferred
- When a fn returns the "any" type ; need to clarify the value

JSON.parse() : one of the many fns that returns the "any" type

# Section 4 : Annotations With Functions & Functions

- Always use type annotation for output of functions : be intentional about whether there should
- Void: no return value
- Be careful with object destructuring!

# Section 5 : Mastering Typed Arrays

- Arrays where each element is a consistent type of value

# Section 6: Tuples in Typescript

- Tuples : array-like structure, each element represents some property of a record
- Fixed order
- Might not be used often in Ts

# Section 7: The All-Important Interface

- Interfaces : creates a new type, describes property names and value types of an object
- Can fix long annotations just by accessing Interfaces

# Section 8: Building Functionality with Classes

- Classes : blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

Difference between ES2015 classes vs TS classes

Modifiers : keywords that can be placed on different methods and properties inside of a class.

Goals: restrict access to different functions or different variables.

Modifier Options:

- public (default) : this method can be called anywhere, anytime.
- private: this method can only be called by other methods in this class. To restrict access to a function.
- protected : can only be called by other methods in this class or by other methods in child classes of parent class.

Constructor : a special function needed to pass arguments into a class when creating an instance of it.

# Section 9 : Design Patterns with Typescript

- file whose primary purpose is to create an export / class : usually capitalise
- avoid default exports
- pay attention to whenever you have duplicated code / code that looks very similar : think about can they be extracted out?
- if there's duplicate code, can consider using Interfaces!
- when using an OR ("|") operator, Ts will only allow us to access / use properties if it exists on both Types!
- A value can have multiple types if it fulfills the requirement of a Interface (e.g type User and type Mappable)
- Implements: We want to make sure a sub-class satisfy all the requirements / properties of the interface. This allows for better error and code checking.
- Using implements tells Ts to help us satisfy the requirements of a particular interface. Ts does additional checking and can point us to the true source of the error.
- Implements is optional! But it helps us , helps other engineers for better code clarity. It allows Ts to help us better pinpoint the source of errors better!

## Type Guard

- used to restore access to a set of properties in a union type
- typeof : number, string, booleaan, symbol
  - e.g. typeof var === "string"
- instanceof : every other value that is created with a constructor function
  - e.g. variable instanceOf Array/etc

# Section 10: More on Design Patterns

- tsconfig.json : Ts compiler configuration file that customises how the compiler behaves.
- to create a tsconfig.json file: tsc --init
- to create a package.json file: npm init -y
- tsc -w : watch all the files within the root directory : any time the code is changed, compiler will automatically recompile and stick it into the output directory.
- npm packages used: nodemon & concurrently
- node reruns Node any time a file changes inside the project

Bubble Sort Algorithm Used for this particular section.

- after first iteration, greatest element is guaranteed to be on RHS
- in future iterations, will not have to consider the last element
- not the fastest! not recommended to use, only specifically for this project
- every string has an ASCII value, can be found out via charCodeAt. Comparison of strings behind the scenes uses these numbers.

## Type Guards:

- check on a particular variable, clarify the type of value we are going to be working with
- by clarifying the type we are working with, it restores access to all the different properties associated with the original type, instead of just the common methods when working with a union.
- not necessarily the best code format

## Inheritance :

- extending properties to share
- reminder: child must call a super() function to use parent methods

## Abstract Classes:

- can't be used to create an object directly -> can't create an instance of it
- can only be used as a parent class
- can contain real implementation for some methods
- implemented methods can refer to other methods that don't exist yet
- can make child classes promise to implement some other method
- use abstract before the class, then declare the abstract properties within the class

- If a child class has no constructor, no need to call super().

## Interfaces VS Abstract Classes

### Interfaces:

- set up "contract" between classes
- use when we have very different objects that we want them to work together
- promotes loose coupling

### Inheritance / Abstract Classes:

- Sets up "contract" between classes
- Use when trying to build up a definition of an object
- Strongly couples classes together

# Section 11 : Reusable Code

Refresher:

- npm init -y : package.json file
- tsc --init : tsconfig file
- npm install @types/node

- fs.readFileSync : can read any type of file
- encoding : what's the expected value
- utf:8 : return a string

## Using Enums:

- enumerations : object that stores closely related values
- near-identical syntax rules as normal objects
- creates an object with same keys and values when converted from Ts to Js
- small fixed set of values, known at compile time

Refresher: define your own tuple with type

## Generics :

- like function arguments, but for types in class/function definitions
- allow us to define the type of a property/argument/return value at a future point
- used heavily when writing reusable code
- using <> : use eexactly like how a function works
  - example: class HoldAnything<TypeOfData> {data: TypeOfData}

## Inheritance vs Composition:

- Inheritance: abstract class CSVFileReader, used it to make a child class MatchReader.

  - Parent class with core functionality around a CSV file reader.
  - Extended the class, customised child class and behaviour.
  - Characterised by a "is a" relationship between 2 classes.
  - Basically child class literally "inheriting" some properties from a parent class.

- Composition: have a class MatchReader , which referenced other object (DataReader)
  - Reader property needs to satisfy DataReader interface.
  - can swap in styles easily to customise how MatchReader behaves (e.g. reading from API or from CSV)
  - Characterised by a "has a" relationship between 2 classes

### More on Inheritance vs Composition:

- Favor delegation as a way to implement composition.

---

- Static Methods can be called without calling an instance.

# Section 12 : Advanced Generics

No new comments or notes.

# Section 13 : Build a Web Framework

Model Classes: handle data, used to rep users, blog posts, images etc
View Classes: handle HTML and events caused by user (e.g. clicks)

- IN Js/Ts, all object keys are strings.
- Can use generic types on functions as well.
- Keys of an object can be a type as well.
- Be flexible : don't have to always strictly use inheritance/composition just because it has some specific advantages or disadvantages. Swap as and when needed as the situation calls for it.

- Element refers to any HTML element.
- Template element turns some stirng into actual HTMl that can be inserted into the DOM.

# Section 14 : Express + Ts Integration

TS with JS libraries:

- Use the lib normally, adding in basic type annotations whre possible
- Use a TS adapter library that has helpers for using the lib with TS
- Twist your lib to work with TS classes.

- Remember to install @types/(3rd party library) to use with Ts
- Express does not automatically parse the contents of a form .
  - need to use body-parser middleware

## Body Parser middleware

- submit: submit HTTP request over internet to a server
- has a server, also has information attached to the body of the request
- body has some info, but it's in encoded state.
- express generates a request object, e.g. IP and hostname and others.
- by default, a request object does NOT have a body property.
- the Request object is passed into the BodyParser middleware, which inspects the incoming HTTP request. BodyParser parse the information and attach to the Request object.

One of the most important jobs of Ts:

- understand the different properties than an object has.

Technically the 3rd party libraries are counter-productive to what Ts does.

- TS has no idea what's going inside the middleware. Middleware in general attempt to modify the diff properties on the request and response objects. TS has no way to be informed about the presence / the change of these different properties.
- sometimes type definition files tell the wrong story as well.

# Section 15 : Decorators

# Section 16 : Advanced Express + Ts Integration

# Section 17: React and Redux Class Components with Ts

# Section 18: React Functional Components with Ts

# Section 19: Redux with Functional Components and Ts

# Section 20: Extras
