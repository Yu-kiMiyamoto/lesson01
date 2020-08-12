const errorLogs = [
  "Error 101:Invalid Exception AAA - 2020/01/01/01:00",
  "Error 3:Invalid Exception BBBB - 2020/01/01/02:00",
  "Error 22:Invalid Exception CCCCC - 2020/01/01/03:00"
]

const start = ":"
const end = "-"

for ( let i = 0; i < errorLogs.length; i++){

  //"."の次の文字までの文字数を数える
  const startPoint = errorLogs[i].indexOf(start) + 1;
  //"." と "-" の間の文字数を数える
    const endPoint = errorLogs[i].indexOf(end) - startPoint;
  //"." と "-" の間の文字を表示
  console.log(errorLogs[i].substr(startPoint,endPoint));
}