/*
Problem Statement
Write a program that takes a number of days as input and converts it into years, months, and remaining days. Assume:

1 year = 365 days
1 month = 30 days
Input
A single integer d (1 ≤ d ≤ 10000) representing the number of days.

Output
Print the result in the format:

X years, Y months, Z days
Examples
Example 1: Input:

400
Output:

1 years, 1 months, 5 days
Example 2: Input:

800
Output:

2 years, 2 months, 10 days

Test Cases:
- Input: 1      -> Output: 0 years, 0 months, 1 days
- Input: 29     -> Output: 0 years, 0 months, 29 days
- Input: 30     -> Output: 0 years, 1 months, 0 days
- Input: 365    -> Output: 1 years, 0 months, 0 days
- Input: 395    -> Output: 1 years, 1 months, 0 days
- Input: 400    -> Output: 1 years, 1 months, 5 days
- Input: 730    -> Output: 2 years, 0 months, 0 days
- Input: 800    -> Output: 2 years, 2 months, 10 days
- Input: 10000  -> Output: 27 years, 4 months, 25 days
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', input => {
  const days = Number(input);

  // TODO: Convert days into years, months, and days
  const years = Math.floor(days/365);
  const remainingDays = days % 365;

  const months = Math.floor(remainingDays / 30);
  const finalremaingDay = remainingDays % 30;

  console.log(`${years} years, ${months} months, ${finalremaingDay} days`)

  readline.close();
});