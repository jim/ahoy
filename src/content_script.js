const browser = require("webextension-polyfill");

(function () {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.__ahoyHasLoaded) {
    return;
  }
  window.__ahoyHasLoaded = true;

  function createAnchorLink (element) {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', '#' + element.id);
    anchor.classList.add('--ahoy-anchor');
    anchor.appendChild(document.createTextNode('⚓️'));
    element.prepend(anchor);
  }

  function addOrRemoveAnchors () {
    if (window.__ahoyAnchorsAreAdded) {
      removeAnchors();
      window.__ahoyAnchorsAreAdded = false;
    } else {
      addAnchors();
      window.__ahoyAnchorsAreAdded = true;
    }
  }

  function addAnchors () {
    const elements = document.querySelectorAll('[id]');
    elements.forEach((element) => {
      createAnchorLink(element);
    });
  }

  function removeAnchors () {
    document.querySelectorAll('.--ahoy-anchor').forEach(anchor => anchor.remove());
  }

  /**
   * Listen for messages from the background script.
   */
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === 'ahoy') {
      addOrRemoveAnchors();
    }
  });
})();
