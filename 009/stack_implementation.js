#!/usr/bin/env node

var fs = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var results = [];
        var nums = line.split(' ');
        for (var index = nums.length - 1; index >= 0; index--) {
            results.push(nums.pop());
            nums.pop();
        }
        console.log(results.join(' '));
    }
});
