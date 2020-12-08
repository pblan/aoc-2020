with open('input.txt', 'r') as f:
    instructions = list((line.split(' ') for line in f.read().split('\n')))
print("--- Day 8: Handheld Halting ---")


def exec(instructions):
    seen = set()
    cur = 0
    acc = 0
    while 0 <= cur < len(instructions) and cur not in seen:
        seen.add(cur)
        ins, val = instructions[cur]
        if (ins == 'jmp'):
            cur += int(val)
            continue
        elif (ins == 'nop'):
            {}
        elif (ins == 'acc'):
            acc += int(val)
        cur += 1
    return acc, cur != len(instructions)


acc, loop = exec(instructions)

print("--- Part One ---")
print("accumulator:", acc, "loop:", loop)

for i, (ins, val) in enumerate(instructions):
    if ins == 'acc':
        continue
    fixed_instructions = instructions.copy()
    new_ins = {'jmp': 'nop', 'nop': 'jmp'}[ins]
    fixed_instructions[i] = [new_ins, val]
    # print(fixed_instructions)
    acc, loop = exec(fixed_instructions)
    if not loop:
        break

print("--- Part Two ---")
print("accumulator:", acc, "loop:", loop)
