// Function that takes in two arrays - authors & id
// Need to loop through all of the objects in the authors array
// Find if the current id match is true
// Returns the author object that has the matching ID
function findAuthorById(authors, id) {
  let foundId = authors.find((author) => author.id === id);
  return foundId;
}

// Function that takes in two arrays - books & id
// Need to loop through all of the objects in the book array
// Need to find if the current id match is true
//Returns the book object that has the matching id
function findBookById(books, id) {
  let foundBook = books.find((book) => book.id === id);
  return foundBook;
}

/* The first array contains book objects that represent the books that are currently checked out,
while the second array contains book objects that represent the books that have been returned.
*/
// Function that has a single parameter of books
// Loop through all of the books
// Place the books into different subarray
// Returns an array with two arrays inside (All of the inputted books are present in either the first or second array)
function partitionBooksByBorrowedStatus(books) {
  let currentlyCheckedOut = books.filter((book) =>
  book.borrows.every((borrow) => borrow.returned === true)
 );
 let beenReturned = books.filter((book) =>
  book.borrows.some((borrow) => borrow.returned === false)
 );
 let total = [[...beenReturned], [...currentlyCheckedOut]];
 return total;
}

// Function that takes in the parameters of book & accounts
// Should retrun an array of 10 or fewer account objects
// Account objects represent the accounts given by id and the book's `borrows` array
// Each account object should include the `returned` entry form the transaction object in the `borrows` array
// First retrun book.borrows
// Use the map method to loop through the borrows array
// Use the find method within the map method to loop through the accounts array
// Pass an anonymous function called account and use the find method to locate accounts where the borrow id matches the account id
// Return the output values of the map method which is defined by `borrow` and the variable account
function getBorrowersForBook(book, accounts) {
  return book.borrows
    .map((borrow) => {
      let account = accounts.find((account) => account.id === borrow.id);
      return {...borrow, ...account};
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
