/*const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60];
const array = {};

for ( i= 0; i < students.length; i++ ){

    //生徒の点数の1の位を切り捨てる
    const number = Math.floor(students[i]/10)*10;
    
    //生徒の点数の台をキーとするオブジェクトを作成
    //result[number]が未定義の時は、値を0とする
    if (result[number] === undefined ){
        result[number] = 0;

    }
    //同じ点数の台があれば、値が加算されていく
    result[number]++;
}*/


const students = [17,38,100,95,23,62,77,45,69,81,83,51,42,36,60];

//点数の台ごとの人数
const count = [0,0,0,0,0,0,0,0,0,0,0]

for ( let i = 0; i < students.length; i++ ){

    const number = Math.floor(students[i]/10);

    count[number]++ ;
}

//countの最大値を算出する
const max = Math.max.apply(null,count);

for (let i = 0; i < max; i++ ){

    //"*"を入れるための空配列を作る（countの最大値文の行を作成）
    const array = [];

    for (let j = 0; j< count.length; j++){

        if ( count[j] >= max - i){
            array.push("*");
        }else{
            array.push(" ");
        }
    }

    console.log(array.join("  "));
}
console.log('----------------------------------')
console.log('0 10 20 30 40 50 60 70 80 90 100')