/**
 * here we want to restrinc reading files, reading txt files are forbidden
 * so we are going to use proxy for fs
 */
//var fs = require('fs');
var FS_Proxy = require('./FS_Proxy');
var fs = new FS_Proxy(require('fs'));

var path = require('path');

var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {
  if (error) {
    console.log('\x07');
    console.error(error);
    //process.exit(0);
  }

  console.log('reading file...');
  console.log(contents);
};

fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
