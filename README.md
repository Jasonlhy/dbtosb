# Objective
Convert double byte english letters, digit and some control characeter (全形) into single byte ascii letter (半形).

Currently it has this mapping:
```js
var mapping = {
    /* \uFF01 Segment */
    // Skip: ！，
    "‵": "`",
    "＂": "\"",
    "＃": "#",
    "＄": "$",
    "％": "%",
    "＆": "&",
    "＇": "'",
    "（" : "(",
    "）" : ")",
    "＊" : "*",
    "＋" : "+",
    "－": "-",
    "．": ".",
    "／" : "/",
    /* Digit */
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
    /* \uFF1A Segment */
    // Skip：；？
    "＜": "<",    
    "＝": "=",    
    "＞": ">",    
    "＠": "@",    
    /* Upper Case Letter */
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
    "［": "[",
    "＼": "\\",
    "］": "]",
    "＾": "^",
    "＿": "_",
    "｀": "`",
    /* Lower Case Letter */
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
    /* \uFF3B Segment */ 
    "｛": "{",
    "｜": "|",
    "｝": "}",
    "～": "~",
    /* Special Spacing */
    "　": " ",
    /* Ｃangjie Input */
    "—" : "-"
}
```

For example:
"Ｒｅｇｕｌａｒ　Ｅｘｐｒｅｓｓｉｏｎ　０１" is converted into
"Regular Expression 01"

# Install 

`npm install -g dbtosb`

# API

```js
var dbtosb = require("./dbtosb.js");
var result = dbtosb.convert("ＱＷＥＲＴＹＵＩＯＰＡＳＤＦＧＨＪＫＬＺＸＣＶＢＮＭ");
```

# Command Line

dbtosb [InputFilePath] [-o OutputFilePath ] [-f EncodingOfInput] [-t EncodingOfOutput]

- By default, the output go to standard output. 
- If InputFilePath do not exist, It reads from the standard input.
- `-o`: Path of output file
- `-f`: Encoding of input
- `-t`: Encoding of output

## Standard Input to Standard Output 
```
> dbtosb < "../test.txt"

QWERTYUIOPASDFGHJKLZXCVBNM

qwertyuiopasdfghjklzxcvbnm

0123456789
```

## Read from file and write to a file
`dbtosb "dbtosb.js" -o "out.txt"`

## Specify the encoding of input
`dbtosb -f utf8 < "Text.txt"`

## Specify the encoding of both input and output
`dbtosb -f utf8 -t utf8 < "Text.txxt"`