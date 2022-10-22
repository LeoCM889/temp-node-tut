// Fs Module: It allows to interact with the file system and the module
// Synchronously way = blocking

const { readFileSync, writeFileSync } = require('fs');
console.log('start');

// readFileSync reads the content of a file and returns the content 
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(`${first} and ${second}`);

// readFileSync creates and write the content of a file
writeFileSync(
  './content/result-sync.txt', 
  `Here is the result: ${first} ${second}`, 
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')

// const fs = require('fs');
// fs.readFileSync