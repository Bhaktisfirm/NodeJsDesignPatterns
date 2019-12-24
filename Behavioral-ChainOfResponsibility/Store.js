var Storage = require('./Storage');
class Store {
  constructor(name, inventory = []) {
    this.name = name;
    /**
     * to search in all stores not just in one of them we change the code
     */
    //this.inventory = inventory;
    var floor = new Storage('store floor', inventory.floor);
    var backroom = new Storage('store floor', inventory.backroom);
    var localStore = new Storage('store floor', inventory.localStore, 1);
    var warehouse = new Storage('store floor', inventory.warehouse, 5);

    floor.setNext(backroom);
    backroom.setNext(localStore);
    localStore.setNext(warehouse);

    this.storage = floor;
  }

  find(itemName) {
    // var index = this.inventory.map(item => item.name).indexOf(itemName);
    // return this.inventory[index];
    return this.storage.find(itemName);
  }
}

module.exports = Store;
