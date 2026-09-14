/* 
E-commerce company "ShopEasy" has an online shopping platform that allows users to purchase products from various categories. The company uses JavaScript to implement business logic on the client-side. One of the features of the platform is to offer discounts to customers based on their purchase history. The discounts are calculated using a complex expression involving multiple conditions and operators.

You are tasked with debugging an issue in the discount calculation logic, where the expression const result = 5 + 10 * 2 > 28 && (true || false) is not producing the expected output. Your goal is to evaluate this expression and explain step-by-step how you would arrive at the final result.

Assume that you have access to a JavaScript console where you can write code and execute it. You need to provide a clear explanation of how you would approach this problem, including any intermediate calculations or evaluations.

Please provide your approach to solve this problem.
*/


let result = 5 + 10 * 2 > 28 && (true || false);
console.log(result);

/* answer
result = 5 + 10 * 2 > 28 && (true || false)
= 5 + 10 * 2 > 28 && true // here the precedence of () paranthese is highest so it will first evalute '(true || false)'
= 5 + 20 > 28 && true // here the precedence of '*' is higest so it will calculate 10 * 2 = 20
= 25 > 28 && true // here the precedence of '+' is highest,it will add the numbers
= false && true // here the precdence of '>' is highest so it will evalute that, becasue 25 is not greater than 28 it will be false
= false // short-circuit,  falsy value will be taken in consideration as per the 'AND'  logic operator
*/