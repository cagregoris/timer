const commandInput = process.argv.slice(2).filter(number => number > 0).filter(number => number !== isNaN);
for (let i = 0; i < commandInput.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, commandInput[i] * 1000);
}