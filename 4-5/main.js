const arg = process.argv.slice(2);

const array = [];

//1~9999の数字を順番に潰していく
for ( let i = 0; i<=9999; i++){

    //コマンドライン引数の個数分だけ空配列に入れる
    for ( let j = 0; j < arg.length; j++ ){
        //もし、数字がコマンドライン引数にあれば
        if ( String(i) === arg[j] ){
            //空配列に入れる
            array.push(arg[j]);
        }
    }
}

console.log(array);
