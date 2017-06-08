var dbtosb = require("./dbtosb.js");

var upperCase = dbtosb.convert("ＱＷＥＲＴＹＵＩＯＰＡＳＤＦＧＨＪＫＬＺＸＣＶＢＮＭ");
var expected = "QWERTYUIOPASDFGHJKLZXCVBNM"
console.log(expected == upperCase);

var lowerCase = dbtosb.convert("ｑｗｅｒｔｙｕｉｏｐａｓｄｆｇｈｊｋｌｚｘｃｖｂｎｍ");
var expected = "qwertyuiopasdfghjklzxcvbnm"
console.log(expected == lowerCase);

var number = dbtosb.convert("０１２３４５６７８９");
var expected = "0123456789"
console.log(expected == number);