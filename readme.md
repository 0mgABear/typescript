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
- protected : can only be called by other methods in this class or by other methods in child classes.

Constructor : a special function needed to pass arguments into a class when creating an instance of it.

# Section 9 : Design Patterns with Typescript

# Section 10: More on Design Patterns

# Section 11 : Reusable Code

# Section 12 : Advanced Generics

# Section 12 : Build a Web Framework
