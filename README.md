# Objective
Convert double byte english letters, digit and some control characeter into single byte ascii letter.

Currently it has this mapping:
```js
var mapping = {
    "０": "0",
    "１": "1",
    "２": "2",
    "３": "3",
    "４": "4",
    "５": "5",
    "６": "6",
    "７": "7",
    "８": "8",
    "９": "9",
    "Ａ": "A",
    "Ｂ": "B",
    "Ｃ": "C",
    "Ｄ": "D",
    "Ｅ": "E",
    "Ｆ": "F",
    "Ｇ": "G",
    "Ｈ": "H",
    "Ｉ": "I",
    "Ｊ": "J",
    "Ｋ": "K",
    "Ｌ": "L",
    "Ｍ": "M",
    "Ｎ": "N",
    "Ｏ": "O",
    "Ｐ": "P",
    "Ｑ": "Q",
    "Ｒ": "R",
    "Ｓ": "S",
    "Ｔ": "T",
    "Ｕ": "U",
    "Ｖ": "V",
    "Ｗ": "W",
    "Ｘ": "X",
    "Ｙ": "Y",
    "Ｚ": "Z",
    "ａ": "a",
    "ｂ": "b",
    "ｃ": "c",
    "ｄ": "d",
    "ｅ": "e",
    "ｆ": "f",
    "ｇ": "g",
    "ｈ": "h",
    "ｉ": "i",
    "ｊ": "j",
    "ｋ": "k",
    "ｌ": "l",
    "ｍ": "m",
    "ｎ": "n",
    "ｏ": "o",
    "ｐ": "p",
    "ｑ": "q",
    "ｒ": "r",
    "ｓ": "s",
    "ｔ": "t",
    "ｕ": "u",
    "ｖ": "v",
    "ｗ": "w",
    "ｘ": "x",
    "ｙ": "y",
    "ｚ": "z",
    "　": " ",
    "‵": "`",
    "＂": "\"",
    "＇": "'",
    "｛": "{",
    "｝": "}",
    "［": "[",
    "］": "]",
    "＠": "@",
    "（" : "(",
    "）" : ")",
    "＋" : "+",
    "—" : "-",
    "＊" : "*",
    "／" : "/"
}
```

For example:
"Ｒｅｇｕｌａｒ　Ｅｘｐｒｅｓｓｉｏｎ　０１" is converted into
"Regular Expression 01"

# API

```js
var dbtosb = require("./dbtosb.js");
var result = dbtosb.convert("ＱＷＥＲＴＹＵＩＯＰＡＳＤＦＧＨＪＫＬＺＸＣＶＢＮＭ");
```

# Command Line
It reads from the standard input and output to standard output.

`dbtosb < "Text.txt"`

## Specify the encoding of input text file
`dbtosb utf8 < "Text.txt"`

## Specify the encoding of output text
`dbtosb utf8 utf8 < "Text.txxt"`