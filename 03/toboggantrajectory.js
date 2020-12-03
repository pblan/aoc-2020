"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
console.log('--- Day 3: Toboggan Trajectory ---');
// read file -> split to string[]
var input = fs_1.readFileSync('input.txt', 'utf-8').split('\n');
var tree = '#';
var height = input.length - 1;
var width = input[0].length;
var res = 0;
var treeCount = function (xOff, yOff) {
    var pos = [0, 0];
    var counter = 0;
    while (pos[1] <= height) {
        if (input[pos[1]].charAt(pos[0]) === tree)
            counter++;
        pos[0] = (pos[0] + xOff) % width;
        pos[1] += yOff;
    }
    return counter;
};
console.log('--- Part One ---');
console.log("Total count: " + treeCount(3, 1));
console.log('--- Part Two ---');
res = treeCount(1, 1) * treeCount(3, 1) * treeCount(5, 1) * treeCount(7, 1) * treeCount(1, 2);
console.log("Total count: " + res);
