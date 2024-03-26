/*
 * Sunny Tian
 * 10/29/23
 *
 * This is the index.js script for my book blog.
 */

"use strict";
(function() {
  let themes = ["white", "tennis", "bunny", "mint", "midnight"];
  window.addEventListener("load", init);

  /** This function allows the buttons to be clickable when the webpage loads */
  function init() {
    let colorButton = id('theme');
    colorButton.addEventListener("click", changeColorMode);

    let fontButton = id('font');
    fontButton.addEventListener("click", changeFont);

    let musicTour = id('music-tour');
    musicTour.addEventListener("click", changePage);
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

  /** Redirects to music tour subdomain. */
  function changePage() {
    window.location = "http://musictour.sunnytian.com";
  }

  /** This function switches the page's dark color theme or off */
  function changeColorMode() {
    let body = qs('body');
    // let isDark = body.classList.contains("darkMode");

    // changeButtonText(isDark);
    switchColorMode();
  }

  /** This function switches the page's font. */
  function changeFont() {
    let body = qsa('body, button');
    for (let i = 0; i < body.length; i++) {
      body[i].classList.toggle("spaceBody");
    }

    let headers = qsa('h1, h2, h3');
    for (let i = 0; i < headers.length; i++) {
      headers[i].classList.toggle("spaceHeader");
    }
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
   */
  function switchColorMode() {
    let body = qs('body');

    let currTheme = body.className;
    if (themes.includes(currTheme)) {
      let currIndex = themes.indexOf(currTheme);
      let nextIndex = currIndex + 1;

      if (nextIndex > (themes.length - 1)) {
        nextIndex = 0;
      }

      body.classList.remove(currTheme);
      body.classList.add(themes[nextIndex]);
    } else {
      throw new Error("the current class applied to body is not a specified theme");
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

  /**
   * This function returns a list of nodes with the given selector. If there is
   * one node with the given selector, returns a list with one node.
   * @param {string} selector - the given selector to match nodes to.
   * @returns {NodeList} the nodes with the given selector.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();