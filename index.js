/*
 * Sunny Tian
 * 10/29/23
 *
 * This is the index.js script for my book blog.
 */

"use strict";
(function() {
  const BOOK_URL = "https://anapioficeandfire.com/api/books/";
  const WORD_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  window.addEventListener("load", init);

  /** This function allows the buttons to be clickable when the webpage loads */
  function init() {
    let colorButton = id('theme');
    colorButton.addEventListener("click", changeColorMode);

    let submitBookButton = qs('#suggestions button');
    submitBookButton.addEventListener("click", addBook);

    let submitWordButton = qs('#define button');
    submitWordButton.addEventListener("click", defineWord);

    let randomBookButton = qs('#random button');
    randomBookButton.addEventListener("click", getRandomBook);
  }

  /** This function finds and displays all definitions of the user's submitted word. */
  async function defineWord() {
    clearWordResults();

    let input = id("word");
    let word = input.value;

    if (!(word === "")) {
      input.value = "";
      try {
        let apiResponse = await fetch(WORD_URL + word);
        await statusCheck(apiResponse);
        let parsedData = await apiResponse.json();
        searchDefinitions(parsedData);
      } catch (err) {
        handleDefineError();
      }
    } else {
      id("empty-submit").classList.toggle("hidden");
    }
  }

  /**
   * This function clears the error message or definitions that are in the
   * "Define a word" section of the webpage.
   */
  function clearWordResults() {
    let emptySubmitMessage = id("empty-submit");
    if (!emptySubmitMessage.classList.contains("hidden")) {
      emptySubmitMessage.classList.toggle("hidden");
    }

    let errorMessage = id("define-error");
    if (!errorMessage.classList.contains("hidden")) {
      errorMessage.classList.toggle("hidden");
    }

    let box = id("definitions-box");
    if (!(box.innerHTML === "")) {
      box.innerHTML = "";
    }
  }

  /**
   * This function finds the entries of the given word, and then displays the
   *  definitions of each entry.
   * @param {Object} wordEntries - represnts the user-submitted word's
   *  dictionary entries.
   */
  function searchDefinitions(wordEntries) {
    let box = id("definitions-box");

    for (let i = 0; i < wordEntries.length; i++) {
      let currentEntry = wordEntries[i];
      let meanings = currentEntry["meanings"];
      for (let j = 0; j < meanings.length; j++) {
        box.appendChild(getDefinitions(meanings[j]));
      }
    }
  }

  /**
   * This function displays all definitions within the given meaning of the user-submitted
   * word.
   * @param {Object} currentMeaning - the meaning of a word to get definitions from.
   * @return {HTMLElement} - A card that contains the part of speech and definitions
   * for the given meaning of a word.
   */
  function getDefinitions(currentMeaning) {
    let definitionsCard = gen("section");
    let partOfSpeech = gen("h3");
    partOfSpeech.textContent = currentMeaning.partOfSpeech;
    definitionsCard.appendChild(partOfSpeech);

    let definitions = currentMeaning.definitions;
    for (let i = 0; i < definitions.length; i++) {
      let definition = gen("p");
      definition.textContent = definitions[i]["definition"];
      definitionsCard.appendChild(definition);
    }
    return definitionsCard;
  }

  /**
   * This function displays a message in the "Define a word" section telling the
   * user that their word could not be found.
   */
  function handleDefineError() {
    id("define-error").classList.toggle("hidden");
  }

  /** This function displays a random Game of Thrones book. */
  async function getRandomBook() {
    clearBookResults();

    const maxRandomNum = 12;
    const num = Math.floor(Math.random() * maxRandomNum) + 1;
    try {
      let apiResponse = await fetch(BOOK_URL + num);
      await statusCheck(apiResponse);
      let parsedData = await apiResponse.json();
      showBook(parsedData);
    } catch (err) {
      handleBookError();
    }
  }

  /**
   * This function displays the given book in the "get a random Book"
   *  section of the webpage.
   * @param {Object} book - the randomly selected book to display.
   */
  function showBook(book) {
    let title = gen("h3");
    title.textContent = "" + book["name"];
    let author = gen("p");
    author.textContent = "by " + book["authors"][0];
    let pages = gen("p");
    pages.textContent = book["numberOfPages"] + " pages";

    let bookshelf = id("bookshelf");
    let bookSection = gen("section");
    bookSection.appendChild(title);
    bookSection.appendChild(author);
    bookSection.appendChild(pages);
    bookshelf.appendChild(bookSection);
  }

  /**
   * Clears the "get a random book" section.
   * If there is an error message or book, removes it.
   */
  function clearBookResults() {
    let errorMessage = id("book-error");
    if (!errorMessage.classList.contains("hidden")) {
      errorMessage.classList.toggle("hidden");
    }

    let bookshelf = id("bookshelf");
    if (!(bookshelf.innerHTML === "")) {
      bookshelf.innerHTML = "";
    }
  }

  /** This function displays an error message in the "get a random book" section. */
  function handleBookError() {
    id("book-error").classList.toggle("hidden");
  }

  /**
   * This function checks the status of an api response.
   * @param {Response} res - the Response object to check the status of.
   */
  async function statusCheck(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * This function adds the user's book submission to the tbr list.
   * Referenced the Blog Entry quiz section activity from 10/17/23 as an example
   * of how to implement this function.
   */
  function addBook() {
    let bookDescription = document.createElement('h3');
    let bookCover = document.createElement('img');
    bookDescription.textContent = id("title").value + " by " + id("author").value;

    id("title").value = "";
    id("author").value = "";
    setBookCover(bookCover, bookDescription);
    addNewBook(bookCover, bookDescription);
  }

  /**
   * This is a helper function that displays the user's book submission to the
   * tbr list.
   * @param {Node} bookCover - represents the book's cover.
   * @param {Node} bookDescription - represents the book's title and author.
   */
  function addNewBook(bookCover, bookDescription) {
    let tbr = id("tbr");
    let bookElement = document.createElement('section');
    bookElement.appendChild(bookDescription);
    bookElement.appendChild(bookCover);
    tbr.appendChild(bookElement);
  }

  /**
   * This function creates the book cover to display based on the user's image
   * link, and clears the input box for the link.
   * If the user did not submit a book cover image link, gives the entry an
   * empty book cover.
   * @param {Node} bookCover - represents the book's cover.
   * @param {Node} bookDescription - represents the book's title and author.
   */
  function setBookCover(bookCover, bookDescription) {
    let link = id("cover").value;
    if (link) {
      bookCover.src = link;
      bookCover.alt = "cover of " + bookDescription.textContent;
      id("cover").value = "";
    } else {
      bookCover.src = "img/nobookcover.png";
      bookCover.alt = "empty rectangle";
    }
  }

  /** This function switches the page's dark color theme or off */
  function changeColorMode() {
    let body = qs('body');
    let isDark = body.classList.contains("darkMode");

    changeButtonText(isDark);
    switchColorMode(isDark);
  }

  /**
   * This is a helper function that changes the color mode button's text to be
   * say either dark or light mode.
   * @param {boolean} isDark - indicates if the color mode is currently set to
   *  dark or light.
   */
  function changeButtonText(isDark) {
    let button = id('theme');
    if (isDark) {
      button.textContent = "dark mode";
    } else {
      button.textContent = "light mode";
    }
  }

  /**
   * This is a helper function that changes the theme from dark to light mode.
   * @param {boolean} isDark - indicates if the color mode is currently set to
   *  dark or light.
   */
  function switchColorMode(isDark) {
    let body = qs('body');
    let header = qs('header');

    if (isDark) {
      body.classList.remove("darkMode");
      header.classList.remove("darkMode");
    } else {
      body.classList.add("darkMode");
      header.classList.add("darkMode");
    }
  }

  /**
   * Returns a new node element according to the given tag name.
   * @param {string} tag -
   * @return {Node} -
   */
  function gen(tag) {
    return document.createElement(tag);
  }

  /**
   * This function returns the node with the given id.
   * @param {string} id - the name of the id for the node to return.
   * @return {Node} the node with the given id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * This function returns the node with the given selector. If there are
   * multiple nodes with the same selector, returns the first.
   * @param {string} selector - the name of the selector for the node to return.
   * @return {Node} the node with the given selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }
})();