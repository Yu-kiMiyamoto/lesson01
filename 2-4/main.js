const month = process.argv[2];

 
if(month == 1){
    console.log("冬");
}else if( month <= 4 ){
    console.log("春");
}else if( month <= 7 ){
    console.log("夏");
}else if( month <= 10) {
    console.log("秋");
}else if( month <= 12 ){
    console.log("冬");
}