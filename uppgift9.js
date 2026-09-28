/* Lösning till Uppgift 9. Av Maayan Grolman 2026 */

"use strict";

//Array med objekt
let people = [
  {
    name: "Elizabeth Bennet",
    age: 20,
    city: "Hertfordshire",
  },
  {
    name: "Fitzwilliam Darcy",
    age: 28,
    city: "Derbyshire",
  },
  {
    name: "Charlotte Lucas",
    age: 27,
    city: "Kent",
  },
];

//Lägg till omyndig
people.push({
  name: "Lydia Bennet",
  age: 15,
  city: "Hertfordshire",
});

//Funktion för att loopa och skriva ut info om personer
people.forEach((person) => {
  if (person.age >= 18) {
    console.log(`${person.name} lives in ${person.city} and is of age.`);
  } else {
    console.log(`${person.name} lives in ${person.city} and is not of age.`);
  }
});
