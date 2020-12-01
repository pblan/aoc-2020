"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log('--- Day 1: Report Repair ---');
var input = fs_1.readFileSync('input.txt', 'utf-8').split('\n').map(function (x) { return +x; }).sort(function (a, b) { return a - b; });
console.log('--- Part One ---');
var l = 0, r = input.length - 1;
while (l < r) {
    if (input[l] + input[r] == 2020)
        break;
    input[l] + input[r] > 2020 ? r-- : l++;
}
console.log(input[l] * input[r]);
console.log('--- Part Two ---');
var a, b, c;
for (a = 0; a < input.length - 2; a++) {
    b = a + 1;
    c = input.length - 1;
    while (b < c) {
        if (input[a] + input[b] + input[c] == 2020)
            console.log(input[a] * input[b] * input[c]);
        input[a] + input[b] + input[c] > 2020 ? c-- : b++;
    }
}
