use std::fs::read_to_string;

fn main() {
    println!("Advent of code 2023 - day 1 part 1");
    let inputs = read_lines("./inputs/input.txt");

    let mut two_digits_numbers = Vec::new();

    for input in inputs {
        // println!("{}", input);
        let numbers = find_numbers(&input);
        two_digits_numbers.push(numbers)
    }

    let total: u32 = two_digits_numbers.iter().sum();
    // println!("Vector<u32>{:?}", two_digits_numbers);
    println!("Result {}", total)
}

fn find_numbers(input: &str) -> u32 {
    let mut numbers = Vec::new();

    for char in input.chars() {
        if char.is_ascii_digit() {
            numbers.push(char);
        }
    }

    let nlen = numbers.len();

    let mut result: String = "0".to_string();

    if numbers.len() >= 2 {
        result = format!("{}{}", numbers[0], numbers[nlen - 1]);
    }

    if numbers.len() == 1 {
        result = format!("{}{}", numbers[0], numbers[0]);
    }

    return result.parse::<u32>().unwrap();
}

fn read_lines(filename: &str) -> Vec<String> {
    read_to_string(filename)
        .unwrap() // panic on possible file-reading errors
        .lines() // split the string into an iterator of string slices
        .map(String::from) // make each slice into a string
        .collect() // gather them together into a vector
}
