var process = require('process');
var dbtosb = require("./dbtosb.js");

process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        var output = dbtosb.convert(chunk);
        process.stdout.write(output);
    }
});