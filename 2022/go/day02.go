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

func calcScorePart1(opponent, you string) int {
	scores := map[Key]int{
		{"A", "X"}: 3 + 1,
		{"A", "Y"}: 6 + 2,
		{"A", "Z"}: 0 + 3,
		{"B", "X"}: 0 + 1,
		{"B", "Y"}: 3 + 2,
		{"B", "Z"}: 6 + 3,
		{"C", "X"}: 6 + 1,
		{"C", "Y"}: 0 + 2,
		{"C", "Z"}: 3 + 3,
	}

	return scores[Key{opponent, you}]
}

func scaleScorePart2(opponent, you string) int {
	// X = lose, Y = draw, Z = win
	// A = Rock, B = Paper, C = Scissors
	scores := map[Key]int{
		{"A", "X"}: 0 + 3,
		{"A", "Y"}: 3 + 1,
		{"A", "Z"}: 6 + 2,
		{"B", "X"}: 0 + 1,
		{"B", "Y"}: 3 + 2,
		{"B", "Z"}: 6 + 3,
		{"C", "X"}: 0 + 2,
		{"C", "Y"}: 3 + 3,
		{"C", "Z"}: 6 + 1,
	}

	return scores[Key{opponent, you}]
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	score1 := 0
	score2 := 0
	for scanner.Scan() {
		line := strings.TrimRight(scanner.Text(), "\n")
		letters := strings.Split(line, " ")
		opponent := letters[0]
		you := letters[1]

		score1 += calcScorePart1(opponent, you)
		score2 += scaleScorePart2(opponent, you)
	}

	if scanner.Err() != nil {
		fmt.Println("Error:", scanner.Err())
	}

	fmt.Println("Score 1:", score1)
	fmt.Println("Score 2:", score2)
}
