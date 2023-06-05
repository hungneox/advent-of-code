package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	scanner := bufio.NewScanner(os.Stdin)

	score1 := 0
	score2 := 0
	for scanner.Scan() {
		line := strings.TrimRight(scanner.Text(), "\n")
		// get two equal sub string from line
		part1, part2 := line[:len(line)/2], line[len(line)/2:]
		fmt.Println(part1, "|", part2)

	}

	if scanner.Err() != nil {
		fmt.Println("Error:", scanner.Err())
	}

	fmt.Println("Score 1:", score1)
	fmt.Println("Score 2:", score2)
}
