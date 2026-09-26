/* Lösning till Uppgift 5. Av Maayan Grolman 2026 */

"use strict";

let foods = ["Sushi", "Pancakes", "Tacos", "Pizza", "Lasagna"];

console.log(foods); //alla
console.log(foods[0]); //första
console.log(foods[4]); //sista

foods.push("Pumpkin soup"); //lägg till på slutet

foods.shift(); //ta bort första
console.log(foods);
