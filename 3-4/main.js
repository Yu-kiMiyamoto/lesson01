const arg1 = process.argv[2];
const arg2 = process.argv[3];

const number1 = Number(arg1.split("").reverse().join(""));
const number2 = Number(arg2.split("").reverse().join(""));

console.log( number1 + number2);

