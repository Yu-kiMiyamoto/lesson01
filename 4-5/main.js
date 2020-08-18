const arg = process.argv;

const array = [];

//1~9999の数字を順番に潰していく
for ( let i = 0; i<=9999; i++){

    //コマンドライン引数の個数分だけ空配列に入れる
    for ( let j = 2; j < arg.length; j++ ){
        //もし、数字がコマンドライン引数にあれば
        if ( i === Number(arg[j]) ){
            //空配列に入れる
            array.push(Number(arg[j]));
        }
    }
}

console.log(array);
