#include <iostream>
#include <string>
#include <sstream>
#include <map>
#include <utility>

struct Key
{
    std::string you;
    std::string opponent;
};

int calcScorePart1(const std::string &opponent, const std::string &you)
{
    std::map<Key, int> scores = {
        {{"A", "X"}, 3 + 1},
        {{"A", "Y"}, 6 + 2},
        {{"A", "Z"}, 0 + 3},
        {{"B", "X"}, 0 + 1},
        {{"B", "Y"}, 3 + 2},
        {{"B", "Z"}, 6 + 3},
        {{"C", "X"}, 6 + 1},
        {{"C", "Y"}, 0 + 2},
        {{"C", "Z"}, 3 + 3}};

    return scores[Key{opponent, you}];
}

int scaleScorePart2(const std::string &opponent, const std::string &you)
{
    std::map<Key, int> scores = {
        {{"A", "X"}, 0 + 3},
        {{"A", "Y"}, 3 + 1},
        {{"A", "Z"}, 6 + 2},
        {{"B", "X"}, 0 + 1},
        {{"B", "Y"}, 3 + 2},
        {{"B", "Z"}, 6 + 3},
        {{"C", "X"}, 0 + 2},
        {{"C", "Y"}, 3 + 3},
        {{"C", "Z"}, 6 + 1}};

    return scores[Key{opponent, you}];
}

int main()
{
    std::string line;
    int score1 = 0;
    int score2 = 0;

    while (std::getline(std::cin, line))
    {
        std::istringstream iss(line);
        std::string opponent, you;
        if (iss >> opponent >> you)
        {
            score1 += calcScorePart1(opponent, you);
            score2 += scaleScorePart2(opponent, you);
        }
    }

    if (!std::cin.eof())
    {
        std::cerr << "Error reading input." << std::endl;
        return 1;
    }

    std::cout << "Score 1: " << score1 << std::endl;
    std::cout << "Score 2: " << score2 << std::endl;

    return 0;
}