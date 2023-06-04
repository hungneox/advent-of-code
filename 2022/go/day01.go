package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func max[T int | float32](a, b T) T {
	if a > b {
		return a
	}
	return b
}

func main() {
	scanner := bufio.NewScanner(os.Stdin)
	maxCalories := 0
	localCalories := 0

	for scanner.Scan() {
		line := strings.TrimRight(scanner.Text(), "\n")

		if line != "" {
			// Atoi: ASCII to integer
			num, _ := strconv.Atoi(line)
			localCalories += num
			maxCalories = max(maxCalories, localCalories)
		} else {
			localCalories = 0
		}
	}

	if scanner.Err() != nil {
		fmt.Println("Error:", scanner.Err())
	}

	fmt.Println("Max calories:", maxCalories)
}
