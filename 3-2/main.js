const arg1 = Number(process.argv[2]);
const arg2 = Number(process.argv[3]);

// "arg1"行の配列を作る
for ( let i = 1; i <= arg1; i++){
    //空配列を作成
    array = [];

    //偶数行の場合
    if ( i%2 === 0 ){
        
        // "-"から始まる 
        for ( let j = 1; j <= arg2; j++ ){
            if ( j%2 === 0 ){
                array.push('*');
            } else {
                array.push('-')
            }
        }
    }else/* 奇数行の場合 */ {

         // "-"から始まる 
         for ( let j = 1; j <= arg2; j++ ){
            if ( j%2 === 0 ){
                array.push('-');
            } else {
                array.push('*')
            }
        }
    }
    //文字列に変換して出力
    console.log(array.join(""));
}


