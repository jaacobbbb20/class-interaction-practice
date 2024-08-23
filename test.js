const Make = require('./Make');
const Model = require('./Model');
const Engine = require('./Engine');
const Year = require('./Year');
const Car = require('./Car');

// Create instances of each class
const make = new Make('Chevrolet');
const model = new Model('Impala', 'Coupe');
const engine = new Engine('V8', 300);
const year = new Year(1964);

// Create a car instance
const car = new Car(make, model, engine, year);

// Test the describe method
console.log(car.describe());
