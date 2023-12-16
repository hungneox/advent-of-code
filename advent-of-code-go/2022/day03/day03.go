package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func commonLetterOfTwo(s1, s2 string) rune {
	var common rune
out:
	for i := 0; i < len(s1); i++ {
		for j := 0; j < len(s2); j++ {
			if s1[i] == s2[j] {
				common = rune(s1[i])
				break out
			}
		}
	}
	return common
}

func commonLetterOfThree(s1, s2, s3 string) rune {
	var common rune
out:
	for i := 0; i < len(s1); i++ {
		for j := 0; j < len(s2); j++ {
			for k := 0; k < len(s3); k++ {
				if s1[i] == s2[j] && s2[j] == s3[k] {
					common = rune(s1[i])
					break out
				}
			}

		}
	}
	return common
}

/**
* Lowercase item types a through z have priorities 1 through 26.
* Uppercase item types A through Z have priorities 27 through 52.
 */
func alphabetToNumber(s rune) int {
	if int(s) < 96 {
		return int(s) - 64 + 26
	}
	return int(s) - 96
}

func partOne() {
	scanner := bufio.NewScanner(os.Stdin)

	sum := 0
	for scanner.Scan() {
		line := strings.TrimRight(scanner.Text(), "\n")
		// Get two equal sub string from line
		part1, part2 := line[:len(line)/2], line[len(line)/2:]

		// Find common letter
		common := commonLetterOfTwo(part1, part2)

		// Increase sum by the priroty of common letter
		sum += alphabetToNumber(common)
	}

	if scanner.Err() != nil {
		fmt.Println("Error:", scanner.Err())
	}

	fmt.Println("Sum:", sum)
}

func partTwo() {
	scanner := bufio.NewScanner(os.Stdin)

	sum := 0
	lineCount := 0
	lines := make([]string, 3)
	for scanner.Scan() {

		line := strings.TrimRight(scanner.Text(), "\n")
		lines[lineCount] = line
		lineCount++

		if lineCount == 3 {
			// Find common letter
			common := commonLetterOfThree(lines[0], lines[1], lines[2])
			// Increase sum by the priroty of common letter
			sum += alphabetToNumber(common)

			lineCount = 0
		}
	}

	if scanner.Err() != nil {
		fmt.Println("Error:", scanner.Err())
	}

	fmt.Println("Sum:", sum)
}

func main() {
	// partOne()
	partTwo()
}
