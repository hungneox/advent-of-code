#include <iostream>
#include <string>
#include <algorithm>
#include <vector>

char commonLetter(const std::string &s1, const std::string &s2)
{
    char common = '\0';
    for (size_t i = 0; i < s1.length(); ++i)
    {
        for (size_t j = 0; j < s2.length(); ++j)
        {
            if (s1[i] == s2[j])
            {
                common = s1[i];
                break;
            }
        }
        if (common != '\0')
        {
            break;
        }
    }
    return common;
}

int alphabetToNumber(char s)
{
    if (s < 96)
    {
        return s - 64 + 26;
    }
    return s - 96;
}

int main()
{
    std::string line;
    int sum = 0;
    while (std::getline(std::cin, line))
    {
        // Get two equal substrings from the line
        std::string part1 = line.substr(0, line.length() / 2);
        std::string part2 = line.substr(line.length() / 2);

        // Find common letter
        char common = commonLetter(part1, part2);

        // Increase sum by the priority of the common letter
        sum += alphabetToNumber(common);
    }

    if (!std::cin.eof())
    {
        std::cerr << "Error reading input." << std::endl;
        return 1;
    }

    std::cout << "Sum: " << sum << std::endl;

    return 0;
}