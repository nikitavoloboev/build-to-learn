import fileinput
import math

module_masses = [line.rstrip() for line in list(fileinput.input("1_input.txt"))]


def get_total_fuel(module_masses):
    total = 0
    for mass in module_masses:
        total += math.floor(int(mass) / 3) - 2
    return total


def get_total_fuel_with_mass(module_masses):
    total = 0
    for mass in module_masses:
        while mass != 0:
            fuel = math.floor(int(mass) / 3) - 2
            if fuel > 0:
                total += fuel
                mass = fuel
            else:
                break
    return total


print(get_total_fuel(module_masses))
print(get_total_fuel_with_mass(module_masses))
print("---")
