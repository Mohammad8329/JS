/*
Valid Date
Determine whether a given calendar date is valid or invalid.

Rules
Month must be between 1 and 12.

Day must fit the month and year:

31-day months: January, March, May, July, August, October, December (1, 3, 5, 7, 8, 10, 12)

30-day months: April, June, September, November (4, 6, 9, 11)

February (2)

29 days in a leap year
28 days otherwise
Leap year criteria

Divisible by 4 and not divisible by 100, unless also divisible by 400
Input
Three integers (each on its own line):

day
month
year
Output
Print exactly one of:

Valid
or

Invalid
Constraints
1 ≤ day ≤ 31
1 ≤ month ≤ 12
1 ≤ year ≤ 10^5
Examples
Example 1
Input

29
2
2024
Output

Valid
Example 2
Input

31
4
2023
Output

Invalid

Test Cases:
1. Standard Valid 31-Day Month:
   Input: day=31, month=7, year=2024  -> Output: Valid

2. Invalid 31st Day on a 30-Day Month:
   Input: day=31, month=4, year=2023  -> Output: Invalid

3. Leap Year February (Divisible by 4):
   Input: day=29, month=2, year=2024  -> Output: Valid

4. Leap Year February (Divisible by 400 - Century Leap Year):
   Input: day=29, month=2, year=2000  -> Output: Valid

5. Non-Leap Century Year February (Divisible by 100 but NOT 400):
   Input: day=29, month=2, year=1900  -> Output: Invalid

6. Non-Leap Year February 29th:
   Input: day=29, month=2, year=2023  -> Output: Invalid

7. Non-Leap Year February 28th:
   Input: day=28, month=2, year=2023  -> Output: Valid

8. Invalid 30th Day in February:
   Input: day=30, month=2, year=2024  -> Output: Invalid

9. Out of Range Month / Day:
   Input: day=15, month=13, year=2024 -> Output: Invalid
   Input: day=0,  month=5,  year=2024 -> Output: Invalid
*/

/*
#NOTE
                    ┌─────────────────────┐
                    │  Read day, month,   │
                    │       year          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │  isValid = true     │
                    └──────────┬──────────┘
                               │
                               ▼
              ┌─────────────────────────────────┐
              │ Basic Range Check               │
              │                                 │
              │ month < 1 OR month > 12 ?       │
              │ day < 1 OR day > 31 ?           │
              └──────────────┬──────────────────┘
                             │
                  ┌──────────┴──────────┐
                  │ YES                 │ NO
                  ▼                     ▼
          ┌──────────────┐    ┌──────────────────┐
          │ isValid =    │    │ What type of     │
          │ false        │    │ month is it?     │
          └──────────────┘    └────────┬─────────┘
                                       │
                   ┌───────────────────┼───────────────────┐
                   │                   │                   │
                   ▼                   ▼                   ▼
          ┌────────────────┐  ┌────────────────┐  ┌────────────────┐
          │ 31-day month   │  │ 30-day month   │  │   February     │
          │                │  │                │  │                │
          │ 1,3,5,7,8,     │  │ 4,6,9,11       │  │ month === 2    │
          │ 10,12          │  │                │  │                │
          └───────┬────────┘  └───────┬────────┘  └───────┬────────┘
                  │                   │                   │
                  │                   ▼                   ▼
                  │          ┌────────────────┐   ┌───────────────┐
                  │          │ day > 30 ?     │   │ Is leap year? │
                  │          └───────┬────────┘   └───────┬───────┘
                  │                  │                    │
                  │             YES  │                    │
                  │                  ▼              ┌─────┴─────┐
                  │          ┌──────────────┐       │           │
                  │          │ isValid =    │      YES          NO
                  │          │ false        │       │           │
                  │          └──────────────┘       ▼           ▼
                  │                            max = 29     max = 28
                  │                                 │           │
                  │                                 └─────┬─────┘
                  │                                       ▼
                  │                              ┌──────────────┐
                  │                              │ day > max ?  │
                  │                              └──────┬───────┘
                  │                                     │
                  │                                    YES
                  │                                     ▼
                  │                              ┌──────────────┐
                  │                              │ isValid =    │
                  │                              │ false        │
                  │                              └──────────────┘
                  │
                  ▼
          No additional check
          needed because
          day <= 31 was
          already checked.
                              
                  │
                  ▼
      ┌─────────────────────┐
      │     isValid ?       │
      └──────────┬──────────┘
                 │
         ┌───────┴───────┐
         │               │
         YES              NO
         │               │
         ▼               ▼
   ┌────────────┐  ┌────────────┐
   │   Valid    │  │  Invalid   │
   └────────────┘  └────────────┘





START
  ↓
Read input
  ↓
isValid = true
  ↓
Check basic/obvious invalid conditions
  ↓
if invalid
    → isValid = false

else
    → check special cases
       ↓
       if invalid
           → isValid = false

  ↓
Final output
  ↓
if isValid
    → "Valid"
else
    → "Invalid"
*/



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputs = [];

readline.question('', line1 => {
  inputs.push(Number(line1));
  readline.question('', line2 => {
    inputs.push(Number(line2));
    readline.question('', line3 => {
      inputs.push(Number(line3));
      readline.close();

      const day = inputs[0];
      const month = inputs[1];
      const year = inputs[2];

      // TODO: Add logic here to check if the date is valid
      let IsValid = true; // if it turn false at the end of all condition then the days are Valid
      if(month < 1 || month > 12 || day < 1 || day > 31){// check all the invalid conditions for day and month
         IsValid = false
      }
      else if(month === 4 || month === 6 || month === 9 || month === 11){//check if it has 30 days 
         if(day >30)
            IsValid = false;
      }
      else if(month === 2){// check februaruy
         if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){ // if this is true then max days should be 29
            if(day > 29)
               IsValid = false;
         }else{
            if(day > 28)
               IsValid = false;
         }
      }

      // check at the end if IsValid remains true or it turn false 
      console.log(IsValid ? "Valid": "Invalid");


    });
  });
});