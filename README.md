# Objective
Convert double byte english letters and digit into single byte

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