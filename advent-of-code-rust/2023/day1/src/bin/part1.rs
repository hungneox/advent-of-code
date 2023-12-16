use std::fs::read_to_string;

fn main() {
    println!("Advent of code 2023 - day 1 part 1");
    let inputs: Vec<String> = read_lines("./inputs/sample.txt");

    let result = inputs
        .iter()
        .map(|line| {
            let first_digit: char = line.chars().find(|c| c.is_ascii_digit()).unwrap_or('0');
            let second_digit: char = line
                .chars()
                .rev()
                .find(|c| c.is_ascii_digit())
                .unwrap_or('0');

            return first_digit.to_digit(10).unwrap() * 10 + second_digit.to_digit(10).unwrap();
        })
        .sum::<u32>();

    println!("Result {}", result)
}

fn read_lines(filename: &str) -> Vec<String> {
    read_to_string(filename)
        .unwrap() // panic on possible file-reading errors
        .lines() // split the string into an iterator of string slices
        .map(String::from) // make each slice into a string
        .collect() // gather them together into a vector
}
