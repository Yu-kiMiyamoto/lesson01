  
const array = [];

for ( let i = 0; i < 10; i++ ){

    const num = Math.floor( Math.random()*10 ); 
    array.push(num);
}

console.log(array.join(" "));
