function findAccountById(accounts, id) {
  let accountName = accounts.find((account) => account.id === id)
  return accountName
}

function sortAccountsByLastName(accounts) {
accounts.sort((accountA, accountB) =>
accountA.name.last > accountB.name.last ? 1 : -1);
return accounts
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach(book => book.borrows.forEach(borrow => account.id === borrow.id && total++));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
let result = [];
let matchingBook = [];
books.forEach((book) => {
 const borrowed = book.borrows;
  const bookBorrowed = {
   id: book.id,
   title: book.title,
   genre: book.genre,
   authorId: book.authorId,
   author: {},
   borrows: {}
  };
  const  { id, title, genre, authorId, author, borrows} = bookBorrowed;
  
  borrowed.forEach((borrow) => {
   if (borrow.id === account.id && borrow.returned === false)  {
    result.push(bookBorrowed);
    matchingBook.push(borrow);
    bookBorrowed.borrows = matchingBook;
    bookBorrowed.author = authors.filter((auth) => auth.id === book.authorId)[0];
   }
  });
});
return result

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};