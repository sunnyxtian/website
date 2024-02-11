/*
 * Sunny Tian
 * 10/29/23
 *
 * This is the index.js script for my book blog.
 */

"use strict";
(function() {
  window.addEventListener("load", init);

  /** This function allows the buttons to be clickable when the webpage loads */
  function init() {
    let colorButton = id('theme');
    colorButton.addEventListener("click", changeColorMode);
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