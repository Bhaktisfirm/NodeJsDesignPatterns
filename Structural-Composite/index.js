var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem('Leather Boots', 79.99);
var sneakers = new CatalogItem('Kicks', 39.99);
var flipFlops = new CatalogItem('California work boots', 19.99);

var group_shoes = new CatalogGroup('shoes and such', [
  boots,
  sneakers,
  flipFlops
]);
var group_food = new CatalogGroup('Food and clothes', [
  new CatalogItem('milk', 5.99),
  new CatalogItem('coffe', 3.99)
]);

var keychain = new CatalogItem('key chain', 0.99);

var catalog = new CatalogGroup('clothes and food', [
  keychain,
  group_shoes,
  group_food
]);

console.log('total: ', `$${catalog.total}`);
catalog.print();
// boots.print();
// sneakers.print();

// group_shoes.print();
