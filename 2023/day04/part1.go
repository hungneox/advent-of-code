package main

import (
	"bufio"
	"fmt"
	"log"
	"math"
	"os"
	"regexp"
	"strconv"
	"strings"
)

func findIntersection(arr1, arr2 []int) []int {
	intersection := make([]int, 0)
	// Traverse each element in arr1
	for _, num1 := range arr1 {
		// Check if num1 exists in arr2
		for _, num2 := range arr2 {
			if num1 == num2 {
				intersection = append(intersection, num1)
				break
			}
		}
	}

	return intersection
}

func getArrayNumbers(nums string) []int {
	splitNums := strings.Fields(nums)
	// fmt.Println(splitNums)
	// Filter out empty strings from the split array
	var filteredNums []int
	for _, n := range splitNums {
		if n != "" {
			num, err := strconv.Atoi(n)
			if err != nil {
				// fmt.Println("Error:", err)
				continue
			}
			filteredNums = append(filteredNums, num)
		}
	}

	return filteredNums
}

func getNumbers(line string) ([]int, []int) {
	var re = regexp.MustCompile(`^Card \d{1,3}:`)
	allNumbers := re.ReplaceAllString(line, "")

	winingNumbers := strings.Split(allNumbers, "|")[0]
	yourNumbers := strings.Split(allNumbers, "|")[1]
	// fmt.Println(winingNumbers)
	// fmt.Println(yourNumbers)

	return getArrayNumbers(winingNumbers), getArrayNumbers(yourNumbers)
}

func main() {
	file, err := os.Open("./input.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	// optionally, resize scanner's capacity for lines over 64K, see next example
	points := 0.0

	for scanner.Scan() {
		// fmt.Println(scanner.Text())

		winingNumbers, yourNumbers := getNumbers(scanner.Text())

		intersect := findIntersection(winingNumbers, yourNumbers)
		// fmt.Println(intersect)
		if len(intersect) == 0 {
			continue
		}
		points += math.Pow(2, float64(len(intersect)-1))
	}

	fmt.Println("Result", points)

	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}
