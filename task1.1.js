const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Enter input to reverse');

rl.on('line', (data) => {
  console.log(data.split('').reverse().join(''), '\n');
});
