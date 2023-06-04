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
	scores := map[Key]int{
		{"A", "X"}: 3,
		{"A", "Y"}: 6,
		{"A", "Z"}: 0,
		{"B", "X"}: 0,
		{"B", "Y"}: 3,
		{"B", "Z"}: 6,
		{"C", "X"}: 6,
		{"C", "Y"}: 0,
		{"C", "Z"}: 3,
	}

	Shapes := map[string]int{
		"X": 1, // Rock
		"Y": 2, // Paper
		"Z": 3, // Scissors
	}

	return scores[Key{opponent, you}] + Shapes[you]
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	score := 0
	for scanner.Scan() {
		line := strings.TrimRight(scanner.Text(), "\n")
		letters := strings.Split(line, " ")
		opponent := letters[0]
		you := letters[1]

		score += calcScore(opponent, you)
	}

	if scanner.Err() != nil {
		fmt.Println("Error:", scanner.Err())
	}

	fmt.Println("Score:", score)
}
