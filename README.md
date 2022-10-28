# Archived! [2nd Edition Repo Has Moved](https://github.com/nature-of-code/book-website-2nd-edition)

* https://github.com/nature-of-code/book-website-2nd-edition/issues/158

## The Nature of Code Book Project with p5.js
> Repository for The Nature of Code book with p5.js

Hello.  If you found your way here you have found the raw source material for my Nature of Code book.  The book is for sale in PDF and print forms at [natureofcode.com](http://www.natureofcode.com). There, you'll also find a free version of the book available as HTML.  

You may notice that all of the book's content is here -- illustrations, raw text (html), and well as design elements (CSS).  The book is licensed under the [Creative Commons Attribution-NonCommercial 3.0 Unported License](http://creativecommons.org/licenses/by-nc/3.0/).  You are free to share and remix the book, as long as you provide attribution and do not attempt to re-sell.

All of the book's code examples are licensed under the [MIT License](http://opensource.org/licenses/MIT).

By using GitHub to host all the raw material for the book, it's my hope that I will be able to more easily manage corrections and revisions.  Please use the GitHub issues for bug reports, typos, suggestions, etc.  You are also welcome to fork the repo, make corrections on your own and submit a pull request.

This repository is in progress.  It's for a new edition of the book that I will be generating with [The Magic Book](https://github.com/magicbookproject/magicbook).  For the previous version of the book, you can check out the [Nature of Code archived repo](https://github.com/shiffman/The-Nature-of-Code-archive).

# Steps to Build The Nature of Code

* Install [node.js](https://nodejs.org/en/).
* At a terminal prompt ([more info here](https://github.com/magicbookproject/magicbook/)):
```
npm install magicbook -g
```
* Clone (or download) this very repo.
* In terminal, navigate to the directory where you cloned this repo.
* Enter these commands:
```
npm install
magicbook build
```
* Navigate to "build" directory and look for generated files.

###### Build Notes
On Mac OSX, you need to install princexml along with the node-prince `brew cask install prince`  or download via [here.](http://www.princexml.com/download/)

More information about Magic Book at [its README](https://github.com/magicbookproject/magicbook/blob/master/README.md).


# Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for details.
