from itertools import combinations

with open('input.txt', 'r') as f:
    numbers = list(int(line) for line in f.read().split('\n'))

print("--- Day 9: Encoding Error ---")

buffer = 25


def is_valid(i):
    n = numbers[i]
    return any(a + b == n for a, b in combinations(numbers[i - buffer: i], 2))


ans = next(numbers[i] for i in range(buffer, len(numbers)) if not is_valid(i))
print('--- Part One ---')
print(ans)

for i in range(len(numbers)):
    for j in range(i + 2, len(numbers)):
        rng = numbers[i: j]
        s = sum(rng)
        if s >= ans:
            break
    if s == ans:
        break

print('--- Part Two ---')
print(min(rng) + max(rng))
