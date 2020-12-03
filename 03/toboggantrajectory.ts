import { readFileSync } from 'fs';

console.log('--- Day 3: Toboggan Trajectory ---')

// read file -> split to string[]
const input = (readFileSync('input.txt', 'utf-8') as string).split('\n')

const height:number = input.length - 1, width:number = input[0].length
const trees = (dx:number, dy:number) => {
    let pos:number[] = [0,0]
    let counter:number = 0
    while (pos[1] <= height) {
        if(input[pos[1]].charAt(pos[0]) === '#') counter++
        pos[0] += dx
        pos[0] %= width
        pos[1] += dy
    }
    return counter
}
console.log('--- Part One ---')
console.log(`Total count: ${trees(3, 1)}`)
console.log('--- Part Two ---')
console.log(`Total count: ${trees(1, 1) * trees(3, 1) * trees(5, 1) * trees(7, 1) * trees(1, 2)}`)