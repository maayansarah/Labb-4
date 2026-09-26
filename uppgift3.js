/* Lösning till Uppgift 3. Av Maayan Grolman 2026 */

"use strict";

let age = 65; //valfri ålder

if (age <= 17) {
  console.log(`Barn`); //17 eller yngre
} else if (age <= 64) {
  console.log(`Vuxen`); //64 eller yngre
} else {
  console.log(`Pensionär`); //övrig ålder, äldre än 64
}
