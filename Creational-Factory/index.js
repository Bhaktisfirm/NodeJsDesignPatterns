/** here we have 2 objects from 2 different classes it is ok now but what if an expantion occurs and we
 * need 10 more various objs! here we use factory method.
 */
// var Shopper = require('./Shopper');
// var Employee = require('./Employee');
var userFactory = require('./userFactory');

// var alex = new Shopper('Alex Banks', 100);
// var eve = new Employee('Eve Porcello', 100, 'This and That');
var alex = userFactory('Alex Banks', 100);
var eve = userFactory('Eve Porcello', 100, 'employee', 'This and That');

eve.payDay(100);

console.log(alex.toString());
console.log(eve.toString());
