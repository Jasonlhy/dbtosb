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

function dbtosb(inputStr) {
    if (!inputStr) return inputStr;

    var outputStr = "";
    for (var i = 0; i < inputStr.length; i++) {
        var c = inputStr.charAt(i);
        var relatedSingleByte = mapping[c];
        outputStr += (relatedSingleByte) ? relatedSingleByte : c;
    }

    return outputStr;
}

module.exports.convert = dbtosb;