class Logger {
  constructor() {
    this.logs = [];
  }

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

/**
 * this class checks if already there is one instance from logger class and use that, if we did not have this class we would see only 2 logs
 *  for total, but we have 4 logs! it would only count the logs that created in index file ...
 */
// class Singleton {
//   constructor() {
//     if (!Singleton.instance) {
//       Singleton.instance = new Logger();
//     }
//   }
//   getInstance() {
//     return Singleton.instance;
//   }
// }

//module.exports = Logger;
//module.exports = Singleton;

/**
 * this is the typical way to implement singleton in nodejs
 * exporting new instance would cache the new object and node js would handle exporting the same obj to every other objs that want to consume it.
 */
module.exports = new Logger();
