function findAccountById(accounts, id) { // Function that takes in two parameters - accounts & id
  const foundId = accounts.find((account) => account.id === id); // Find an account if it matches the id
  return foundId;
}

function sortAccountsByLastName(accounts) { // Function that has a single parameter - accounts
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1); // Returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name
  return accounts;
}

function getTotalNumberOfBorrows(account, books) { // Function that takes in two parmeters - accounts & books
  let totalBorrows = 0; // Returns a number that represents the number of times the account's ID appears in any book's `borrows` array.
  for (let book = 0; book < books.length; book++) {
    for (let borrow = 0; borrow < books[book].borrows.length; borrow++) {
     if (account.id === books[book].borrows[borrow].id) {
      totalBorrows += 1;
     }
    }
   }
   return totalBorrows;
}
 
function getBooksPossessedByAccount(account, books, authors) { // Function that takes in three parameters - account, books & authors
  let foundBooks = []; // Returns an array of book objects, including author information, that represents all books currently checked out by the given account
  let borrowMatch = [];
  books.forEach((item) => {
   const borrowed = item.borrows;
   const book = {
    id: item.id,
    title: item.title,
    genre: item.genre,
    authorId: item.authorId,
    author: {},
    borrows: {}
   };
   const { id, title, genre, authorId, author, borrows } = book; // Book will consist of - id, title, genre, authorId, author & borrows

   borrowed.forEach((borrow) => {
    if (borrow.id === account.id && borrow.returned === false) {
     foundBooks.push(book);
     borrowMatch.push(borrow);
     book.borrows = borrowMatch;
     book.author = authors.filter((auth) => auth.id === book.authorId)[0];
    }
   });
  });
  return foundBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
