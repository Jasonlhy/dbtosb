#!/usr/bin/env node
var process = require('process');
var dbtosb = require("../dbtosb.js");

var incode = process.argv[2] || 'utf8';
var outcode = process.argv[3];

process.stdin.setEncoding(incode);
if (outcode){
    process.stdout.setEncoding(outcode);
}

process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        var output = dbtosb.convert(chunk);
        process.stdout.write(output);
    }
});