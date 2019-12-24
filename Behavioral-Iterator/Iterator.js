class Iterator {
  constructor(items = []) {
    this.index = 0;
    this.items = items;
  }
  first() {
    //java script let us to this to get first item
    var [firts] = this.items;
    return firts;
  }
  last() {
    //[...this.items] creates a copy of array
    var [last] = [...this.items].reverse();
    return last;
  }
  hasNext() {
    return this.index < this.items.length - 1;
  }
  current() {
    return this.items[this.index];
  }
  next() {
    if (this.hasNext()) {
      this.index += 1;
    }
    return this.current();
  }
  prev() {
    if (this.index !== 0) {
      this.index -= 1;
    }
    return this.current();
  }
}
module.exports = Iterator;
