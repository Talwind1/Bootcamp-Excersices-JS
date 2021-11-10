const book1 = {
  name: "Neverland",
  author: "Eshkol Nevo",
  year: 2003,
};

const book2 = {
  name: "Time",
  author: "Galila",
  year: 2021,
};

const bookUtils = {
  getFirstPublished: function (book1, book2) {
    let olderBook = book1.year < book2.year ? book1 : book2;
    return olderBook;
  },
  setNewEdition: function (book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage: function (book, language) {
    book.language = language;
  },
  setTranslation: function (book, language, translator) {
    book.translation = {
      translator: translator,
      language: language,
    };
  },
  setPublisher: function (book, name, location) {
    book.publisher = {
      name: name,
      location: location,
    };
  },
  isSamePublisher: function (book1, book2) {
    if (book1.publisher && book2.publisher) {
      return (
        book1.publisher.name === book2.publisher.name &&
        book1.publisher.location === book2.publisher.location
      );
    }
  },
};

bookUtils.setPublisher(book1, "Hebrew", "Emi");
bookUtils.setPublisher(book2, "Hebrew", "Emi");
console.log(bookUtils.isSamePublisher(book1, book2));
