import { readFileSync } from 'fs';

console.log('--- Day 1: Report Repair ---')

// read file -> split to string[] -> cast to int -> sort ascending 
const input = (readFileSync('input.txt', 'utf-8') as string).split('\n').map(x => +x).sort((a,b) => a - b)

console.log('--- Part One ---')
let l = 0, r = input.length - 1

while (l < r) {
    if (input[l] + input[r] == 2020) break
    input[l] + input[r] > 2020 ? r-- : l++
}
console.log(input[l] * input[r])

console.log('--- Part Two ---')
let a, b, c

for (a = 0; a < input.length -2; a++) {
    b = a + 1
    c = input.length-1
    while(b < c) {
        if (input[a] + input[b] + input[c] == 2020) console.log(input[a] * input[b] * input[c])
        input[a] + input[b] + input[c] > 2020 ? c-- : b++
    }
}