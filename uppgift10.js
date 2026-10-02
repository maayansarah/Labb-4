/* Lösning till extra uppgift. Av Maayan Grolman 2026 */

"use strict";

//Skapa funktion
function printTimeTable(table) {
  let result = "";

  //Loopa 1 - 10
  for (let i = 1; i <= 10; i++) {
    let product = i * table; //uträkningen
    result += `${i} * ${table} = ${product}`;
  }
  console.log(result); //utskriften
}

//Anropa funktionen
printTimeTable(5);
