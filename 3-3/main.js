const arg = Number(process.argv[2]);

// "arg1"行の配列を作る
for ( let i = 1; i <= arg; i++){
    //空配列を作る
    array = [];

    //配列に " " を入れる
    for ( let j = 1; j <= arg-i; j++ ){
        array.unshift(" ");
    }
    //配列に "*" を入れる 
    for ( let k = 1; k <= i*2-1; k++ ){
        array.push("*");
    }

    //配列を文字列に変換して出力
    console.log(array.join(""));
}