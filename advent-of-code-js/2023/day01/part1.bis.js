const fs = require('fs');

fs.readFile('./input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    const sum = data
        .split('\n')
        .map(line => {
            const digits = line.match(/\d/g);

            if (!digits || digits.length < 1) return 0;

            const firstDigit = parseInt(digits[0]);
            const lastDigit = parseInt(digits[digits.length - 1]);

            return (firstDigit * 10 + lastDigit);
        })
        .reduce((acc, val) => acc + val, 0);

    console.log(sum);
});