/* Lösning till Uppgift 2. Av Maayan Grolman 2026 */

"use strict";

let price = "100"; //pris på produkt
console.log(`Pris: ${price}kr/st`);

let amount = 3; //antal produkter
console.log(`Antal: ${amount}st`);

let total = price * amount; //totalsumma
console.log(`Totalt: ${total}kr`);

let moms = 0.25; //25% moms

let totalInklMoms = total * (1 + moms); //pris inlk. moms

console.log(`Totalt inkl. moms: ${totalInklMoms}kr`);
