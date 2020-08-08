const total = process.argv[2];
const hundredYenCoin = Math.floor(total/100);
const tenYenCoin = Math.floor(total%100/10);
const oneYenCoin = total - ( hundredYenCoin*100 + tenYenCoin*10 );

console.log(`100円玉${hundredYenCoin}枚、10円玉${tenYenCoin}枚、1円玉${oneYenCoin}枚`);