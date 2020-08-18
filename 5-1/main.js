const profiles = {
  profiles: [
    {
      name: "佐藤",
      age: 22
    },
    {
      name: "鈴木",
      age: 34
    },
    {
      name: "高橋",
      age: 42
    },
    {
      name: "田中",
      age: 15
    }
  ]
}


for ( let i = 0; i < profiles['profiles'].length; i++  ){
 const name = profiles.profiles[i].name;
 const age  = profiles.profiles[i].age;
 console.log(`${name}:${age}`);
}
