package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func commonLetter(s1, s2 string) rune {
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

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	sum := 0
	for scanner.Scan() {
		line := strings.TrimRight(scanner.Text(), "\n")
		// Get two equal sub string from line
		part1, part2 := line[:len(line)/2], line[len(line)/2:]

		// Find common letter
		common := commonLetter(part1, part2)

		// Increase sum by the priroty of common letter
		sum += alphabetToNumber(common)
	}

	if scanner.Err() != nil {
		fmt.Println("Error:", scanner.Err())
	}

	fmt.Println("Sum:", sum)
}
