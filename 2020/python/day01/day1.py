def read_input():
    with open("day1_input.txt", "r") as file:
        lines = file.readlines()
    return lines


if __name__ == "__main__":
    """
    Advent of code 2020 - day 1
    --- Day 1: Calorie Counting ---
    https://adventofcode.com/2022/day/1
    """

    lines = read_input()

    max_calories = 0
    local_total = 0

    for line in lines:
        if line == "\n":
            local_total = 0
        else:
            local_total = local_total + int(line)
            max_calories = max(max_calories, local_total)
    
    print("Max calories: ", max_calories)