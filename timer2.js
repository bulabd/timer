const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('.   \n');
  } else if (key >= 1 && key <= 9) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('.   \n');
    }, key * 1000); 
  }
});

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const timer = () => {
//   rl.question('', (answer) => {
//     if (answer === 'b') {
//       process.stdout.write('.   \n');
//       timer();
//     } else if (answer >= 1 && answer <= 9) {
//       console.log(`Setting timer for ${answer} seconds...`);
//       setTimeout(() => {
//         process.stdout.write('.   \n');
//       }, answer * 1000); 
//       timer();
//     }
//   });
// };

// const exit = () => {
//   process.openStdin().on("keypress", (chunk, key) => {
//     if (key.sequence === '\u0003' && key.name === 'c' && key.ctrl) {
//       console.log('Thanks for using me, ciao!');
//     }
//   });
// };

// timer();
// exit();