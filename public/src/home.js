function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
let booksBorrowed = books.filter(
  (book) =>
   book.borrows.filter((checked) => checked.returned === false).length > 0
 );
 return booksBorrowed.length;
}



function helperFunction(books){
  let countObj = {}
  books.forEach(aBook => {
    if (countObj[aBook.genre] != null) {
      countObj[aBook.genre]++
    } else {
      countObj[aBook.genre] = 1
    }
  }) 
  return countObj
}
function getMostCommonGenres(books) {
  let countObj = helperFunction(books)
  let commonGenre = [];
  for (const [key, value] of Object.entries(countObj)) {
    commonGenre.push({
      name: key,
      count: value,
    })
  }
  commonGenre.sort((a,b) => b.count- a.count)
  return commonGenre.slice(0,5)
}


               
function getMostPopularBooks(books) {
const popularBooks = books.reduce((account, book) => {
if (book.borrows.length >= 1) {
  account.push ({
   name: book.title,
   count:book.borrows.length
  });
}
return account;
}, []);
return popularBooks.sort((a, b) => b.count - a.count)
.slice (0, 5);
}

function getMostPopularAuthors(books, authors) {
  let result = [];
  authors.forEach((author) => {
   let popularAuthor = {
    name: `${author.name.first} ${author.name.last}`,
    count: 0
   };
   books.forEach((book) => {
    if (book.authorId === author.id) {
     popularAuthor.count += book.borrows.length;
    }
   });
   result.push(popularAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5); 
}

module.exports = {
  helperFunction,
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors
 
};
