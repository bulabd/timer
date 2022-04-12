const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (isNaN(args[i]) || args[i] < 0) {
  } else {
    setTimeout(() => {
      process.stdout.write('.');
    }, args[i] * 1000); 
  }
}

setTimeout(() => {
  process.stdout.write('\n');
}, args.sort((a, b) => b - a)[0] * 1000 + 100);