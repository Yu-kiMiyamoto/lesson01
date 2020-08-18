const str = "こはるはるここはるここはるはるここはるこはるはるはる"

//文字列strを"はるこ"、"こはる"で区切って配列を作る
const haruko = str.split("はるこ");
const koharu = str.split("こはる");
//"はるこ"、"こはる"で区切った配列の個数から１を引いた数が"はるこ"、"こはる"の個数
const harukoCount = haruko.length - 1;
const koharuCount = koharu.length - 1;

console.log(`はるこ:${harukoCount}`);
console.log(`こはる:${koharuCount}`);