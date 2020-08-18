  
const array = [];

while ( array.length < 10 ){

    const num = Math.floor( Math.random()*10 ); 

    if(!array.includes(num)){
        array.push(num);
    }
}

console.log(array.join(" "));
