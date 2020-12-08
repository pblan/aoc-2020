with open('input.txt', 'r') as f:
    groups = [answers.strip() for answers in f.read().split('\n\n')]

print("--- Day 6: Custom Customs ---")
yes = 0
for group in groups:
    group_yes = set()
    for member in group.split('\n'):
        for char in member:
            group_yes.add(char)
    yes += len(group_yes)

print("--- Part One ---")
print("Total count: ", yes)

overall_group_yes = 0
for group in groups:
    group_yes = set()
    set_initialised = False
    for member in group.split('\n'):
        member_yes_set = set([char for char in member])
        if not set_initialised:
            group_yes = member_yes_set
            set_initialised = True
        else:
            group_yes = member_yes_set.intersection(group_yes)

    overall_group_yes += len(group_yes)

print("--- Part One ---")
print("Total count: ", overall_group_yes)
