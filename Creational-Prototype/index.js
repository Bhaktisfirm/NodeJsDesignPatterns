var scout_prototype = require('./scout_prototype');

//var alex = new Shopper('Alex Banks');
/** we have same propeties for these two objects so we use prototype design pattern */
// alex.addItemToList('camping knife');
// alex.addItemToList('tent');
// alex.addItemToList('backpack');
// alex.addItemToList('map');
var alex = scout_prototype.clone();
alex.name = 'Alex Banks';
alex.addItemToList('slingshot');

//var eve = new Shopper('Eve Porcello');
// eve.addItemToList('camping knife');
// eve.addItemToList('tent');
// eve.addItemToList('backpack');
// eve.addItemToList('map');
var eve = scout_prototype.clone();
eve.name = 'Eve Porcello';
eve.addItemToList('reading light');

console.log(`${alex.name}: ${alex.shoppingList}`);
console.log(`${eve.name}: ${eve.shoppingList}`);
