/**
 * calling person class with too many argument would be confusing!
 * so we will use a builder class for it to make code more readable...
 */
//var Person = require('./Person')
var PersonBuilder = require('./PersonBuilder');

// Employees
// var sue = new Person('Sue', true, true, 60);
// var bill = new Person('Bill', true, false, 20);
// var phil = new Person('Phil', true, false);
var sue = new PersonBuilder('Sue')
  .makeEmployee()
  .makeManager(60)
  .build();
var bill = new PersonBuilder('Bill')
  .makeEmployee()
  .makePartTime(20)
  .build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// Shoppers
// var charles = new Person('Charles', false, false, 0, 500, [
//   'jeans',
//   'sunglasses'
// ]);
//var tabbitha = new Person('Tabbitha', false, false, 0, 1000);

var charles = new PersonBuilder('Charles')
  .withMoney(500)
  .withList(['jeans', 'sunglasses'])
  .build();
var tabbitha = new PersonBuilder('Tabbitha').withMoney(1000).build();

console.log(sue.toString());
console.log(bill.toString());
console.log(phil.toString());
console.log(charles.toString());
console.log(tabbitha.toString());
