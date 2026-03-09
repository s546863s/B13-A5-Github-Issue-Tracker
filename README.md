# B13-A5-Github-Issue-Tracker
1️⃣ ## What is the difference between var, let, and const?
var
Old way to declare variables in JavaScript (before ES6)

Function scoped - only accessible inside the function where it's declared

Can be re-declared and updated

Hoisted to the top of their scope

let
Block scoped - only works inside { } where it's declared

Can be updated but cannot be re-declared in the same scope

Best for variables that will change value

const
Block scoped like let

Cannot be updated or re-declared

Must be assigned a value when declared

For arrays/objects: reference cannot change but content can

2️⃣ ## What is the spread operator (...)?
The spread operator (...) is three dots that "spreads" out elements from an array or object. Think of it like opening a box and taking everything out.

Common Uses:
Copy arrays or objects

Combine arrays or objects

Pass array elements as function arguments

Add elements to existing arrays/objects


3️⃣ ## What is the difference between map(), filter(), and forEach()?
forEach()
Loops through each array element

Does NOT return a new array

Just performs an action on each item

Original array remains unchanged

map()
Loops through each array element

RETURNS a new array with same length

Transforms each item based on logic

Original array remains unchanged

filter()
Loops through each array element

RETURNS a new array (may be shorter)

Keeps only items that pass a condition

Original array remains unchanged

4️⃣ ## What is an arrow function?
Arrow function is a shorter syntax for writing functions in JavaScript, introduced in ES6. It uses the => symbol and has some special characteristics.

Key Features:
Shorter and cleaner syntax

If one line, no need for {} and return

Does not have its own this (inherits from parent scope)

Cannot be used as a constructor

Cannot be used as methods in objects (if you need this)


5️⃣ ## What are template literals?
Template literals are a modern way to work with strings in JavaScript. They use backticks (`) instead of quotes (' or ") and provide powerful features for string manipulation.

Key Features:
Variable interpolation - embed variables directly with ${}

Multi-line strings - no need for \n or concatenation

Expression evaluation - run JavaScript inside ${}

Cleaner syntax - no more messy string concatenation