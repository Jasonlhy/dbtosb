#!/usr/bin/env node
var process = require('process');
var fs = require("fs");
var dbtosb = require("../dbtosb.js");
var argv = require('yargs').options({
    'f': {
        alias: 'fromEncoding',
        type: 'string'
    },
    't': {
        alias: 'toEncoding',
        type: 'string'
    },
    'o': {
        alias: 'outputFile',
        type: 'string'
    },
    's':{
        alias: 'style',
        type: 'string'
    },
    'e':{
        alias: 'extendList',
        type: 'string'
    },
    'i': {
        alias: 'ignoreList',
        type: 'string'
    }
}).argv;

(function () {
    /* Command Line Arguments */
    var IN_ENCODING = argv['f'] || 'utf8';
    var OUT_ENCODING = argv['t'];
    var OUT_FILE_PATH = argv['o'];
    var IN_FILE_PATH = argv._[0];
    var STYLE_NAME = argv['s'];
    var EXTEND_LIST = argv['e'];
    var IGNORE_LIST = argv['i'];

    if (STYLE_NAME && !dbtosb.isValidStyle(STYLE_NAME)){
        process.stderr.write("The Style Name is not valid\n");
        process.stderr.write("All style available: " + dbtosb.getAvailableStyles() + "\n");
    }

    /**
     * Read text from Standard Input
     * 
     * @param {function} outputCallback accept data as string
     */
    function readStdin(outputCallback) {
        process.stdin.setEncoding(IN_ENCODING);
        process.stdin.on('readable', () => {
            const chunk = process.stdin.read();
            outputCallback(chunk);
        });
    }

    /**
     * Read text from File
     * 
     * @param {string} filePath 
     * @param {function} outputCallback accept data as string
     */
    function readFile(filePath, outputCallback) {
        fs.readFile(filePath, { encoding: IN_ENCODING }, function (err, data) {
            if (err) throw err;
            outputCallback(data);
        });
    }

    /**
     * Convert the text and output to file
     * 
     * @param {string} filePath 
     * @param {string} data Double Byte string data
     */
    function convertToFile(filePath, data) {
        var options = {};
        if (OUT_ENCODING){
            options['encoding'] = OUT_ENCODING;
        }

        var output = dbtosb.convert(data, STYLE_NAME, EXTEND_LIST, IGNORE_LIST);
        fs.writeFile(filePath, output, options, function (err) {
            if (err) throw err;
        });
    }

    /**
     * Convert the text and output to standard output
     * 
     * @param {string} data Double Byte string data
     */
    function convertToStdOut(data) {
        if (OUT_ENCODING) {
            process.stdout.setEncoding(OUT_ENCODING);
        }

        if (data !== null) {
            var output = dbtosb.convert(data, STYLE_NAME, EXTEND_LIST, IGNORE_LIST);
            process.stdout.write(output);
        }
    }

    /**
     * Output callback after input
     * 
     * @param {string} data 
     */
    function output(data) {
        if (OUT_FILE_PATH) {
            convertToFile(OUT_FILE_PATH, data);
        } else {
            convertToStdOut(data);
        }
    }

    /** Input */
    if (IN_FILE_PATH) {
        readFile(IN_FILE_PATH, output)
    } else {
        readStdin(output);
    }
})();