import fileinput
import math

lines_with_spaces = list(fileinput.input("1_input.txt"))
lines = [line.rstrip() for line in lines_with_spaces]

sum = 0
for line in lines:
    sum += math.floor(int(line) / 3) - 2

print(sum)
print("---")
