package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

type Key struct {
	you, opponent string
}

func calcScore(opponent, you string) int {
	m := make(map[Key]int)
	m[Key{"A", "X"}] = 0
	m[Key{"A", "Y"}] = 1
	m[Key{"A", "Z"}] = -1
	m[Key{"B", "X"}] = -1
	m[Key{"B", "Y"}] = 0
	m[Key{"B", "Z"}] = 1
	m[Key{"C", "X"}] = 1
	m[Key{"C", "Y"}] = -1
	m[Key{"C", "Z"}] = 0

	return m[Key{opponent, you}]
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	Shapes := map[string]int{
		"A": 1, // Rock
		"B": 2, // Paper
		"C": 3, // Scissors
		"X": 1, // Rock
		"Y": 2, // Paper
		"Z": 3, // Scissors
	}

	// Win = 6
	// Draw = 3
	// Lost = 1
	score := 0
	for scanner.Scan() {
		line := strings.TrimRight(scanner.Text(), "\n")
		letters := strings.Split(line, " ")
		opponent := letters[0]
		you := letters[1]

		if calcScore(opponent, you) == 1 {
			score += 6 + Shapes[you]
		} else if calcScore(opponent, you) == 0 {
			score += 3 + Shapes[you]
		} else if calcScore(opponent, you) == -1 {
			score += 0 + Shapes[you]
		}
	}

	if scanner.Err() != nil {
		fmt.Println("Error:", scanner.Err())
	}

	fmt.Println("Score:", score)
}
