/*
A social media company, "ConnectMe", wants to develop a feature to recommend the most popular post of the day based on the number of likes, comments, and shares. The feature should be able to take three distinct numbers as input, representing the number of likes, comments, and shares respectively, and return the greatest of the three numbers. The company wants to implement this feature using both ternary operators and switch-case statements in JavaScript.

Write a JavaScript code snippet that takes three distinct numbers as input and returns the greatest of the three numbers using both ternary operators and switch-case statements.

Assume that the input numbers are stored in variables likes, comments, and shares.

You can use the following markdown for writing your code:

// your code here

*/

// assuming the values of likes, share and comment

const likes = 120;
const shares = 80;
const comments = 150;

// ternary if-else statement
// const greatest = (likes > comments && likes > shares) ? likes : (comments > shares)  ? comments : shares;
// console.log(greatest)

// switch case
switch(true){
    case (likes > comments && likes > shares):
        console.log("likes");
        break;
    case (comments > shares):
        console.log("comments");
        break;
    default:
        console.log("shares");
        break;
}


