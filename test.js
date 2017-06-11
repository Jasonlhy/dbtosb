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

var style = dbtosb.convert("ｒｅｇｕｌａｒ　ｅｘｐｒｅｓｓｉｏｎ　０１", "digit");
var expected = "ｒｅｇｕｌａｒ　ｅｘｐｒｅｓｓｉｏｎ　01"
console.log(expected == style);

var extend = dbtosb.convert("ｒｅｇｕｌａｒ　ｅｘｐｒｅｓｓｉｏｎ　０１", "digit", "n");
var expected = "ｒｅｇｕｌａｒ　ｅｘｐｒｅｓｓｉｏn　01"
console.log(expected == extend);

var ignore = dbtosb.convert("ｒｅｇｕｌａｒ　ｅｘｐｒｅｓｓｉｏｎ　０１", "digit", "n", "1");
var expected = "ｒｅｇｕｌａｒ　ｅｘｐｒｅｓｓｉｏn　0１"
console.log(expected == ignore);