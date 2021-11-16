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

To test in Chrome: Turn on "developer" mode on the extension page and load the `dist` directory using the "Load unpacked" button.
To test in Firefox: Run `web-ext -s dist run` and it will open Firefox with the extension loaded. Keep `npm start` running so that the `dist` directory is updated as changes are made.