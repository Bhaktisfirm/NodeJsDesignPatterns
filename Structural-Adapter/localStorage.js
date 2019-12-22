var { writeFile, existsSync, readFileSync, unlink } = require('fs');
class localStorage {
  // here we have to implement the same methods that we use in our index file
  // instead of saving data in local storage we wanna store it in json doc
  constructor() {
    //when we create obj from this class if data exists we will load it
    if (existsSync('localStorage.json')) {
      console.log('Reading File ....');
      var txt = readFileSync('localStorage.json');
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }
  get length() {
    return Object.keys(this.items).length;
  }
  getItem(key) {
    return this.items[key];
  }
  setItem(key, value) {
    this.items[key] = value;
    writeFile('localStorage.json', JSON.stringify(this.items), error => {
      if (error) {
        console.error(error);
      }
    });
  }
  clear() {
    this.items = {};
    unlink('localStorage.json', () => {
      console.log('localStorage removed !');
    });
  }
}
module.exports = new localStorage();
