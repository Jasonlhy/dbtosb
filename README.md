# Objective
Convert double byte english letters and digit into single byte

For example:
"Ｒｅｇｕｌａｒ　Ｅｘｐｒｅｓｓｉｏｎ　０１" is converted into
"Regular Expression 01"

# API

# Command Line
It reads from the standard input
`dbtosb < "Text.Line"`

## Specify the encoding of input text file
`dbtosb utf8 < "Text.Line"`

## Specify the encoding of output text
`dbtosb utf8 utf8 < "Text.Line"`