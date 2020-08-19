const arg = process.argv[2];

//時間と分に分割する
const array = arg.split(":");

const hour = Number(array[0]);
const min = Number(array[1]);

const minPlus = min + 45;

/*//分が60未満の時 => 時間はそのまま
if ( minPlus < 60 ){
    //時間が24になる時 => 時間は0にする
    if ( 24 <= hour  ){
        console.log( `${hour % 24} \n${minPlus}` )
    } else {
        console.log( `${hour} \n${minPlus}` )
    }
    
//分が60以上の時 => 時間に1を足す
} else {
    const hourPlus = hour + 1;
    //時間が24になる時 => 時間は0にする
    if ( 24 <= hourPlus  ){
        console.log( `${(hourPlus % 24) + (minPlus / 60)} \n${minPlus % 60}` )
    } else {
        console.log( `${hourPlus} \n${minPlus % 60}` )
    }
}*/

resultHour = Math.floor( hour /24 ) + Math.floor( minPlus / 60 ) ;
resultMin = minPlus % 60 ;

console.log( `${resultHour}\n${resultMin}` );