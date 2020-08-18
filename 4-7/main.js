const arg1 = process.argv[2]
const arg2 = process.argv[3]

//名前の配列を作る
const names = arg1.split(",");

//名前を小文字に変換し、"a"を含む文字列に絞り込む
const array = names.filter(word => word.toLowerCase().includes(arg2));
//昇順にソートして、小文字で出力
console.log(array.sort().join(" ").toLowerCase());

