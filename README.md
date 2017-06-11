# Objective
Convert double byte english letters, digit and some control characeter (全形) into single byte ascii letter (半形). For example:
"Ｒｅｇｕｌａｒ　Ｅｘｐｒｅｓｓｉｏｎ　０１" is converted into
"Regular Expression 01"

The mapping can be viewed at [github](https://github.com/Jasonlhy/dbtosb/blob/master/dbtosb.js), the default style is programmer. You can choose the style you like, and you can also provide extend list of ignore list if the default style doesn't quite fit your need.

# Install 

`npm install -g dbtosb`

# API

## Default Style(programmer), No Extend and No Ignore List
```js
var dbtosb = require("./dbtosb.js");
var result = dbtosb.convert("ＱＷＥＲＴＹＵＩＯＰＡＳＤＦＧＨＪＫＬＺＸＣＶＢＮＭ");
```

## Only Convert Digit, Extend to Convert n and Ignore to Convert 1
```js
var ignore = dbtosb.convert("ｒｅｇｕｌａｒ　ｅｘｐｒｅｓｓｉｏｎ　０１", "digit", "n", "1");
var expected = "ｒｅｇｕｌａｒ　ｅｘｐｒｅｓｓｉｏn　0１"
console.log(expected == ignore);
```

# Command Line

dbtosb [InputFilePath] [-o OutputFilePath ] [-f EncodingOfInput] [-t EncodingOfOutput] [-s StyleName] [-e ExtendList] [-i IgnoreList]

- By default, the output go to standard output. 
- If InputFilePath do not exist, It reads from the standard input.
- `-o`: Path of output file
- `-f`: Encoding of input
- `-t`: Encoding of output
- `-s`: Style Name of the mapping: "programmer","all","digit","letter","digitLetter","space", default is "programmer"
- `-e`: Extend List of conversion
- `-i`: Ignore List of conversion

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

## Specify Style
`dbtosb -s "digit" < "Text.txxt"`

## Specify Digit Style, Extend List and Convert List
This example only Converts Digit, Extend to Convert n and Ignore to Convert 1.

`dbtosb -s "digit" -e "n" -i "1" < "Text.txxt"`