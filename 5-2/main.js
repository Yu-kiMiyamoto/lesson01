
const json = require( "./users.json" );
const users = json.users

for ( let i = 0; i < users.length; i++ ){

    let rank = users[i].rank;
    let years = users[i].years;
    
    if (  rank === 'A' ){

        if (years < 5 ){
            users[i].salary = 3000 * years + 100000; 
        } else {
            users[i].salary = 300 * years + 120000;
        }

    } else if ( rank === 'B'){
        users[i].salary = 4000 + years + 140000;

    } else {
        users[i].salary = 5000 * years + 160000;
    }
}

users.sort(function(a,b){
    return b.salary - a.salary;
});


for ( let i = 0; i < users.length; i++ ){

    let name = users[i].name;
    let salary = users[i].salary;
    
    console.log(`${name}:${salary}`);
}