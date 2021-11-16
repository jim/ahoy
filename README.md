# ahoy

A browser extension that adds clickable links to every anchor on a webpage.

This extension was created to make it easier to link to specific locations
within a page as a part of writing useful documentation.

## Development

Install development dependencies:

```console
$ npm install
```

Start the parcel dev server:

```console
$ npm start
```

To test in Chrome: 

1.  Turn on "developer" mode on the extension page and load the `dist` directory using the "Load unpacked" button.

To test in Firefox: 

1. Run `web-ext -s dist run` and it will open Firefox with the extension loaded. Keep `npm start` running so that the `dist` directory is updated as changes are made.

To test in Safari:

1. Install Xcode.
2. Run `/Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter dist/webext-prod`. Xcode will open a new generated project for your extension.
3. Click the play icon in the window header. Xcode will build the project and then open Safari.
4. Check "Show Develop menu in menu bar" in Safari Preferences > Advanced.
5. Enable "Allow Unsigned Extensions" in the Develop menu.
6. Go to Safari Preferences > Extensions and enable the Ahoy extension. You may get a warning and have to do this twice for it to truly be enabled.
7. The first time you click the extension, Safari will ask you to allow access to the current page or all pages. Choose all pages.