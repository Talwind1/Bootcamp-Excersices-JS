const book = {
  name: "Neverland",
  author: "Eshkol Nevo",
  numPages: 240,
  publishYear: 2003,
  rateOutOfFive: 3.5,
};

function bookDetails(book) {
  return `The book ${book.name} was written by ${book.author} in
the year ${book.publishYear}`;
}
console.log(bookDetails(book));
