from collections import defaultdict
import re

with open('input.txt', 'r') as f:
    lines = f.read().split('\n')

print("--- Day 7: Handy Haversacks ---")

# generating graph which contains all given information
rules = {}
for line in lines:
    outer, inner = line.strip().split('bags contain')
    outer = outer.strip()
    rules[outer] = re.findall(r'([0-9]+) ([a-z ]+) bag[s]?', inner.strip())
    
# tracking parent for each color
inverted_rules = defaultdict(list)
for outer, inner in rules.items():
    for count, bag in inner:
        inverted_rules[bag].append(outer)

def count_parents(target):
    seen = set()
    stack = [target]
    while stack:
        bag = stack.pop()
        for parent in inverted_rules[bag]:
            if parent not in seen:
                seen.add(parent)
                stack.append(parent)
    return len(seen)

def count_children(current):
    return sum(int(count) + int(count) * count_children(bag) for count, bag in rules[current])

print("--- Part One ---")
print("Total count: ", count_parents('shiny gold'))
print("--- Part Two ---")
print("Total count: ", count_children('shiny gold'))
