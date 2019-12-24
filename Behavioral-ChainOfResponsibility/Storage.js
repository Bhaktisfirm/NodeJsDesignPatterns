class Storage {
  constructor(name, inventory = [], deliveryTime = 0) {
    this.name = name;
    this.inventory = inventory;
    this.deliveryTime = deliveryTime;
    this.next = null;
  }
  lookInLocalInventory(itemName) {
    console.log('ItemName:', itemName);

    var index = this.inventory.map(item => item.name).indexOf(itemName);
    console.log('inventory:', this.inventory);
    return this.inventory[index];
  }
  setNext(storage) {
    this.next = storage;
  }
  find(itemName) {
    var found = this.lookInLocalInventory(itemName);
    if (found) {
      return {
        name: found.name,
        qty: found.qty,
        location: found.name,
        deliveryTime:
          found.deliveryTime === 0 ? 'Now' : `${this.deliveryTime} day(s)`
      };
    } else if (this.next) {
      return this.next.find(itemName);
    } else {
      return `we do not carry ${itemName}`;
    }
  }
}
module.exports = Storage;
