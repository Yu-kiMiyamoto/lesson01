const json = require( "./playdata.json" );
const playdata = json.data

const json2 = require( "./songs.json" );
const songs = json2.songs


playdata.sort(function(a,b){
    return b.count - a.count;
});


let  title;
let count;

for ( const [index, data] of playdata.entries() ){
    for ( const [index, song] of songs.entries() ){
        if ( Number(data.id) === song.id ){
            title = song.title
        }
    }
    count = data.count;
    console.log(`${index}位:${title}\t${count}`);
}