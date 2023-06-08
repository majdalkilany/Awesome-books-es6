import DOMElements from './DOMElements.js';
import LocalStorageHandler from './LocalStorageHandler.js';
import Book from './Book.js';

const localStorageHandler = new LocalStorageHandler();
const domElements = new DOMElements();
const addBookToHolder = (newBook) => {
  const bookHolder = localStorageHandler.getBookHolder();
  // Check if the book already exists in local storage
  if (bookHolder.some((book) => book.title === newBook.title)) {
    // Book already exists, do nothing
    return;
  }

  bookHolder.push(newBook);
  localStorageHandler.saveBookHolder(bookHolder);
  displayBooks();
};

const clearInputData = () => {
  const inputData = { inputTitle: '', inputAuthor: '' };
  localStorageHandler.saveInputData(inputData);
};

const addBook = () => {
  const titleData = domElements.inputTitle.value;
  const authorData = domElements.inputAuthor.value;
  if (titleData === '' || authorData === '') {
    domElements.displayError();
    return;
  }

  const newBook = new Book(titleData, authorData);
  addBookToHolder(newBook);
  clearInputData();
  displayBooks();
  domElements.inputTitle.value = '';
  domElements.inputAuthor.value = '';
  domElements.clearError(); // clear error message
};

const displayBooks = () => {
  domElements.bookDisplay.innerHTML = '';
  const bookHolder = localStorageHandler.getBookHolder();
  bookHolder.forEach((book, index) => {
    const bookInstance = document.createElement('article');
    const dispTitle = `"${book.title}" by ${book.author}`; // Concatenate book title and author
    const delButton = document.createElement('button');
    delButton.textContent = 'Remove';
    delButton.setAttribute('data-index', index);
    delButton.addEventListener('click', () => {
      localStorageHandler.deleteBook(index);
      displayBooks();
    });
    bookInstance.append(document.createTextNode(dispTitle), delButton);
    domElements.bookDisplay.append(bookInstance);
    // add class to each bookInstance element based on its index
    if (index % 2 === 0) {
      bookInstance.classList.add('book-row-even');
    } else {
      bookInstance.classList.add('book-row-odd');
    }
  });
};

const saveInputData = () => {
  const inputData = {
    inputTitle: domElements.inputTitle.value,
    inputAuthor: domElements.inputAuthor.value,
  };
  localStorageHandler.saveInputData(inputData);
};

const setInputData = () => {
  const inputData = localStorageHandler.getInputData();
  domElements.inputTitle.value = inputData.inputTitle;
  domElements.inputAuthor.value = inputData.inputAuthor;
};

const timeElement = document.querySelector('.date');
const updateTime = () => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
};

export {
  addBookToHolder,
  clearInputData,
  addBook,
  displayBooks,
  saveInputData,
  setInputData,
  updateTime,
};
