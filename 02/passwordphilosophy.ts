import { readFileSync } from 'fs';

console.log('--- Day 2: Password Philosophy ---')

// read file -> split to string[]
const input = (readFileSync('input.txt', 'utf-8') as string).split('\n')

console.log('--- Part One ---')
const regex:RegExp = new RegExp(/[\-\s\:]/) // [] -> one of those characters
let ans:number = 0, min, max, count
let check:string[]
let target:string, password:string

input.forEach(line => {
    check = line.split(regex)
    min = +check[0]; max = +check[1]
    target = check[2]; password = check[4]
    count = password.split(target).length - 1
    if (min <= count && count <= max) ans++
})
console.log(`Total count: ${ans}`)

console.log('--- Part Two ---')
ans = 0
input.forEach(line => {
    check = line.split(regex)

    min = +check[0] - 1; max = +check[1] - 1
    target = check[2], password = check[4]

    let hitI = password.charAt(min) == target
    let hitJ = password.charAt(j) == target

    if (hitI ? !hitJ : hitJ) {
        ans++
        console.log(`${ans}. ${line}`)
    }
})
console.log(`Total count: ${ans}`)