# ASSETS

This directory contains your un-compiled assets such as LESS, SASS, or JavaScript.

More information about the usage of this directory in the documentation:
https://nuxtjs.org/guide/assets#webpacked

**This directory is not required, you can delete it if you don't want to use it.**

## Customisation

When adding to or amending a Bootstrap component, create a project specific file (preferably with the same filename so as to maintain consistency) and import the respective Bootstrap file from within. Fro example:

```scss
// filename: 'assets/sass/components/_button.scss'

@import '~bootstrap/scss/buttons';

.btn {
  // custom button styles
}

// Additional modified button component
.btn-inline { }
```
