/* Lösning till Uppgift 7. Av Maayan Grolman 2026 */

"use strict";

let numbers = [1, 5, 8, 3, 4, 9];

function calculateSum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let totalSum = calculateSum(numbers);

console.log(totalSum);
