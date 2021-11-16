const browser = require("webextension-polyfill");

function onClick (tab) {
  browser.tabs.executeScript({
    file: '/content_script.js'
  }).then(function () {
    browser.tabs.query({ currentWindow: true, active: true }).then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, { command: 'ahoy' });
    });
  }, console.error);
}

browser.browserAction.onClicked.addListener(onClick);
