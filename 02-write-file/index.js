const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = process;
const pathToFile = path.join(__dirname, 'text.txt');

console.log('Hello! Enter your text');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    exit();
  }
  fs.appendFile(pathToFile, data, (err) => {
    if (err) throw err;
    console.log('Text added');
  });
});

process.on('SIGINT', () => {
  exit();
});
process.on('exit', () => console.log('Good luck!'));
