// step 1: Initialize variables and constant
a = 25;
b = 20;
c = 12;
d = "15"; //d is a string
e = 15;

// step 2: Display the sum of declared variables and constant combined
let sum = a + b + c + parseInt(d) + e;

// Convert d to an integer for accurate summation
console.log("d > e:", parseInt(d) > e);
console.log("d < e:", parseInt(d) < e);
console.log("d >= e:", parseInt(d) >=e);
console.log("d <= e:", parseInt(d) <= e);
console.log("d === e:", parseInt(d) === e);

// 1. Subtract all values
let subtractionResult = a - b - c - parseInt(d) - e;
console.log("Subtraction Result:", subtractionResult);

// 2. Multiply a and c, and divided by constant e 
let multiplicationDivisionResult = (a * c) / e;
console.log("Multiplication and Division Result:", multiplicationDivisionResult);

// 3. Exponent value of constant e raise to the power of variable c 
let exponentResult = Math.pow(e,c);
console.log("Exponent Result (e^c):",exponentResult);

// 4. Reassign the value of c.3 to constant e, then display the result
// Since e cannot be reassigned, we will instead assign a new variable c3
let c3 = Math.pow(c, 3);// c raised to the power of 3
console.log("New variable c3 (c^3):", c3);