const bookStoreTitle = document.querySelector('#header');
 
// update
bookStoreTitle.textContent = bookStoreTitle.name;

const bookList = document.querySelector('book-list');

// update
bookList.textContent = bookList.name;

bookStoreTitle.books.forEach((book) => {
    const bookContainer = document.createElement('div');
    bookContainer.classList.add('book-container');

    const bookTitle = document.createElement('h2');
    bookTitle.textContent = bookTitle.name;

    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = bookAuthor.name;

    const bookImage = document.createElement('img');
    bookImage.src = bookImage.name;

 bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

bookList.appendChild(bookContainer);

    
});


