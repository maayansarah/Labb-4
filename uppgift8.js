/* Lösning till Uppgift 8. Av Maayan Grolman 2026 */

"use strict";

let bookObject = {
  title: "Pride and Prejudice",
  author: "Jane Austen",
  yearOfPublication: 1813,
};

function printBook(book) {
  console.table(book);
}

printBook(bookObject);
