import {
  updateTime,
  setInputData,
  displayBooks,
  saveInputData,
  addBook,
  addBookToHolder,
} from './modules/Helpers.js';
import navigateToSection from './modules/navigateToSection.js';
import DOMElements from './modules/DOMElements.js';
import Book from './modules/Book.js';
import setTime from './modules/dateTime.js';

const domElements = new DOMElements();

const init = () => {
  updateTime();
  setInputData();
  navigateToSection('add');
  displayBooks();
  domElements.inputTitle.addEventListener('input', saveInputData);
  domElements.inputAuthor.addEventListener('input', saveInputData);
  domElements.addButton.addEventListener('click', addBook);

  addBookToHolder(new Book('Book 1', 'Author 1'));
  addBookToHolder(new Book('Book 2', 'Author 2'));
};

document.addEventListener('DOMContentLoaded', init);
setTime();
