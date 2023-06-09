#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>

template <typename T>
T max(T a, T b)
{
    return (a > b) ? a : b;
}

int main()
{
    std::string line;
    int maxCalories = 0;
    int localCalories = 0;

    while (std::getline(std::cin, line))
    {
        std::istringstream iss(line);
        if (!line.empty())
        {
            int num;
            if (iss >> num)
            {
                localCalories += num;
                maxCalories = max(maxCalories, localCalories);
            }
        }
        else
        {
            localCalories = 0;
        }
    }

    if (!std::cin.eof())
    {
        std::cerr << "Error reading input." << std::endl;
        return 1;
    }

    std::cout << "Max calories: " << maxCalories << std::endl;

    return 0;
}