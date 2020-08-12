const arg = process.argv

//コマンドライン引数から、配列を作る
const array = [];

for ( let i = 2; i < arg.length; i++ ){
    array.push(Number(arg[i]))
}


//小さい順に並べる
array.sort(function(a,b){
    return a - b;
});

//３番目の値を取得
console.log(array[2]);