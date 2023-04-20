// Function that takes in a single parameter - books
// Returns a number of book objects inside of the array
// Need to loop through all of the books and return total
// Add to the counter for every book found
// Return that total
function getTotalBooksCount(books) {
  let total = books.reduce((currentTotal) => {
    return currentTotal += 1;
  }, 0)
  return total;
}

// Function that takes in a single parameter - books
// Returns a number of book objects inside of the array
// Need to loop through all of the accounts and return total
// Declare a variable called total which is set to 0
// Create a for in loop to loop through the accounts object array
// Add to the counter for every book found
// Return that total
function getTotalAccountsCount(accounts) {
  let total = 0;
  for(let index in accounts) {
    total += 1;
  }
  return total;
}

// Function that takes in a single parameter - books
// Returns a number that represents the number of books that are checked out
// This number can be found by looking at the first transaction object in the `borrows` array of each book
// If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed
// Declare a variable called booksBorrowed
// Filter through the books array
// Create an anonymous function declaration called book that filters through the `borrows` array
// If the book is returned then it is false
// If the book is not returned and the array that has been filtered through the books array is greater than 0 we will return all of this in our stored variable `booksBorrowed`
function getBooksBorrowedCount(books) {
  let booksCheckedOut = books.filter(
    (book) =>
     book.borrows.filter((record) => record.returned === false).length > 0
   );
   return booksCheckedOut.length;
}

function getMostCommonGenres(books) {
 let mostCommon = {};
 books.forEach((num) => {
  if (mostCommon[num.genre]) {
   mostCommon[num.genre]++;
  } else {
   mostCommon[num.genre] = 1;
  }
 });
 return Object.entries(mostCommon)
  .map(([name, count]) => {
   return {
    name,
    count
   };
  })
  .sort((bookA, bookB) => bookB.count - bookA.count)
  .slice(0, 5);
}

// <== Helper function here ==>
function sortBooks (arr){
  return arr.sort((popularBookA, popularBookB) => (popularBookA.count < popularBookB.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularBooks(books) {
  let bookBorrows = books
  .map((book) => {
   return { name: book.title, count: book.borrows.length };
  })
  return sortBooks(bookBorrows);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let theAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     theAuthor.count += book.borrows.length;
    }
   });
   result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
