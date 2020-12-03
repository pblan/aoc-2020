"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log('--- Day 2: Password Philosophy ---');
// read file -> split to string[]
var input = fs_1.readFileSync('input.txt', 'utf-8').split('\n');
console.log('--- Part One ---');
var regex = new RegExp(/[\-\s\:]/); // [] -> one of those characters
var counter = 0;
input.forEach(function (line) {
    var check = line.split(regex);
    var min = +check[0], max = +check[1];
    var target = check[2], password = check[4];
    var found = password.split(target).length - 1;
    if (min <= found && found <= max) {
        counter++;
        //console.log(`${counter}. ${line} (${found})`)
    }
});
console.log("Total count: " + counter);
console.log('--- Part Two ---');
counter = 0;
input.forEach(function (line) {
    var check = line.split(regex);
    var i = +check[0] - 1;
    var j = +check[1] - 1;
    var target = check[2], password = check[4];
    var hitI = password.charAt(i) == target;
    var hitJ = password.charAt(j) == target;
    if (hitI ? !hitJ : hitJ) {
        counter++;
        console.log(counter + ". " + line);
    }
});
console.log("Total count: " + counter);
