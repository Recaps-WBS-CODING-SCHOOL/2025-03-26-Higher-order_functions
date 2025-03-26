/**
 * HIGHER-ORDER FUNCTIONS IN JAVASCRIPT
 * ====================================
 *
 * This file contains examples and explanations of higher-order functions in JavaScript.
 * It covers the basic concepts and common array methods that utilize higher-order functions.
 *
 * NOTATION GUIDE:
 * - function()   - A function (parentheses indicate it's a function)
 * - .method()    - A method (dot prefix and parentheses)
 * - object{}     - An object (curly braces)
 * - array[]      - An array (square brackets)
 *
 * To run with auto-refresh when you make changes:
 * node --watch HOF.js
 *
 */

// ==============================
// BASICS OF FUNCTIONS
// ==============================

/**
 * A SIMPLE FUNCTION()
 *
 * function() are reusable pieces of code designed for specific tasks.
 * They consist of:
 * - Function keyword
 * - Name (optional for anonymous functions)
 * - Parameters in parentheses ()
 * - Function body in curly braces {}
 */
function cheer() {
  console.log("Hooray! 🎉");
}

// To execute a function, we must call it with parentheses
// Without the parentheses, we're just referencing the function definition
cheer(); // Outputs: "Hooray! 🎉"

// The same function as an arrow function
const cheerArrow = () => console.log("Hooray! 🎉");
cheerArrow(); // Outputs: "Hooray! 🎉"

// ==============================
// HIGHER-ORDER FUNCTIONS
// ==============================

/**
 * HIGHER-ORDER FUNCTION()
 *
 * A higher-order function() is a function that either:
 * 1. Takes one or more function() as arguments
 * 2. Returns a function() as its result
 *
 * This pattern allows for more modular, reusable, and composable code.
 */

/**
 * Example 1: function() that takes another function() as an argument
 *
 * 'callback' is a parameter - a placeholder for a function() that will be passed later
 * When we use the parameter inside the function(), we call it with parentheses ()
 */
function callTwice(callback) {
  console.log("\nCalling the function twice:");
  callback(); // First execution
  callback(); // Second execution
}

// Using our cheer function as a callback
callTwice(cheer);
// Output:
// Calling the function twice:
// Hooray! 🎉
// Hooray! 🎉

/**
 * CALLBACK FUNCTIONS()
 *
 * A callback is a function() passed into another function() as an argument.
 * The name comes from "called back later" - it will be executed inside
 * the function() it's passed to.
 *
 * In the example above, 'cheer' is our callback because it's passed to 'callTwice'
 * and called inside it.
 */

// ==============================
// FUNCTIONS AS VALUES
// ==============================

/**
 * In JavaScript, function() are "first-class citizens", which means:
 * - They can be assigned to variables
 * - They can be passed as arguments to other function()
 * - They can be returned from other function()
 * - They can be stored in data structures like array[] and object{}
 */

// Assigning a function to a variable
const sayName = function (name) {
  return `\nHello, ${name}!\n`;
};

// The same function as an arrow function (shorter syntax)
const sayNameArrow = name => `\nHello, ${name}!\n`;

// Using the function and storing its result
const greeting = sayNameArrow("Frodo");
console.log(greeting); // Outputs: "Hello, Frodo!"

/**
 * Example 2: Higher-order function() that applies a function() to a value
 *
 * This function() takes two arguments:
 * - A value to be processed
 * - A callback function() that processes the value
 */
function applyFunction(value, callback) {
  return callback(value);
}

// Using our sayNameArrow function as a callback
const result = applyFunction("Gandalf", sayNameArrow);
console.log(result); // Outputs: "Hello, Gandalf!"

// ==============================
// OBJECTS AND METHODS
// ==============================

/**
 * METHODS
 *
 * A .method() is a function() stored as a property in an object{}.
 * It's called using object.methodName().
 * The keyword 'this' inside a .method() refers to the object{} it belongs to.
 */

// An object{} with properties and a .method()
const frodo = {
  name: "Frodo",
  hometown: "The Shire",
  age: 50,
  hasRing: true,
  // This is a .method() - a function() inside an object{}
  greet() {
    console.log(`Hello, I'm ${this.name} from ${this.hometown}`);
  },
};

// Accessing properties using dot notation
console.log(frodo.name); // Outputs: "Frodo"
console.log(frodo.age); // Outputs: 50

// Calling a method
frodo.greet(); // Outputs: "Hello, I'm Frodo from The Shire"

// ==============================
// ARRAYS AND ARRAY METHODS
// ==============================

/**
 * array[] in JavaScript come with many built-in higher-order function()
 * (.method()) that make data manipulation easier.
 */

// A simple array[] of strings
let weapons = ["Sword", "Shield", "Bow", "Axe"];
console.log("\nMy weapons:", weapons);

// Accessing array elements using index (starting from 0)
console.log("My first weapon:", weapons[0]); // Outputs: "Sword"
console.log("My third weapon:", weapons[2]); // Outputs: "Bow"

// Array length property
console.log("Number of weapons:", weapons.length); // Outputs: 4

// Adding to an array[] using .push()
console.log("\n=== 🗡️ YOU FOUND A DAGGER OF SPEED! ===");
weapons.push("Dagger");
console.log(weapons); // Outputs: ["Sword", "Shield", "Bow", "Axe", "Dagger"]

// Removing from an array[] using .pop()
const droppedItem = weapons.pop();
console.log(`\n💔 You dropped your ${droppedItem}.`); // Outputs: "You dropped your Dagger."
console.log("Remaining inventory:", weapons); // Outputs: ["Sword", "Shield", "Bow", "Axe"]

// ==============================
// MORE COMPLEX ARRAY MANIPULATION
// ==============================

// An array[] of objects{}
let inventory = [
  { name: "Sword", power: 10, broken: false },
  { name: "Shield", power: 5, broken: false },
  { name: "Bow", power: 8, broken: true },
  { name: "Axe", power: 12, broken: false },
];

console.log("\nOriginal inventory:", inventory);

/**
 * UPGRADING ITEMS WITH FOR LOOP
 *
 * Traditional approach using a for loop.
 * This directly modifies the original array[] - often not ideal.
 */
// First method - directly modifying original array (not recommended)
/*
  for (let i = 0; i < inventory.length; i++) {
    inventory[i].power += 5;
  }
  */

// Better approach - creating a new array[]
const upgradedInventoryLoop = [];
for (let i = 0; i < inventory.length; i++) {
  // Create a new object{} with all properties from the original
  // but with modified power value
  upgradedInventoryLoop.push({
    name: inventory[i].name,
    power: inventory[i].power + 5,
    broken: inventory[i].broken,
  });

  // Alternative using spread operator (more concise)
  // upgradedInventoryLoop.push({
  //   ...inventory[i],  // Copy all properties
  //   power: inventory[i].power + 5  // Override just the power property
  // });
}

console.log("\nUpgraded inventory (for-loop):", upgradedInventoryLoop);

/**
 * ARRAY METHOD: .map()
 *
 * The .map() method creates a new array[] by applying a function()
 * to each element of the original array[].
 *
 * Syntax: array.map(callback)
 *
 * The callback receives:
 * - currentValue: The current element being processed
 * - index (optional): The index of the current element
 * - array (optional): The array[] .map() was called upon
 *
 * .map() always returns a new array[] of the same length as the original.
 */

// Using .map() to upgrade power by 5
const upgradedInventoryMap = inventory.map(item => {
  return {
    name: item.name,
    power: item.power + 5,
    broken: item.broken,
  };
});

// More concise version using the spread operator
const upgradedInventoryConcise = inventory.map(item => ({
  ...item, // Copy all properties from the original item
  power: item.power + 5, // Override just the power property
}));

console.log("\nUpgraded inventory (.map()):", upgradedInventoryMap);
console.log("\nOriginal inventory (unchanged):", inventory);

// ==============================
// OTHER USEFUL ARRAY METHODS
// ==============================

/**
 * ARRAY METHOD: .filter()
 *
 * The .filter() method creates a new array[] with elements that pass
 * a test implemented by the provided function().
 *
 * Syntax: array.filter(callback)
 *
 * The callback should return true to keep the element or false to discard it.
 * .filter() may return an array[] with fewer elements than the original.
 */

// Using .filter() to get only non-broken items
const usableInventory = inventory.filter(item => item.broken === false);

// Alternative using logical NOT operator
const usableInventoryAlt = inventory.filter(item => !item.broken);

console.log("\nFiltered inventory (.filter()):", usableInventory);

/**
 * COMBINING ARRAY METHODS
 *
 * One of the powerful aspects of these .method() is that they can be chained
 * together to perform complex operations in a readable way.
 */

// Function() that combines .map() and .filter()
const upgradeAndFilterInventory = inputInventory => {
  return (
    inputInventory
      // First, upgrade each item by adding 5 to its power
      .map(item => ({
        ...item,
        power: item.power + 5,
      }))
      // Then, filter out broken items
      .filter(item => !item.broken)
  );
};

console.log(
  "\nUpgraded & filtered inventory:",
  upgradeAndFilterInventory(inventory)
);

// ==============================
// EVEN MORE USEFUL ARRAY METHODS
// ==============================

/**
 * .forEach()
 * Executes a function() on each element, but doesn't return a new array[]
 */
console.log("\nUsing .forEach() to log each item:");
inventory.forEach(item => {
  console.log(
    `${item.name}: Power ${item.power}, ${
      item.broken ? "Broken" : "Not broken"
    }`
  );
});

/**
 * .find()
 * Returns the first element that satisfies the provided testing function()
 */
const powerfulItem = inventory.find(item => item.power > 10);
console.log("\nFirst item with power > 10:", powerfulItem);

/**
 * .findIndex()
 * Returns the index of the first element that satisfies the testing function()
 */
const brokenItemIndex = inventory.findIndex(item => item.broken);
console.log("\nIndex of first broken item:", brokenItemIndex);

/**
 * .some()
 * Tests whether at least one element passes the test function()
 * Returns true or false
 */
const hasBrokenItems = inventory.some(item => item.broken);
console.log("\nDo we have any broken items?", hasBrokenItems);

/**
 * .every()
 * Tests whether all elements pass the test function()
 * Returns true or false
 */
const allPowerful = inventory.every(item => item.power > 5);
console.log("\nAre all items powerful (power > 5)?", allPowerful);

/**
 * .reduce()
 * Applies a function() to reduce the array[] to a single value
 */
const totalPower = inventory.reduce((sum, item) => sum + item.power, 0);
console.log("\nTotal power of all items:", totalPower);

// ==============================
// CONCLUSION
// ==============================

/**
 * Higher-order function() and array[] .method() in JavaScript provide powerful
 * tools for working with data in a more readable, maintainable way.
 *
 * Key takeaways:
 *
 * 1. function() are first-class citizens in JavaScript
 * 2. Higher-order function() take or return other function()
 * 3. .method() are function() inside object{}
 * 4. array[] .method() like .map(), .filter(), and .reduce() make data transformation easier
 * 5. Combining these .method() allows for complex operations with clean code
 *
 * Practice is key! Try creating your own examples and see how these concepts
 * can be applied to solve real programming problems.
 */
